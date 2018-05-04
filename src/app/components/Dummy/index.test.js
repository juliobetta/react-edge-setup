import React from 'react';
import Dummy from './index';

describe('Test React', () => {
  test('Dummy Component', () => {
    const wrapper = mount(<Dummy />);

    expect(wrapper).toMatchSnapshot();
  });
});
