import { FetchApi, fetchSpecific, fetchResidents } from './FetchApi.js'
import { mockPeople, mockResultPlanet, mockResultVehicle, mockResultsPerson, mockResultResident } from "../../MockData/MockData";

describe('FetchApi', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockPeople)
      })
    })
  })

  it('should call fetch with the correct params', async () => {
    const expected = [
      'https://swapi.co/api/people/?page='
    ]
    await FetchApi('people', '');
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  });

  it('returns an array if the response is okay', async () => {
    const initialFetch = await FetchApi('people', '');
    const expectedLength = Object.keys(mockPeople.results).length;
    expect(initialFetch.length).toEqual(expectedLength);
  });

  it('throws an error if the response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(new Error('failed'))
    })
    let expected = new Error('failed')

    await expect(FetchApi('people', '')).rejects.toEqual(expected)
  });
  });
})