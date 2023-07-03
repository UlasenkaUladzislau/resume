import {Image } from "semantic-ui-react";
import profile from './pro.png';
import './index.css';

export const Foto = () => {
  return (
    <div className="image-wrapper">
      <Image size="medium" src={profile} />
    </div>
  );
}
