import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({asset}) => {

    const [money, setMoney] = use(MoneyContext);
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name='Tom tom' asset={asset}></Cousin>
                <Cousin name='Jojo'></Cousin>
            </section>
            <button onClick={() => setMoney(money + 5000)}>Add 5000 tk</button>
        </div>
    );
};

export default Aunt;