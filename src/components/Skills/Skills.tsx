import { FC } from "react";
import { Label } from "semantic-ui-react";
import './index.css';

type SkillSection = {
    color: 'red' | 'grey' | 'black';
    tags: string[];
};

const topSkills: SkillSection = {
    color: 'red',
    tags: ['ReactJS', 'Javascript', 'Typescript', 'CSS3', 'HTML5', 'React Native']
};

const frameworks: SkillSection = {
    color: 'grey',
    tags: ['VueJS', 'Django', 'Angular', 'NodeJs'],
};

const languages: SkillSection = {
    color: 'black',
    tags: ['C#', 'Python'],
};

const UIFrameworks: SkillSection = {
    color: 'grey',
    tags: ['Bootstrap', 'Semantic UI', 'Material-UI'],
};

const versionControlTools: SkillSection = {
    color: 'black',
    tags: ['Git', 'SVN'],
};

const databases: SkillSection = {
    color: 'grey',
    tags: ['PostgreSQL', 'Redis', 'MySQL'],
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

const skills = [topSkills, frameworks, languages, UIFrameworks, versionControlTools, databases, tests, OS, others];


export const Skills: FC = () => {
 return(
    <div>
      {skills
        .map(skillGroup => skillGroup.tags
        .map(skill => <Label active className="skill-label" color={skillGroup.color}>{skill}</Label>))}
    </div>)
}