import Item from '../item/Item';
import styles from './packingList.module.css';

const PackingList = ({ items }) => {
    return (
        <div className={styles['list']}>
            <ul>
                {items.map((item, index) => (
                    <Item item={item} key={item.id} />
                ))}
            </ul>
        </div>
    );
};

export default PackingList;
