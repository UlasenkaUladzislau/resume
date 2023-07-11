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
    website: 'https://getquin.com',
    projects: [{
        description: 'Develop the website using Next.JS and native mobile apps using React Native for a social network for investors and portfolio tracking purposes',
        website: 'https://app.getquin.com/'
    }]
}, {
    start: '02/2020',
    end: '02/2022',
    icon: sva,
    position: 'Full Stack Developer',
    companyName: 'SVA System Vertrieb Alexander GmbH',
    location: 'Wiesbaden, Germany', 
    website: 'https://www.sva.de/',
    projects: [{
        description: 'Developed an administrator panel for the Automation Installation Framework using ReactJS and Semantic UI, enabling centralized remote installation, configuration, and removal of programs on network machines',
    }, {
        description: 'Designed and implemented an extensive Disaster Recovery solution, enabling comprehensive management and recovery from diverse types of disasters',
        website: 'https://www.sva.de/de/products/idr-manager'
    }, {
        description: 'Create dealer portal that simplified car sales and insurance processes for dealers'
    }, {
        description: 'Developed a portal for searching and viewing Bundestag speeches using ReactJS'
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
        description: 'Developed an industrial device search engine using Elasticsearch, enabling users to find and explore various industrial devices efficiently',
        website: 'https://www.hilscher.com/fr/blog/sps-ipc-drives-2017/'
    }, {
        description: 'Developed a comprehensive system for managing devices, containers, users, permissions, organizations and other components using Azure. Create with ReactJS UI allowed users to configure the devices, access real-time data from sensors, export data, and store it on a Network Attached Storage system',
        website: 'https://www.netfield.io/'
    }, {
        description: 'Developed administrator pages and tools for efficient management and monitoring of network devices using C# and ReactJS',
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
        description: 'Developed using ReactJS and Django an editor that enabled users to effortlessly create stunning and profitable business websites',
        website: 'https://heroicnow.com/'
    }, {
        description: 'Create using Python and ReactJS a neighborhood-focused social network',
    }, {
        description: 'Development with help of Angular and Django a Content Management System that allowed users to create their own websites through a user-friendly portal',
    }]
}, {
    start: '02/2012',
    end: '02/2014',
    position: 'Systems Administrator',
    location: 'Gomel, Belarus',
    icon: linija,
    companyName: 'Liniya Snosa',
    website: 'http://www.liniyasnosa.by/',
    projects: [{
        description: 'Managed local network administration, troubleshooting and resolving issues',
    }, {
        description: 'Developed a corporate website for efficient online presence and brand representation',
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