import React from "react";
import {ContributionGraphProps} from "@components/ContributionGraph/props";

import './style.scss';

export const ContributionGraph: React.FC<ContributionGraphProps> = (props: ContributionGraphProps) => {
    return (
        <div className='contribution-graph'>
            <table>

            </table>
            <div className='contribution-graph-legend'>

            </div>
        </div>
    );
};