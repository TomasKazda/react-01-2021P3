import {useState, useEffect} from 'react'
import './SpinButton.css'

let SpinButton = ({min = 0, max = 10, numberCallBack = (last, now) => (null), ...rest}) => {
    const [value, setValue] = useState(min)
    useEffect(() => {
        numberCallBack(0, value)
      }, []);
    
    return (
        <div className='btn-spin'>
            <div className='btn-spin__value'>
                {value}
            </div>
            <div>
                <button className='btn-spin__button' type='button' onClick={() => {
                    if (value >= max) return
                    setValue(value+1);
                    numberCallBack(value, value+1)
                }}>&#9650;</button>
                <button className='btn-spin__button' type='button'  onClick={() => {
                    if (value <= min) return
                    setValue(value-1);
                    numberCallBack(value, value-1)
                }}>&#9660;</button>
            </div>
        </div>
    );
}

export default SpinButton;