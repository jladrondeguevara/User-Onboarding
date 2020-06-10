import React, {useState} from 'react';

export default function Form () {
    const [formState, setFormState] = useState({
        name: ""
    });
    const formSubmit = event => {
        event.preventDefault();
    };
    const inputChange = event => {
        setFormState({name: event.target.value});
    };

    return (
        <form onSubmit={formSubmit}>
            <label htmlFor="name">
                Name 
                <input id="name" type="text" name="name" onChange={inputChange} value={formState.name} />
            </label>

        </form>
    );
};
