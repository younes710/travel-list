import Form from './components/form/Form';
import Logo from './components/logo/Logo';
import PackingList from './components/packing-list/PackingList';
import Stats from './components/Stats/Stats';

function App() {
    return (
        <div className='app'>
            <Logo />
            <Form />
            <PackingList />
            <Stats />
        </div>
    );
}

export default App;
