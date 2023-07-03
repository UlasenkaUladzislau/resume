import { Icon } from "semantic-ui-react";
import { FC } from "react";
import './index.css';

export const ProfileLinks: FC = () => {
    const profileLinks = {
      github: "https://github.com/UlasenkaUladzislau",
      xing: "https://www.xing.com/profile/Uladzislau_Ulasenka/cv",
      linkedin: "https://www.linkedin.com/in/uladzislau-ulasenka-284ab699/",
      skype: 'https://join.skype.com/invite/htvsjrAW9URo',
      'stack overflow': 'https://stackoverflow.com/users/8240061/uladzislau-ulasenka'
    };

    const size = "big";
  
    return (
      <div className="profile-links">
        <a href={profileLinks.github} target="_blank" rel="noopener noreferrer">
          <Icon name="github" size={size} link />
        </a>
        <a href={profileLinks.xing} target="_blank" rel="noopener noreferrer">
          <Icon name="xing" size={size} link />
        </a>
        <a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <Icon name="linkedin" size={size} link />
        </a>
        <a href={profileLinks["stack overflow"]} target="_blank" rel="noopener noreferrer">
          <Icon name="stack overflow" size={size} link />
        </a>
        <a href={profileLinks.skype} target="_blank" rel="noopener noreferrer">
          <Icon name="skype" size={size} link />
        </a>
      </div>
    );
  };