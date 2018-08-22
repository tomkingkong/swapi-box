import React from 'react';
import { shallow, mount } from 'enzyme';

import NavBar from "../Navigation/NavBar";
import ContentRoute from "../Navigation/ContentRoute";
import { FetchApi } from "../Fetch/FetchApi";
import BackgroundScroll from "../BackgroundScroll";
import App from './index.js';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match snapshot with default states', () => {
    expect(wrapper).toMatchSnapshot();
  });


});