import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    console.log(pricing);
    const {name, price, description, features} = pricing;
    return (
        <div className='flex flex-col border bg-white text-black rounded-2xl p-4'>
            {/* Card header */}
            <div>
                <h1 className='text-7xl'>{name}</h1>
                <h4 className='text-3xl'>$ {price}/Month</h4>
            </div>
            {/* card body */}
            <div className='bg-gray-50 flex-1 p-4 rounded-2xl mt-5 text-lg'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn w-full mt-4">Subscribe</button>
        </div>
    );
};

export default PricingCard;