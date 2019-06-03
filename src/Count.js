import React, {Component} from 'react';
import propTypes from 'prop-types';
import './Count.css';

class Count extends Component {
  constructor(props){
    super(props);

    this.state = {
      number: this.props.number
    }

    this.onIncrementClick = this.onIncrementClick.bind(this);
    this.onDecrementClick = this.onDecrementClick.bind(this);
  }

  onIncrementClick = (event) => {
    let number = this.state.number + 1;
    this.setState({number})
  }

  onDecrementClick = (event) => {
    if(this.state.number === 0){
      window.alert('ERROR: \nCannot go lower than 0');
      return;
    }
    let number = this.state.number - 1;
    this.setState({number})
  }

  render(){
    return(
      <div>
      <button className="ui red basic button" onClick={this.onDecrementClick} >
        <i className="minus icon" style={{marginLeft: '10%', marginTop: '10%', fontSize: '50px'}}></i>
      </button>
      <h1> {this.state.number} </h1>
      <button className="ui green basic button" onClick={this.onIncrementClick}>
        <i className="plus icon" style={{marginLeft: '10%', marginTop: '10%', fontSize: '50px'}}></i>
      </button>
      </div>
    );
  }
};

Count.propTypes = {
  number: propTypes.number.isRequired
};

export default Count;
