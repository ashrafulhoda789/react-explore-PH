import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {

    const allPricing = use(pricingPromise);
    const pricingData = allPricing.pricingPlans;
    console.log(pricingData);
    return (
        <div>
            <h2 className='text-2xl md:text-5xl'>Get Our MemberShip</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;