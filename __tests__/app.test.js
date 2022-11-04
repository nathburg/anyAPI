const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { markleMovies } = require('../lib/markle-data');

describe('meghan_markle_movies routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  
  it('should return all her movies with /markle route', async () => {
    const res = await request(app).get('/markle');
    const expected = markleMovies.map(movie => {
      return { id: movie.id, title: movie.title };
    });
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
