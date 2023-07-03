import { Flag, Rating } from "semantic-ui-react";
import { FC } from "react";
import { ILanguage } from "./Languages";
import './index.css';
import FlagIcon from "country-flag-icons/react/3x2";

export const Language: FC<ILanguage> = ({ level, lang, Flag }) => {
  return (
    <div className="language">
      <div className="language-info">
        <Flag className="flag" />
        <span>{lang}</span>
      </div>
      <Rating
        icon="star"
        rating={level}
        maxRating={5}
        disabled
        className="language-rating"
      />
    </div>
  );
};