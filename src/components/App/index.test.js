import React from "react";

import App from "./index.js";
import { mockPeople } from "../../MockData/MockData";

describe("App", () => {
  let wrapper;
  let mockEvent;

  beforeEach(async () => {
    localStorage.clear();
    wrapper = shallow(<App />);
    await wrapper.instance().componentDidMount;
  });

  it("should match snapshot with default states", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with background scroll in state ", () => {
    const backgroundFilm = {dont: 'stop'}
    wrapper.setState({backgroundFilm})
    expect(wrapper).toMatchSnapshot();
  });

  describe("getData", () => {
    beforeEach(() => {
      wrapper = shallow(<App />);
      mockEvent = { target: { name: "people" } };
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockPeople)
        })
      );
    });

    it("should call FetchApi", async () => {
      await wrapper.instance().getData(mockEvent, 1);
      expect(fetch).toHaveBeenCalled();
    });

    it("should set correct state with the value passed", async () => {
      await wrapper.instance().getData(mockEvent, 1);

      expect(wrapper.state("people").length).toEqual(10);
    });

    it("should set correct error state if value returns failed fetch", async () => {
      window.fetch = jest
        .fn()
        .mockImplementation(() => Promise.reject(new Error("failed")));
      await wrapper.instance().getData(mockEvent);
      expect(wrapper.state("errorStatus")).toEqual("failed");
    });

    it("should call setButtonPressed", () => {
      wrapper.instance().setButtonPressed = jest.fn();
      wrapper.instance().getData(mockEvent);
      expect(wrapper.instance().setButtonPressed).toHaveBeenCalled();
    });

    it("should run fetch only if state is empty or not null", async () => {
      const people = [{}, {}];
      wrapper.setState({ people });
      expect(wrapper.state("people").length).toEqual(2);
      await wrapper.instance().getData(mockEvent);
      expect(wrapper.state("people").length).toEqual(10);
    });

    it("should return if alreadyHasData is true and not a new page", async () => {
      const people = [{}, {}];
      const expected = people;
      await wrapper.setState({ people });
      await wrapper.instance().getData(mockEvent, 1);
      expect(wrapper.state("people")).toEqual(expected);
    });

    it("should not return if alreadyHasData is true and a new page exists", async () => {
      const people = [{}, {}];
      wrapper.setState({ people });
      await wrapper.instance().getData(mockEvent, 2);
      expect(wrapper.state("people").length).toEqual(10);
    });

    describe('setRandomFilm', () => {
      it.skip("should be called on componentDidMount", async () => {
        wrapper = shallow(<App />);
        let setRandomFilm = wrapper.instance().setRandomFilm
        setRandomFilm = jest.fn()
        await wrapper.instance().componentDidMount()
        expect(setRandomFilm).toHaveBeenCalled()
      });

      it("should set state backgroundFilm of single film from the films array in state", () => {
        wrapper = shallow(<App />);
        const films = [{},{},{}]
        wrapper.setState({ films })
        wrapper.instance().setRandomFilm()
        expect(wrapper.state('backgroundFilm')).toEqual({})
      });

    // it.skip("should ", () => {});
  });
});
