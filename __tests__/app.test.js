const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { markleMovies } = require('../lib/markle-data');
const { employees } = require('../lib/employee-data')

describe('route tests', () => {
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

  it('should return movie details by id with /markle/:id route', async () => {
    const res = await request(app).get('/markle/2');
    const rememberMe =   {
      'id': '2',
      'title': 'Remember Me',
      'role': 'Megan',
      'year': 2010,
      'imdb': 'https://www.imdb.com/title/tt1403981/?ref_=ext_shr_lnk'
    };
    expect(res.body).toEqual(rememberMe);
  });

  it('should return all employees with /employees route', async () => {
    const res = await request(app).get('/employees');
    const expected = employees.map(emp => {
      return { id: emp.id, name: emp.name };
    });
    expect(res.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
