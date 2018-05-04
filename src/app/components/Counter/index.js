import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, IconButton } from 'react-toolbox/lib/button';
import { initialState, increment, decrement, reset } from './state';
import styles from './index.css';


class Counter extends Component {
  state = initialState(this.props.initialValue);

  render() {
    const { initialValue, step } = this.props;

    return (
      <div className={styles.Counter}>
        <div>
          <Button
            floating
            mini
            onClick={this.handleDecrement(initialValue, step)}
          >
            –
          </Button> { ' ' }
          <Button
            floating
            onClick={this.handleIncrement(step)}
          >
            +
          </Button> { ' ' }
          <IconButton icon="replay" id="reset" onClick={this.handleReset(initialValue)} />
        </div>

        <span id="counter">{this.state.counter}</span>
      </div>
    );
  }

  handleIncrement = step => () => this.setState(state => increment(state, step));
  handleDecrement = (initialValue, step) => () => {
    const newState = decrement(this.state, step);

    if(initialValue <= newState.counter) {
      this.setState({ ...this.state, ...newState });
    }
  };
  handleReset = initialValue => () => this.setState(() => reset(initialValue))
}


Counter.propTypes = {
  initialValue: PropTypes.number,
  step: PropTypes.number
};

Counter.defaultProps = {
  initialValue: 1,
  step: 1
};


export default Counter;
