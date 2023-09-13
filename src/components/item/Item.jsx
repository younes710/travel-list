const Item = ({ item }) => {
    return (
        <li id={item.id}>
            <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
                {item.quantity} {item.description}
            </span>
            <button>❌</button>
        </li>
    );
};

export default Item;
