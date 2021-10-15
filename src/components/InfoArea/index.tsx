import * as C from './styles';
import { formatCurrentMonth, getDateByCurrentMonth } from '../../helpers/dateHelper';
import { ResumeItem } from '../ResumoItem';

type Props = {
    currentMonth: string;
    onMonthChange: (date: Date) => void;
    income: number;
    expanse: number;
}

export const InfoArea = ({ currentMonth, onMonthChange,income, expanse }: Props) => {

    const onChangeMonth = (value: number) => {        
        let currentDate = getDateByCurrentMonth(currentMonth);        
        currentDate.setMonth(currentDate.getMonth() + value);
        onMonthChange(currentDate);        
    }

    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={()=>onChangeMonth(-1)}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={()=>onChangeMonth(1)}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title="Receitas" value={income} />
                <ResumeItem title="Despesas" value={expanse} />
                <ResumeItem title="Balanço" value={income - expanse} color={(income - expanse) < 0 ? 'red': 'green'}/>
            </C.ResumeArea>
        </C.Container>
    )
}