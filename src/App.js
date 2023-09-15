import { useState } from 'react';
import Form from './components/form/Form';
import Logo from './components/logo/Logo';
import PackingList from './components/packing-list/PackingList';
import Stats from './components/Stats/Stats';

function App() {
    const [items, setItems] = useState([]);

    const handleAddItem = (item) => {
        setItems((items) => [...items, item]);
    };

    const handleDeleteItem = (id) => {
        setItems((items) => items.filter((item) => item.id !== id));
    };

    return (
        <div className='app'>
            <Logo />
            <Form onAddItems={handleAddItem} />
            <PackingList items={items} onDeleteItem={handleDeleteItem} />
            <Stats />
        </div>
    );
}

export default App;
