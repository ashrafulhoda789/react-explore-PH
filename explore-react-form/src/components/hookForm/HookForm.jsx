import React from 'react';
import useInputField from '../../hooks/UseInputField';

const HookForm = () => {

    const [name, nameOnChange] = useInputField('');
    const [email, emailOnCHange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Submitted", name, email, password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={nameOnChange} defaultValue={name}  placeholder='Name'/> <br />

                <input type="email" name="email"  placeholder="Email" onChange={emailOnCHange} defaultValue={email} required/>
                <br />
                <input type="password" name="password" placeholder="Password" onChange={passwordOnChange} defaultValue={password}/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;