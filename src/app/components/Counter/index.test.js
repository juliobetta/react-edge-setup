import React from 'react';
import Counter from './index';

describe('<Counter>', () => {
  it('renders correctly', () => {
    const wrapper = mount(<Counter />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
