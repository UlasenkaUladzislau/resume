import { Icon } from "semantic-ui-react";
import { FC } from "react";
import './index.css';

export const ProfileLinks: FC = () => {
    const profileLinks = {
      github: "https://github.com/your-github-profile",
      xing: "https://www.xing.com/profile/your-xing-profile",
      linkedin: "https://www.linkedin.com/in/your-linkedin-profile",
    };
  
    return (
      <div>
        <a href={profileLinks.github} target="_blank" rel="noopener noreferrer">
          <Icon name="github" size="large" link />
        </a>
        <a href={profileLinks.xing} target="_blank" rel="noopener noreferrer">
          <Icon name="xing" size="large" link />
        </a>
        <a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <Icon name="linkedin" size="large" link />
        </a>
      </div>
    );
  };