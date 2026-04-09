import React, { useState } from 'react';

const ControlledField = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name, email, password);

        if(password.length < 6){
            setError('6 characters or longer');
            return;
        }
        else{
            setError('');
        }

        console.log("Submitted");

    };

    const handlePasswordOnChange = (e) =>{
        // console.log(e.target.value);
        setPassword(e.target.value);

        if(password.length < 5){
            setError('Password must be 6 characters or longer');
        }
        else{
            setError('');
        }
    };

    const handleEmailCHange = (e) =>{
        setEmail(e.target.value);
    }

    const handleNameChange = (e) =>{
        setName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleNameChange} defaultValue={name} placeholder='Name'/> <br />

                <input type="email" name="email" onChange={handleEmailCHange} defaultValue={email} placeholder="Email"  required/>
                <br />
                <input type="password" name="password" placeholder="Password" onChange={handlePasswordOnChange} defaultValue={password} required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color: 'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;