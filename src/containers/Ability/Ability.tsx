import { Skill } from '@/components/Skill';
import { Strength } from '@/components/Strength';
import { Tab, TabLayout } from '@/components/common/TabLayout';
import styles from './Ability.module.css';
import { Education } from '@/components/Education';
import { EDUCATIONS, SKILLS, STRENGTHS } from '@/constants/data';

export default function Ability() {
  return (
    <TabLayout width={1140} height={600} tabBoxesWidth={400}>
      <Tab label="Skills">
        <div className={styles.skillsWrapper}>
          <div className={styles.skillWrapper}>
            {SKILLS.map((skill) => (
              <Skill key={skill} content={skill} />
            ))}
          </div>
          <div className={styles.strengthWrapper}>
            {STRENGTHS.map(({ title, description }) => (
              <Strength key={title} title={title} descriptions={description} />
            ))}
          </div>
        </div>
      </Tab>

      <Tab label="Education">
        {EDUCATIONS.map(({ organization, content }) => (
          <Education
            key={organization.school}
            organization={organization}
            content={content}
          />
        ))}
      </Tab>
    </TabLayout>
  );
}
