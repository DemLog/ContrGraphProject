import React from "react";
import {ContributionGraphHeadProps} from "@components/ContributionGraph/ContributionGraphHead/props";
import {MonthsEnum} from "@core/types/enums/date";

export const ContributionGraphHead: React.FC<ContributionGraphHeadProps> = (props: ContributionGraphHeadProps) => {
    const getColumnSpan = (monthNum: number) => {
        if (monthNum === MonthsEnum.Июль
            || monthNum === MonthsEnum.Окт
            || monthNum === MonthsEnum.Янв
            || monthNum === MonthsEnum.Апр){
            return 5;
        }

        return 4;
    }

    return (
        <thead>
            <tr>
                <td>
                    <span style={{display:"none"}}>Дни недели</span>
                </td>
                {props.sortedMonths.map((value, index) =>
                    <td key={`td-months-${index}`} colSpan={getColumnSpan(value)}>{MonthsEnum[value]}</td>
                )}
            </tr>
        </thead>
    );
};