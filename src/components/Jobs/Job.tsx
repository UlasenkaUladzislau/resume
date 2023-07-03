import { Header, Image } from "semantic-ui-react";
import { FC } from "react";
import { Project } from "./Project";
import { DatePeriod } from "../DatePeriod/DatePeriod";
import './index.css'
import { IJob } from "./Jobs";

export const Job: FC<IJob> = ({
   start,
   end,
   companyName,
   location,
   website,
   icon,
   position,
   projects,
 }) => {
   return (
      <div className="job-container">
        <Image className="job-logo" size="mini" src={icon} />
        <div className="job-info">
          <div className="position-period">
            <div className="position">
              <Header as="h4">{position}</Header>
            </div>
            <div className="date-period">
              <Header as="h5">
                <DatePeriod start={start} end={end} />
              </Header>
            </div>
          </div>
          <div className="company-location">
            <div className="companyName">
              <Header as="h5">
                <a href={website}>{companyName}</a>
              </Header>
            </div>
            <div className="location">
              <Header as="h5">{location}</Header>
            </div>
          </div>
        </div>
        <div className="projects">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    );
 };
