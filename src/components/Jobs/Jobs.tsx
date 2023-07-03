import { Header } from "semantic-ui-react"
import { Job } from "./Job"
import getquin from "./icons/getquin.jpeg"
import hilscher from "./icons/hilscher.jpeg"
import sva from "./icons/sva.jpeg"
import startmatter from "./icons/startmatter.jpeg"


export interface IProject {
    description: string;
    website?: string;
}
  
export interface IJob {
    start: string;
    end: string;
    position: string;
    companyName: string;
    location: string;
    website?: string;
    icon: any;
    projects: IProject[];
}

const jobs: IJob[] = [{
    start: '02/2022',
    end: 'now',
    position: 'Senior Software Engineer',
    companyName: 'QUIN Technologies GmbH',
    location: 'Berlin, Germany (remote)',
    icon: getquin,
    website: 'getquin.com',
    projects: [{
        description: 'Develop social network for all kinds of investors',
        website: 'www.app.getquin.com'
    }]
}, {
    start: '02/2020',
    end: '02/2022',
    icon: sva,
    position: 'Full Stack Developer',
    companyName: 'SVA System Vertrieb Alexander GmbH',
    location: 'Wiesbaden, Germany', 
    website: 'www.sva.de',
    projects: [{
        description: 'Working on Automation Installation Framework',
    }, {
        description: 'Develop a Integrative Disaster Recovery solution',
        website: 'idr-manager'
    }]
}, {
    start: '01/2018',
    end: '02/2020',
    position: 'Full Stack Developer',
    location: 'Frankfurt Am Main Area, Germany',
    website: 'https://www.hilscher.com',
    icon: hilscher,
    companyName: 'Hilscher Gesellschaft für Systemautomation mbH',
    projects: [{
        description: 'Network device information portal',
        website: 'www.netiot.com'
    }, {
        description: 'Edge gateways management system',
        website: 'www.netfield.io'
    }, {
        description: 'Create administrator pages and tools to manage and monitor network devices',
    }]
}, {
    start: '08/2014',
    end: '08/2017',
    position: 'Full Stack Developer',
    companyName: 'Start Matter',
    location: 'Gomel, Belarus',
    icon: startmatter,
    website: 'https://startmatter.com/',
    projects: [{
        description: 'Working on site builder project',
        website: 'www.heroicnow.com'
    }, {
        description: 'Develop a social network for neighborhood communication.',
    }]
}, {
    start: '02/2012',
    end: '02/2014',
    position: 'Systems Administrator',
    location: 'Gomel, Belarus',
    icon: startmatter,
    companyName: 'Liniya Snosa',
    website: 'www.liniyasnosa.by',
    projects: [{
        description: 'Administration of a local network. Manage, troubleshooting, network security.',
    }]
}]

export const Jobs = () => {
 return <>
    <Header>Jobs:</Header>
    {jobs.map((job, index) => (
        <div key={index}>
          <Job {...job} />
        </div>
      ))}
 </>
}