import { useState, useEffect } from 'react';
import './SpinButton.css'

let SpinButton = ({min = 0, max = 10, numberCallback = val => null, ...rest}) => {
    let [value, setValue] = useState(min);

    useEffect(() => {
        numberCallback(value)
    }, [value])
    return (
        <div className="spin-btn">
            <div className="spin-btn__value spin-btn__value--negativ">
                {value}
            </div>
            <div className="spin-btn__wrapper">
                <button type="button" className="spin-btn__updown"
                    onClick={(e) => {
                       if (value >= max) return 
                       setValue(value + 1)
                       //numberCallback(value + 1)
                }}>&#9650;</button>
                <button type="button" className="spin-btn__updown"
                    onClick={(e) => {
                        if (value <= min) return 
                        setValue(value - 1)
                        //numberCallback(value - 1)
                }}>&#9660;</button>
            </div>
        </div>
    )
};

export default SpinButton;