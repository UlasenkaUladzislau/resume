import { Header } from "semantic-ui-react";
import { Education } from "./Education";
import './index.css';

const educations = [{
    start: '09/2010',
    end: '06/2015',
    university: 'Francisk Skorina Gomel State University',
    description: 'Specialist Degree, IT Engeneering',
}, {
    start: '09/2015',
    end: '02/2017',
    university: 'Francisk Skorina Gomel State University',
    description: 'Master of Physical and Mathematical Sciences',
}]

export const Educations = () => {
 return <>
    <Header className="education-header">Education:</Header>
    {educations.map(education => <Education {...education} />)}
 </>
}