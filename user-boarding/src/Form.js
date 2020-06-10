import React, {useState, useEffect} from 'react';
import * as yup from 'yup';

export default function Form () {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        terms: true
    });
    const formSubmit = event => {
        event.preventDefault();
    };
    const inputChange = event => {
        const newFormData = {
            ...formState, 
            [event.target.name]: event.target.name === "terms" ? event.target.checked : event.target.value
        }

        setFormState(newFormData);
    };
    
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [errors, setErrors] = useState({
        name: "", //strings describing error that has occured
        email: "",
        password: "",
        terms: ""
    })


    const formSchema = yup.object().shape({
        name: yup.string().required("Name is a required field."),
        email: yup.string().email("Must be a valid email address!").required("An email is required"),
        password: yup.string().required(),
        terms: yup.boolean().oneOf([true])
    })

    useEffect(() => {
        formSchema.isValid(formState).then(isFormValid => {
            setButtonDisabled(!isFormValid) //disabled =  false if form is valid.
        })
    }, [formSchema])

    return (
        <form onSubmit={formSubmit}>
            <label htmlFor="name">
                Name 
                <input id="name" type="text" name="name" onChange={inputChange} value={formState.name} />
            </label>
            <label htmlFor="email">
                Email
                <input id="email" type="text" name="email" onChange={inputChange} value={formState.email} />
            </label>
            <label htmlFor="password">
                Password
                <input id="password" type="password" name="password" onChange={inputChange} value={formState.password} />
            </label>
            <label htmlFor="terms" className="terms">
                Terms and Conditions
                <input id="terms" type="checkbox" name="terms" checked={formState.terms} onChange={inputChange}/>
            </label>
            <button type="submit" disabled={buttonDisabled}>Submit</button>
        </form>
    );
};
