import React, {useState} from 'react';

export default function Form () {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: ""
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
            <label htmlFor="email">
                Email
                <input id="email" type="text" name="email" value={formState.email} />
            </label>
            <label htmlFor="password">
                Password
                <input id="password" type="password" name="password" value={formState.password} />
            </label>
            <label htmlFor="terms" className="terms">
                Terms and Conditions
                <input type="checkbox" name="terms" checked={true} />
            </label>
            <button>Submit</button>
        </form>
    );
};
