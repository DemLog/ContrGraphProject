import {IContribution} from "@core/types/IContribution";
import {MonthsEnum, WeekDaysEnum} from "@core/types/enums/date";

const compareDates = (firstDate: Date, secondDate: Date) => {
    return !(firstDate.getFullYear() != secondDate.getFullYear()
        || firstDate.getMonth() != secondDate.getMonth()
        || firstDate.getDate() != secondDate.getDate());
}

export const getDatesByWeekday = (
    currentDates: IContribution[],
    startDate: Date,
    endDate: Date,
    weekDay: number
): IContribution[] => {
    const dates: IContribution[] = [];

    for (let date = startDate!; date <= endDate; date.setDate(date.getDate() + 1)) {
        const tem = currentDates.find((el) => el.date ? compareDates(el.date, date) : null);

        if (date.getDay() === weekDay) {
            if (!tem) {
                const emptyDate: IContribution = {
                    date: new Date(date),
                    score: 0
                }
                dates.push(emptyDate);
            } else {
                dates.push(tem);
            }
        }
    }

    return dates;
}

export const convertDate = (date: Date): string => {
    return `${WeekDaysEnum[date.getDay()]}, ${MonthsEnum[date.getMonth()+1]} ${date.getDate()}, ${date.getFullYear()}`
}

export const getSortedWeekDays = (currentDate: Date) => {
    const currentDay = currentDate.getDay();

    const days = [];

    for (let day = currentDay; day < 7; day++) {
        days.push(day);
    }

    for (let day = 0; day < currentDay; day++) {
        days.push(day);
    }

    return days;
}

export const getSortedMonths = (currentDate: Date) => {
    const currentMonth = currentDate.getMonth() + 1;

    const months = [];
    for (let month = currentMonth + 1; month <= 12; month++) {
        months.push(month);
    }

    for (let month = 1; month <= currentMonth; month++) {
        months.push(month);
    }

    return months;
}