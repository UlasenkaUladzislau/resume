import { FC } from "react";
import './index.css';
import { Header, Label } from "semantic-ui-react";

type SkillSection = {
    color: 'red' | 'grey' | 'black';
    tags: string[];
};

const topSkills: SkillSection = {
    color: 'red',
    tags: ['Javascript', 'CSS3', 'HTML5', 'Typescript', 'ReactJS']
};

const frameworks: SkillSection = {
    color: 'grey',
    tags: ['VueJS', 'NodeJs', 'Django', 'Angular', 'React Native'],
};

const languages: SkillSection = {
    color: 'black',
    tags: ['C#', 'Python'],
};

const UIFrameworks: SkillSection = {
    color: 'grey',
    tags: ['UX', 'Bootstrap', 'Material-UI', 'Semantic UI'],
};

const versionControlTools: SkillSection = {
    color: 'black',
    tags: ['Git', 'SVN'],
};

const databases: SkillSection = {
    color: 'grey',
    tags: ['PostgreSQL', 'Redis', 'MySQL'],
};

const services: SkillSection = {
    color: 'grey',
    tags: ['Azure', 'IoT', 'Elasticsearch'],
};

const tests: SkillSection = {
    color: 'black',
    tags: ['Selenium', 'Cypress', 'Jest'],
};

const OS: SkillSection = {
    color: 'grey',
    tags: ['Mac OS', 'Ubuntu', 'Windows', 'Yocto'],
};

const others: SkillSection = {
    color: 'black',
    tags: ['Network administration'],
};

const skills = [topSkills, frameworks, languages, UIFrameworks, versionControlTools, databases, services, tests, OS, others];


export const Skills: FC = () => {
 return( <>
 <Header className="job-header">Skills:</Header>
    <div className="tags">
      {skills
        .map(skillGroup => skillGroup.tags
        .map(skill => <Label active className="skill-label" color={skillGroup.color}>{skill}</Label>))}
    </div></>)
}