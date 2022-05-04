import {useState} from 'react'
import './SumView.css'
import Spin from '../components/SpinButton'

let SumView = () => {
    const [result, setResult] = useState(0)
    let calculate = (last, now) => {
      setResult(result-last+now)
    }
    return (
        <div className='sum-view'>
            <Spin min={-5} max={5} numberCallBack={calculate} />
            +
            <Spin min={5} max={15} step={5} numberCallBack={calculate} />
            =
            <span className='sum-view__result'>{result}</span>
        </div>
    );
}

export default SumView;