import React from 'react';
import '../App.css';
import DisplayCounter from "./DisplayCounter";
import Button from "../Button";

const Counter = (props) => {

    return (
        <div className="content">
            <DisplayCounter currentValue={props.counter.currentValue}
                            minValue={props.counter.minValue}
                            maxValue={props.counter.maxValue}/>
            <div>
                <Button name='+' disabled={props.stopCounter} onClick={props.incrementNumber}/>
                <Button name='default' onClick={props.defaultNumber}/>
            </div>
        </div>
    )
};

export default Counter;
