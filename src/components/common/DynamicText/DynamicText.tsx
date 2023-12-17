'use client';

import { useEffect, useRef, useState } from 'react';
import { Typography } from '../Typography';
import styles from './Dynamic.module.css';

interface Props {
  texts: string[];
}

interface DigitProps {
  ten: number;
  one: number;
}

const TYPING_TIME = 80;
const CHANGING_TEXT_DELAY_TIME = 2400;

const convertTexts = (texts: string[]) => texts.map((text) => text.split(''));

export default function DynamicText({ texts }: Props) {
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [currentText, setCurrentText] = useState('');
  const [dynamicTexts, _] = useState<string[][]>(convertTexts(texts));

  const timerId = useRef<NodeJS.Timeout | null>(null);
  const delayTime = useRef<number>(TYPING_TIME);
  const digit = useRef<DigitProps>({ ten: 0, one: 0 });

  useEffect(() => {
    if (timerId.current) clearTimeout(timerId.current);

    const nextLetter = dynamicTexts[digit.current.ten][digit.current.one];

    if (!isEnd) {
      timerId.current = setTimeout(() => {
        setCurrentText((prevLetter) => prevLetter + nextLetter);

        digit.current.one++;

        if (currentText.length === dynamicTexts[digit.current.ten].length - 1) {
          delayTime.current = CHANGING_TEXT_DELAY_TIME;
          setIsEnd(true);
          setIsTyping(false);
        }
      }, delayTime.current);
    } else {
      timerId.current = setTimeout(() => {
        if (delayTime.current === CHANGING_TEXT_DELAY_TIME) {
          delayTime.current = TYPING_TIME;
        }

        setIsTyping(true);

        setCurrentText((prevLetter) => {
          const letters = prevLetter.split('');
          letters.pop();

          return letters.join('');
        });

        if (currentText.length <= 1) {
          digit.current.one = 0;
          setIsEnd(false);

          if (digit.current.ten === dynamicTexts.length - 1) {
            digit.current.ten = 0;
            return;
          }
          digit.current.ten++;
        }
      }, delayTime.current);
    }
  }, [currentText, texts, isTyping, dynamicTexts, isEnd]);

  return (
    <div className={styles.wrapper}>
      <Typography
        tag="h2"
        size="large"
        weight="bold"
        color="default"
        customStyle={{ display: 'inline' }}
      >
        {currentText}
      </Typography>
      <span
        className={`${styles.typePointer} ${
          !isTyping && styles.animationTypePointer
        }`}
      >
        |
      </span>
    </div>
  );
}
