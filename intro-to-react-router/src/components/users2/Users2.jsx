import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log("Users2", users);
    return (
        <div>
            <h2>This is users2</h2>
        </div>
    );
};

export default Users2;