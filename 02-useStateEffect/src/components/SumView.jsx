import { useState } from 'react';
import './SumView.css'
import SpinButton from './SpinButton'

let SumView = () => {
    let [value1, setValue1] = useState(0);
    let [value2, setValue2] = useState(0);
    let calculate1 = (val1) => {
        setValue1(val1)
    }
    let calculate2 = (val2) => {
        setValue2(val2)
    }

    return (
        <div className="sum-view">
            <SpinButton min={-10} max={20} numberCallback={calculate1} /> + 
            <SpinButton numberCallback={calculate2} /> =
            <span className='sum-view__result'>{value1 + value2}</span>
        </div>
    )
};

export default SumView;