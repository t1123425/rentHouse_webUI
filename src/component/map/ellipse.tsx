import React from 'react';

interface PropObj {
    price?:Number,
}

const Ellipse = (prop:PropObj) => {
    return (
    <div className="ellipse">
        <div className="infoContent">
            <p>區域中位數</p>
            <h2>{prop.price}</h2>
            <span>元/月</span>
        </div>
    </div>
    )
}

export default Ellipse;