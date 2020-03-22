import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    data: null
  }

  componentWillMount = () => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => this.setState({data: json}))
    }, 2000)
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {JSON.stringify(this.state.data)}
        </header>
      </div>
    );
  }
}

export default App;
