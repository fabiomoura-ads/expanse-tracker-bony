import { useState, useEffect } from 'react';
import { categories } from '../../data/categories';
import * as C from './styles';
import { ItemCategory } from '../../types/ItemCategory';

type Props = {
    value: string;
    onChange: (category: string) => void;
}

export const SelectCategory = ({value, onChange}: Props ) => {

    const [listCategories, setListCategories] = useState<ItemCategory[]>([]);

    useEffect(() => {

        const categs = [];

        for (let categ in categories) {
            categs.push({ id: categ, value: categories[categ].title })
        }

        setListCategories(categs);

    }, [])

    return (
        <C.Select value={value} onChange={e => onChange(e.target.value)}>
            <option id="">-</option>
            {listCategories.map(item => <option id={item.id}>{item.value}</option>)}
        </C.Select>
    )
}