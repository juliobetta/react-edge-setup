import React from 'react';
import { storiesOf } from '@storybook/react';
import Counter from './index';

storiesOf('Counter  ', module)
  .add('with defaults', () => <Counter />)
  .add('with custom start', () => (
    <Counter initialValue={20} />
  ))
  .add('with custom step', () => (
    <div>
      <Counter initialValue={0} step={10} />
    </div>
  ));
