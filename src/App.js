import logo from './logo.svg';
import './App.css';
import Button from './components/Button'

function Div() {
  let componenta = [<div>Něco</div>,
                    <div>ještě</div>,
                    <div>jiného.</div>];
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {componenta}
          <Button text="Ach jo :/" color="#AAAAAA" something="no" />
        </header>
      </div>
    </>
  );
}

export default Div;
