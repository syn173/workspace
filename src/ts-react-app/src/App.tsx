import * as React from 'react';
import './App.css';
// import Hello from './components/Hello';
import './docs/demo2';
// import './modules/d1';
// import './modules/d2';

// console.log('g2', g2); 

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          {/* <Hello name="Errr" enthusiasmLevel={10} /> */}
        </p>
      </div>
    );
  }
}

export default App;
