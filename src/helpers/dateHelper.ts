import { Item } from "../types/Item";

export const getCurrentMonth = (date?: Date) => {
    let now = date || new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

export const filterListByMonth = (list: Item[], date: string) => {

    let [year, month] = date.split('-')

    const cloneList = list.filter((item) => {
        return item.date.getMonth() + 1 === parseInt(month) && item.date.getFullYear() === parseInt(year);
    })

    return cloneList;
}

export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;

}

export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-')
    let namesMonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return `${namesMonths[parseInt(month) - 1]} de ${year}`;
}

export const getDateByCurrentMonth = (currentMonth: string): Date => {
    let [year, month] = currentMonth.split('-')
    return new Date(parseInt(year), parseInt(month) - 1, 1);
}

export const dateFromString = (dateString: string): Date => {
    let [ year, month, day] = dateString.split('-');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
}

const addZeroToDate = (n:number): string => n < 10 ? `0${n}` : `${n}`;
