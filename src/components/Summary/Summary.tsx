import { Header, Label } from "semantic-ui-react"
import './index.css'
import { ProfileLinks } from "../Social/Social"

export const Summary = () => {
 return <>
    <Header as="h3" className="myName">Hallo! I'm Uladzislau Ulasenka <ProfileLinks /></Header>           
    <Label size="big" className="summary">
       Experienced full-stack developer with over 9 years of hands-on experience in software design, development, and integration. Proficient in a wide range of technologies, with a strong emphasis on frontend development 
    </Label>
 </>
}