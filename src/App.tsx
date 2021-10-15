import { useEffect, useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { items } from './data/items';
import { categories } from './data/categories';
import { getCurrentMonth, filterListByMonth } from './helpers/dateHelper';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expanse, setExpanse] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth])

  useEffect(() => {

    let newIncome = 0;
    let newExpanse = 0;

    filteredList.forEach(item => categories[item.category].expanse ? newExpanse += item.value : newIncome += item.value);

    setIncome(newIncome);
    setExpanse(newExpanse);

  }, [filteredList])

  const handleMonthChange = (date: Date): void => {
    setCurrentMonth(getCurrentMonth(date));
  }

  const handleAddItem = ( item: Item ): void  => {
    const newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>Sistema Financeiro</C.HeaderTitle>
      </C.Header>
      <C.Body>

        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expanse={expanse}
        />

        <InputArea onAddItem={handleAddItem} />

        <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  );
}

export default App;