'use client';

import { Children, ReactNode, useEffect, useState } from 'react';
import styles from './TabLayout.module.css';

interface TabPropsProps {
  'data-label'?: string;
  children?: React.ReactNode;
}

interface TabLayoutProps {
  width?: number;
  height?: number;
  tabBoxesWidth?: number;
  tabBoxesHeight?: number;
  children: ReactNode;
}

function TabLayout({
  width = 400,
  height = 400,
  tabBoxesWidth = width,
  tabBoxesHeight = height / 10,
  children,
}: TabLayoutProps) {
  const tabs = Children.toArray(
    children
  ) as React.ReactElement<TabPropsProps>[];
  const [position, setPosition] = useState<number>(0);

  console.log(tabs);

  const tabLayoutStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };
  const tabBoxesStyle = {
    width: `${tabBoxesWidth}px`,
    height: `${tabBoxesHeight}px`,
  };
  const tabBoxStyle = {
    width: `${tabBoxesWidth / tabs.length}px`,
    height: `${tabBoxesHeight}px`,
  };
  const tabSectionStyle = {
    width: `${width * tabs.length}px`,
    height: `${height - tabBoxesHeight}px`,
    transform: `translateX(${-width * position}px)`,
  };

  const switchClickedTab = (position: number) => {
    setPosition(position);
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--tab-width', `${width}px`);
  }, [width, tabs]);

  return (
    <section className={styles.tabLayout} style={tabLayoutStyle}>
      <div className={styles.tabBoxesContainer}>
        <div className={styles.tabBoxes} style={tabBoxesStyle}>
          {tabs.map((tab, idx) => (
            <div
              key={`${tab.props['data-label']}-${idx}`}
              className={styles.tabBox}
              style={{
                borderBottom: idx === position ? '1px solid #3483ec' : '',
                ...tabBoxStyle,
              }}
              onClick={() => switchClickedTab(idx)}
            >
              {tab.props['data-label'] || idx + 1}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.tabSection} style={tabSectionStyle}>
        {children}
      </div>
    </section>
  );
}

export default TabLayout;
