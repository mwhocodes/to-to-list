import React from 'react';

const ListItem = ({ items, onClick, onChange }) => {

    const deleteItem = item => {
        const deletedItem = item;
        onClick(deletedItem)
    }


    return (
        <div>
            {
                items.map(item => (
                    <form key={item.id}>
                        <input type='text'
                            value={item.text}
                        />
                        <button type='submit' onClick={deleteItem} >x</button>
                    </form>
                ))
            }
        </div>
    );
}

export default ListItem;


