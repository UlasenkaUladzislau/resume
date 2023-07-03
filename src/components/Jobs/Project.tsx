import { FC } from "react";
import { DatePeriod } from "../DatePeriod/DatePeriod"
import { URL } from "url";
import { IProject } from "./Jobs";

export const Project: FC<IProject> = ({
    description, website,
}) => {
 return <>
    <a href={website}>{description}</a>
 </>
}