import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Spin from './components/SpinButton'

function Div() {
  const [result, setResult] = useState(0)
  let calculate = (last, now) => {
    setResult(result-last+now)
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div>
            <Spin min={-5} max={5} numberCallBack={calculate} />
            +
            <Spin min={5} max={15} numberCallBack={calculate} />
            =
            <span style={{fontSize: '1.25em', fontWeight: 'bold', padding: '0.5em'}}>{result}</span>
          </div>
        </header>
      </div>
    </>
  );
}

export default Div;
