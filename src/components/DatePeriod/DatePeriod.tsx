import { FC } from "react"

type DatePeriodProps = {
    start: string;
    end: string;
};

export const DatePeriod: FC<DatePeriodProps> = ({
    start, end
}) => {
    return <>{start} - {end}</>
}