import {IContribution} from "@core/types/IContribution";
import {ReactNode} from "react";

export interface ContributionGraphElementProps {
    data: IContribution;
    children: ReactNode;
}