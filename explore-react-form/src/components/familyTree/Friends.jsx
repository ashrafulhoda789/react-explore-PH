import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Friends = () => {

    const [money] = use(MoneyContext);
    return (
        <div>
            <h3>Friend</h3>
            <p>Family Got: {money}</p>
        </div>
    );
};

export default Friends;