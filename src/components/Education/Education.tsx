import { FC } from "react";
import { DatePeriod } from "../DatePeriod/DatePeriod"
import './index.css';
import gsu from './gsu.png'
import { Image } from "semantic-ui-react";

type EducationProps = {
   start: string;
   end: string;
   university: string;
   description: string;
};

export const Education: FC<EducationProps> = ({
   start, end, university, description
}) => {
   return (
      <div className="education-container">
        <Image size="mini" src={gsu} className="gsu-logo" />
        <div className="education-text">
         <div className="education">
          <div className="description">{description}</div>
          <div className="date-period">
            <DatePeriod start={start} end={end} />
          </div>
          </div>
          <i className="university">{university}</i>
        </div>
      </div>
    );
}