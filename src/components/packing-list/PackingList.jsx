import Item from '../item/Item';
import styles from './packingList.module.css';

const PackingList = ({ items, onDeleteItem }) => {
    return (
        <div className={styles['list']}>
            <ul>
                {items.map((item, index) => (
                    <Item
                        item={item}
                        key={item.id}
                        onDeleteItem={onDeleteItem}
                    />
                ))}
            </ul>
        </div>
    );
};

export default PackingList;
