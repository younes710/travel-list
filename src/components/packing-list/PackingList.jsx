import Item from '../item/Item';
import styles from './packingList.module.css';

const initialItems = [
    { id: 1, description: 'Passports', quantity: 2, packed: false },
    { id: 2, description: 'Socks', quantity: 12, packed: false },
];

const PackingList = () => {
    return (
        <div className={styles['list']}>
            <ul>
                {initialItems.map((item, index) => (
                    <Item item={item} key={index} />
                ))}
            </ul>
        </div>
    );
};

export default PackingList;
