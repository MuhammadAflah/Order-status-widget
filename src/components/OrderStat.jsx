import React from 'react';
const OrderStat = ({ stat }) => {
    const { label, value, percentage, icon } = stat;

    
    return (
        <div className="order-stat">
            <div className="order-stat__icon">
                <i className={`fas ${icon}`} aria-hidden="true"></i>
                {/* {data.icon} */}
            </div>
            <div className="order-stat__details">
                <div className="order-stat__label">{label}</div>
                <div className="order-stat__value">{value}</div>
            </div>
            <div className='order-percentage-details'>
             <div className='order-stat_percentage'>{percentage}</div>
         </div>
        </div>

    );
}

export default OrderStat;
