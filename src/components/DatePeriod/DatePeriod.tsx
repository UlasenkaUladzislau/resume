import { FC } from "react"
import { Header } from "semantic-ui-react";

type DatePeriodProps = {
    start: string;
    end: string;
};

export const DatePeriod: FC<DatePeriodProps> = ({
    start, end
}) => {
    return <Header as="h5">{start} - {end}</Header>
}