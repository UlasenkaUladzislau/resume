import { Header } from "semantic-ui-react"
import { Job } from "./Job"
import getquin from "./icons/getquin.jpeg"
import hilscher from "./icons/hilscher.jpeg"
import sva from "./icons/sva.jpg"
import startmatter from "./icons/startmatter.jpeg"
import linija from "./icons/linija.png"


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
        description: 'Develop the website and mobile application for a social network for investors and portfolio tracking purposes',
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
        description: 'I worked on the development of the Automation Installation Framework, a software program for centralized remote installation, configuration, and removal of programs on network machines',
    }, {
        description: 'I was involved in developing an Integrative Disaster Recovery solution, which aimed to provide a comprehensive system for managing and recovering from various types of disasters',
        website: 'idr-manager'
    }, {
        description: 'Сar dealer portal that facilitated car sales and insurance processes for dealers'
    }]
}, {
    start: '01/2018',
    end: '02/2020',
    position: 'Full Stack Developer',
    location: 'Frankfurt, Germany',
    website: 'https://www.hilscher.com',
    icon: hilscher,
    companyName: 'Hilscher Gesellschaft für Systemautomation mbH',
    projects: [{
        description: 'Developed an industrial device search engine, enabling users to find and explore various industrial devices efficiently',
        website: 'www.netiot.com'
    }, {
        description: 'Developed a comprehensive system for managing devices, containers, users, permissions, organizations and other components. Allowed users to configure the devices, access real- time data from sensors, export data, and store it on a Network Attached Storage (NAS) system.',
        website: 'www.netfield.io'
    }, {
        description: 'Developed administrator pages and tools for efficient management and monitoring of network devices',
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
        description: 'Developed a platform that enabled users to effortlessly create stunning and profitable business websites.',
        website: 'www.heroicnow.com'
    }, {
        description: 'Developed a social network platform focused on neighborhood communication.',
    }, {
        description: 'development of a Content Management System (CMS) that allowed users to create their own websites through a user-friendly portal',
    }]
}, {
    start: '02/2012',
    end: '02/2014',
    position: 'Systems Administrator',
    location: 'Gomel, Belarus',
    icon: linija,
    companyName: 'Liniya Snosa',
    website: 'www.liniyasnosa.by',
    projects: [{
        description: 'Managed local network administration, troubleshooting and resolving issues',
    }]
}]

export const Jobs = () => {
 return <>
    <Header className="job-header">Jobs:</Header>
    {jobs.map((job, index) => (
        <div key={index}>
          <Job {...job} />
        </div>
      ))}
 </>
}