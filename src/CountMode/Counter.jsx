import React from 'react';
import '../App.css';
import DisplayCounter from "./DisplayCounter";
import Button from "../Button";

const Counter = (props) => {

    return (
        <div>
            <DisplayCounter currentValue={props.counter.currentValue}
                            minValue={props.counter.minValue}
                            maxValue={props.counter.maxValue}/>
            <Button name='+' disabled={props.stopCounter} onClick={props.incrementNumber}/>
            <Button name='default' onClick={props.defaultNumber}/>
        </div>
    )
};

export default Counter;