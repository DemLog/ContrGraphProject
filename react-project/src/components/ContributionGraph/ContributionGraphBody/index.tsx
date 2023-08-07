import React from "react";
import {ContributionGraphBodyProps} from "@components/ContributionGraph/ContributionGraphBody/props";
import {WeekDaysEnum} from "@core/types/enums/date";
import {convertDate, getDatesByWeekday} from "@core/scripts/dateWorker";
import {ContributionGraphElement} from "@components/ContributionGraph/ContributionGraphElement";

export const ContributionGraphBody: React.FC<ContributionGraphBodyProps> = (props: ContributionGraphBodyProps) => {
    const onGetDatesByWeekday = (weekDay: number, num: number) => {
        const currentDates = props.data.filter((el) => el.date.getDay() === weekDay);
        const startDate = props.minDate(num);
        const endDate = props.currentDate;
        return getDatesByWeekday(currentDates, startDate, endDate, weekDay);
    }

    return (
        <tbody>
        {props.sortedWeeks.map((day, index) =>
            <tr key={`tr-body-index-${index}`}>
                <td>
                    <span style={{display: [0, 2, 4].includes(day) ? 'inline' : 'none'}}>{WeekDaysEnum[day]}</span>
                </td>
                {onGetDatesByWeekday(day, index).map((value, index2) =>
                    <td key={`td-body-index-${index}-${index2}`}>
                        <ContributionGraphElement data={value}>
                            <div className="contribution-graph-element__contributions">
                                <span>{`${value.score > 0 ? value.score : 'No'} contributions`}</span>
                            </div>
                            <div className="contribution-graph-element__date">
                                {`${convertDate(value.date)}`}
                            </div>
                        </ContributionGraphElement>
                    </td>
                )}
            </tr>
        )}
        </tbody>
    );
};