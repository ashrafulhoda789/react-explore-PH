import React from 'react';
import Cousin from './Cousin';

const Aunt = ({asset}) => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name='Tom tom' asset={asset}></Cousin>
                <Cousin name='Jojo'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;