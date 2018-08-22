import { FetchApi } from './FetchApi.js'

describe('FetchApi', () => {
  let mockResults;
  beforeEach(() => {
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
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockResults)
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