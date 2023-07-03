import { Header } from "semantic-ui-react"
import { Education } from "./Education"

const educations = [{
    start: '09/2010',
    end: '06/2015',
    university: 'Francisk Skorina Gomel State University',
    description: 'Specialist Degree, IT Engeneering',
}, {
    start: '09/2015',
    end: '02/2017',
    university: 'Francisk Skorina Gomel State University',
    description: 'Master of Physical and Mathematical Sciences, Mathematics',
}]

export const Educations = () => {
 return <>
    <Header>Education:</Header>
    {educations.map(education => <Education {...education} />)}
 </>
}