import { Skill } from '@/components/Skill';
import { Strength } from '@/components/Strength';
import { Tab, TabLayout } from '@/components/common/TabLayout';
import styles from './Ability.module.css';
import { Education } from '@/components/Education';

export default function Ability() {
  return (
    <TabLayout width={1140} tabBoxesWidth={400}>
      <Tab label="skills">
        <div className={styles.skillsWrapper}>
          <div className={styles.skillWrapper}>
            <Skill content="HTML" />
            <Skill content="CSS" />
            <Skill content="JavaScript" />
            <Skill content="TypeScript" />
            <Skill content="React" />
            <Skill content="Recoil" />
            <Skill content="Styled-Components" />
            <Skill content="Jest" />
            <Skill content="Cypress" />
            <Skill content="React-testing-library" />
            <Skill content="MSW" />
            <Skill content="Storybook" />
          </div>
          <div className={styles.strengthWrapper}>
            <Strength
              title="React"
              descriptions={['장점 언급', '장점 언급2']}
            />
            <Strength title="NEXT" descriptions={['장점 언급', '장점 언급2']} />
            <Strength
              title="HTML/CSS"
              descriptions={['장점 언급', '장점 언급2']}
            />
            <Strength
              title="JS/TS"
              descriptions={['장점 언급', '장점 언급2']}
            />
          </div>
        </div>
      </Tab>

      <Tab label="education">
        <Education
          organization={{
            school: '우아한테크코스 5기',
            date: '2023.02 - 2023.11',
            motherSchool: '우아한형제들',
            link: 'archive',
          }}
          content={{
            title: '웹 프론트엔드 과정',
            descriptions: [
              '페어 프로그래밍과 현직자 코드 리뷰를 통한 미션 중심의 학습',
              '팀 문화 구축, 스프린트, 코드 리뷰 등 깊이 있는 협업 경험',
              '기획, 개발, 유지 보수 과정의 실 사용자가 있는 팀 프로젝트 수행',
            ],
          }}
        />
        <Education
          organization={{
            school: '순천향대학교',
            date: '2017.02 - 2023.02',
          }}
          content={{
            title: '정보보호학 (학사)',
            descriptions: [
              'Hidden Markov Model을 이용한 Anomaly Detection 수행 경험',
              'SYN Flood Attack, Key Log 등의 방법을 통해 취약점 분석 경험',
            ],
          }}
        />
      </Tab>
    </TabLayout>
  );
}
