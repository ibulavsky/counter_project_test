import React from 'react';
import '../App.css';

const DisplayCounter = (props) => {

    return (
        <div className='display'>
            {props.currentValue < props.maxValue
                ? <span> {props.currentValue} </span>
                : <span className='max'> {props.maxValue} </span>
            }
        </div>
    )
};

export default DisplayCounter;

