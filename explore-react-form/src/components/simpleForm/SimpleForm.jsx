import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (event) =>{
        event.preventDefault(); // Form server side e default vabe reload hoye jai. ota off korar jonno preventDefault use kora hoyece
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Your name' />
                <br />
                <input type="email" name='email' placeholder='Your email'/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;