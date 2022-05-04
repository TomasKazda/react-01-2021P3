import {useState, useEffect} from 'react'
import './SpinButton.css'

let SpinButton = ({min = 0, max = 10, numberCallBack = (last, now) => (null), step = 1, ...rest}) => {
    const [value, setValue] = useState(min)
    useEffect(() => {
        numberCallBack(min, value)
      }, []);
    
    return (
        <div className='btn-spin'>
            <div className='btn-spin__value'>
                {value}
            </div>
            <div>
                <button className='btn-spin__button' type='button' onClick={() => {
                    if (value >= max) return
                    setValue(value+step);
                    numberCallBack(value, value+step)
                }}>&#9650;</button>
                <button className='btn-spin__button' type='button'  onClick={() => {
                    if (value <= min) return
                    setValue(value-step);
                    numberCallBack(value, value-step)
                }}>&#9660;</button>
            </div>
        </div>
    );
}

export default SpinButton;