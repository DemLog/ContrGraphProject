import {IContribution} from "@core/types/IContribution";

export interface ContributionGraphBodyProps {
    sortedWeeks: number[];
    data: IContribution[];
    currentDate: Date;
    minDate: (num?: number) => Date;
}