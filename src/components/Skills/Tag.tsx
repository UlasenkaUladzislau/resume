import { FC } from "react";
import './tag.css'

interface TagProps {
  tag: string;
  color: string;
}

export const Tag: FC<TagProps> = ({ tag, color, }) => {
  return (
    <span
      className="tag"
      style={{ backgroundColor: color }}
    >
      {tag}
    </span>
  );
};