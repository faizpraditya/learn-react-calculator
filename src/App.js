import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Calculator from './Calculator';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <Calculator/>
      </div>
    );
  }
}

export default App;
