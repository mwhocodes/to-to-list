import React, { useState } from 'react';

const TodoForm = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const addItem = e => {
        e.preventDefault();
        if (!value) return;
        onSubmit(value);
        setValue('');
    }


    return (
        <form
            className='to-do-form'
            onSubmit={addItem}>
            <input type='text'
                placeholder='Type text here'
                value={value}
                onChange={(e) => setValue(e.target.value)} />
            <button type='submit'>+</button>
        </form>
    );
}

export default TodoForm;