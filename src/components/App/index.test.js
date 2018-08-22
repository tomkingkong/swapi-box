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

  it.skip('should match snapshot with default states', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('getData', () => {
    let mockEvent;
    let mockResults;
    let wrapper;
    let FetchApi;

    beforeEach(() => {
      wrapper = shallow(<App />);
      mockEvent = { target: { textContent: "people" } };
      mockResults = [ 
        { name: 'Luke Skywalker',
          species: 'Human',
          homeworld: 'Tatooine',
          population: '200000' 
        },
        { name: 'C-3PO',
          species: 'Droid',
          homeworld: 'Tatooine',
          population: '200000' 
        },
        { name: 'R2-D2',
          species: 'Droid',
          homeworld: 'Naboo',
          population: '4500000000' 
        } 
      ];
    //   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    //     json: () => Promise.resolve(mockResults)
    //   }))
    // });

    it('should call FetchApi', async () => {
      await wrapper.instance().getData(mockEvent)
      expect(fetch).toHaveBeenCalled();
    });

});