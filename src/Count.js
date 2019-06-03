import React, {Component} from 'react';
import propTypes from 'prop-types'

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
    let number = this.state.number - 1;
    this.setState({number})
  }

  render(){
    return(
      <div>

      </div>
    );
  }
};

Count.propTypes = {
  number: propTypes.number.isRequired
};

export default Count;
