import { useState } from 'react';
import { categories } from '../../data/categories';
import { Item } from '../../types/Item';
import * as C from './styles';
import { dateFromString } from '../../helpers/dateHelper'
type Props = {
    onAddItem: (item: Item) => void;
}

export const InputArea = ({ onAddItem }: Props) => {

    const [dateField, setDateField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [titleField, setTitleField] = useState('');
    const [valueField, setValueField] = useState(0);

    let categoriesKeys: string[] = Object.keys(categories);

    const handleAddItem = () => {
        const erros: string[] = [];

        if ( dateField === '') {
            erros.push('Data não pode ser nula')
        }
        if ( categoryField === '') {
            erros.push('Categoria não pode ser nula')
        }
        if ( titleField === '') {
            erros.push('Título não pode ser nulo')
        }
        if ( valueField === 0) {
            erros.push('Valor não pode ser nulo')
        }  
        
        if ( erros.length ) {
            alert(erros.join('.\n '))
        } else {
            onAddItem({
                date: dateFromString(dateField),
                title: titleField,
                value: valueField,
                category: categoryField
            })
            clearFields();
        }
    }

    const clearFields = () => {
        setDateField('')
        setTitleField('')
        setValueField(0)
        setCategoryField('')
    }
    return (
        <C.Container>

            <C.InputLabel>
                <C.InputTitle>Data</C.InputTitle>
                <C.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>Título</C.InputTitle>
                <C.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>Categoria</C.InputTitle>
                <C.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
                    <option value="">-</option>
                    {categoriesKeys.map((item, index) => (
                        <option key={index} value={item}>{categories[item].title}</option>
                    ))}
                </C.Select>
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>Valor</C.InputTitle>
                <C.Input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>&nbsp;</C.InputTitle>
                <C.Button onClick={handleAddItem}>Adicionar</C.Button>
            </C.InputLabel>

        </C.Container>
    );
}