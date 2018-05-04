import React from 'react';
import PropTypes from 'prop-types';
import style from './index.css';

const Dummy = props => (
  <div className={style.Dummy}>
    <h1>React! YAY</h1>
    <div>{props.children}</div>
  </div>
);

Dummy.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.object])
};

export default Dummy;
