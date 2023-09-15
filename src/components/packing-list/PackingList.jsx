import { useState } from 'react';
import Item from '../item/Item';
import styles from './packingList.module.css';

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
    const [sortBy, setSortBy] = useState('input');

    let sortedItems;

    if (sortBy === 'input') sortedItems = items;

    if (sortBy === 'description')
        sortedItems = items
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === 'packed')
        sortedItems = items
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));

    return (
        <div className={styles['list']}>
            <ul>
                {sortedItems.map((item, index) => (
                    <Item
                        item={item}
                        key={item.id}
                        onDeleteItem={onDeleteItem}
                        onToggleItem={onToggleItem}
                    />
                ))}
            </ul>
            <div className={styles['actions']}>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value='input'>Sort by input order</option>
                    <option value='description'>Sort by description</option>
                    <option value='packed'>Sort by packed status</option>
                </select>
                <button onClick={onClearList}>Clear list</button>
            </div>
        </div>
    );
};

export default PackingList;
