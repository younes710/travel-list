import styles from './form.module.css';

const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={styles['add-form']} onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select>
                {Array.from({ length: 20 }, (_, i) => i + 1).map(
                    (num, index) => (
                        <option value={num} key={num}>
                            {num}
                        </option>
                    )
                )}
            </select>
            <input type='text' placeholder='Item...' />
            <button>Add</button>
        </form>
    );
};

export default Form;
