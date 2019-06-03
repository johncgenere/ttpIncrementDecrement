import React, {Component} from 'react';
import Count from './Count';
import './App.css';

class App extends Component {
  render(){
    return (
      <div>
        <Count number={10} />
      </div>
    );
  }
}

export default App;
