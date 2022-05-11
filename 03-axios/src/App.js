import { useState, useEffect } from 'react';
import './App.css';
import Calendar from 'react-calendar';
import Table from './components/Table'
import axios from 'axios'
const API = 'https://www.pslib.cz/tomas.kazda/api/kurzycnbapi.php?date='

function App(props) {
  const [datevalue, setDatevalue] = useState(new Date())
  const [tablevalue, setTablevalue] = useState({})
  
  const fetchData = () => {
    axios.get(API+datevalue.toISOString(), {
        headers: {
            "Content-Type": "application/json",
         }
    })
    .then(response => {
      setTablevalue(response.data);
    })
    .catch(error => {
        //setError(true);
        //setResponse(null);
    })
    .then(()=>{
        //setIsLoading(false);
    });
}


  useEffect(() => {
    fetchData()
  }, [datevalue])
  
  return (
    <div className="App">
      <header className="App-header">
        <Calendar onChange={setDatevalue} value={datevalue} />
        <Table tabledata={tablevalue} />
      </header>
    </div>
  );
}

export default App;
