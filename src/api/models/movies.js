import query from '../../db/index.js';

const dbGetMovies = () => query('SELECT * FROM movies');

const dbGetMovie = (id) => {
  const result = query('SELECT * FROM movies WHERE id = $1', [id]);
  return result;
};

export { dbGetMovies, dbGetMovie };
