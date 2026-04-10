import React from 'react';
import Special from './Special';
import Friends from './Friends';

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'Tom tom' && <Special asset={asset}></Special>
            }
            {
                name === 'Jojo' && <Friends></Friends>
            }
        </div>
    );
};

export default Cousin;