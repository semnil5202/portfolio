import { Typography } from '../common/Typography';
import styles from './Education.module.css';

interface OrganizationProps {
  school: string;
  date: string;
  motherSchool?: string;
  link?: string;
}

interface ContentProps {
  title: string;
  descriptions: string[];
}

interface Props {
  organization: OrganizationProps;
  content: ContentProps;
}

export default function Education({ organization, content }: Props) {
  const { school, date, motherSchool = '', link = '' } = organization;
  const { title, descriptions } = content;

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebarWrapper}>
        <Typography size="medium" weight="bold">
          {school}
        </Typography>
        <Typography>{date}</Typography>
        {motherSchool && <Typography color="gray">{motherSchool}</Typography>}
        {link && (
          <Typography
            tag="a"
            href="https://github.com/semnil5202/woowacourse-archive"
            target="_blank"
            color="gray"
            customStyle={{
              width: 'min-content',
            }}
          >
            {link}
          </Typography>
        )}
      </div>
      <div className={styles.contentWrapper}>
        <Typography size="medium" weight="bold">
          {title}
        </Typography>
        <ul className={styles.descriptionWrapper}>
          {descriptions.map((description, idx) => (
            <Typography key={`${description}-${idx}`} tag="li">
              {description}
            </Typography>
          ))}
        </ul>
      </div>
    </div>
  );
}
