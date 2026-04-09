import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Submitted");

    };

    const handlePasswordOnChange = (e) =>{
        console.log(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email"  required/>
                <br />
                <input type="password" name="password" placeholder="Password" onChange={handlePasswordOnChange} defaultValue={password} required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlledField;