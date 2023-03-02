import React from 'react';
import OrderStat from '../OrderStat';
import data from '../../data/data.json'
import './WidgetOrderStats.scss';

const WidgetOrderStats = () => {
  return (
    <div className="widget-order-stats">
      {data.map((stat) => (
        <OrderStat key={stat.id} stat={stat} />
      ))}
    </div>
  );
};

export default WidgetOrderStats;
