import { ListText } from '../common/ListText';
import { Typography } from '../common/Typography';
import styles from './Education.module.css';

interface OrganizationProps {
  school: string;
  date: string;
  motherSchool?: string;
  links?: {
    name: string;
    link: string;
  }[];
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
  const { school, date, motherSchool = '', links = [] } = organization;
  const { title, descriptions } = content;

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebarWrapper}>
        <Typography size="medium" weight="bold">
          {school}
        </Typography>
        <Typography>{date}</Typography>
        {motherSchool && <Typography color="gray">{motherSchool}</Typography>}
        {links &&
          links.map(({ name, link }) => (
            <Typography
              key={link}
              tag="a"
              href={link}
              target="_blank"
              color="gray"
              customStyle={{
                width: 'min-content',
              }}
            >
              {name}
            </Typography>
          ))}
      </div>
      <div className={styles.contentWrapper}>
        <Typography size="medium" weight="bold">
          {title}
        </Typography>
        <ul className={styles.descriptionWrapper}>
          {descriptions.map((description) => (
            <ListText key={description}>{description}</ListText>
          ))}
        </ul>
      </div>
    </div>
  );
}
