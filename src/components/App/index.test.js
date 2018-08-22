import React from 'react';
import { shallow, mount } from 'enzyme';

import BackgroundScroll from "../BackgroundScroll";

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match snapshot with default states', () => {
    expect(wrapper).toMatchSnapshot();
  });


});