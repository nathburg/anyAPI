const pool = require('../utils/pool');
module.exports = class MarkleMovie {
  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.role = row.role;
    this.year = row.year;
    this.imdb = row.imdb;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * from meghan_markle_movies');
    return rows.map((movieRow) => new MarkleMovie(movieRow));
  }
};
