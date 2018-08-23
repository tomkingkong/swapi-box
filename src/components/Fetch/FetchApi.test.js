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
    const mockUrl = 'people';
    const expected = [
      'https://swapi.co/api/people'
    ]
    await FetchApi(mockUrl);
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  });

  it.skip('returns an array if the response is okay', async () => {

  });

  it.skip('throws an error if the response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(new Error('failed'))
    })

    await expect(addGrocery(mockGrocery)).rejects.toEqual(expected)
  });
})