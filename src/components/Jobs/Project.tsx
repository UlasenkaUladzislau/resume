import { FC } from "react";
import { IProject } from "./Jobs";
import { Icon, List } from "semantic-ui-react";
import './index.css';

export const Project: FC<IProject> = ({
    description, website,
}) => {
 return <List.Item as="li">
    {description}
    {website && <a target="_blank" className="project-link" href={website}>
        <Icon size="small" name="linkify" />
    </a>}
 </List.Item>
}