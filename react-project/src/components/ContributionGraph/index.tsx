import React, {useEffect, useState} from "react";
import {ContributionGraphProps} from "@components/ContributionGraph/props";

import './style.scss';
import {ContributionGraphElement} from "@components/ContributionGraph/ContributionGraphElement";
import {getSortedMonths, getSortedWeekDays} from "@core/scripts/dateWorker";
import {ContributionGraphHead} from "@components/ContributionGraph/ContributionGraphHead";
import {ContributionGraphBody} from "@components/ContributionGraph/ContributionGraphBody";

export const ContributionGraph: React.FC<ContributionGraphProps> = (props: ContributionGraphProps) => {
    const currentDate = new Date();
    const [sortedMonths, setSortedMonths] = useState<number[]>([]);
    const [sortedWeekdays, setSortedWeekdays] = useState<number[]>([]);

    const getMinDate = (num?: number) => {
        const fiftyWeeksAgo = new Date(currentDate);
        fiftyWeeksAgo.setDate(fiftyWeeksAgo.getDate() - (49 * 7) + 3 + (num || 0));
        return fiftyWeeksAgo;
    };

    useEffect(() => {
        setSortedMonths(getSortedMonths(currentDate));
        setSortedWeekdays(getSortedWeekDays(currentDate));
    }, [])

    return (
        <div className='contribution-graph'>
            <table>
                <ContributionGraphHead sortedMonths={sortedMonths}/>
                <ContributionGraphBody sortedWeeks={sortedWeekdays} data={props.data} currentDate={currentDate}
                                       minDate={(num?: number) => getMinDate(num)}/>
            </table>
            <div className='contribution-graph-legend'>
                <span>Меньше</span>
                <ContributionGraphElement data={{score: 0}}>
                    <div className="contribution-graph-element__contributions">
                        <span>No contributions</span>
                    </div>
                </ContributionGraphElement>
                <ContributionGraphElement data={{score: 9}}>
                    <div className="contribution-graph-element__contributions">
                        <span>1-9 contributions</span>
                    </div>
                </ContributionGraphElement>
                <ContributionGraphElement data={{score: 19}}>
                    <div className="contribution-graph-element__contributions">
                        <span>10-19 contributions</span>
                    </div>
                </ContributionGraphElement>
                <ContributionGraphElement data={{score: 29}}>
                    <div className="contribution-graph-element__contributions">
                        <span>20-29 contributions</span>
                    </div>
                </ContributionGraphElement>
                <ContributionGraphElement data={{score: 39}}>
                    <div className="contribution-graph-element__contributions">
                        <span>30+ contributions</span>
                    </div>
                </ContributionGraphElement>
                <span>Больше</span>
            </div>
        </div>
    );
};