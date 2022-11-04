-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS meghan_markle_movies;

CREATE TABLE meghan_markle_movies (
  id  BIGINT GENERATED ALWAYS AS IDENTITY,
  title VARCHAR NOT NULL, 
  role VARCHAR NOT NULL,
  year INT NOT NULL,
  imdb VARCHAR NOT NULL
);

INSERT INTO meghan_markle_movies (title, role, year, imdb)
VALUES
('A Lot Like Love', 'Hot Girl', 2005, 'https://www.imdb.com/title/tt0391304/?ref_=ext_shr_lnk'),
('Remember Me', 'Megan', 2010, 'https://www.imdb.com/title/tt1403981/?ref_=ext_shr_lnk'),
('Get Him to the Greek', 'Tatiana (uncredited)', 2010, 'https://www.imdb.com/title/tt1226229/?ref_=ext_shr_lnk'),
('Horrible Bosses', 'Jamie', 2011, 'https://www.imdb.com/title/tt1499658/?ref_=ext_shr_lnk'),
('Dysfunctional Friends', 'Terry', 2012, 'https://www.imdb.com/title/tt1653002/?ref_=ext_shr_lnk'),
('Random Encounters', 'Mindy', 2013, 'https://www.imdb.com/title/tt1586525/?ref_=ext_shr_lnk'),
('Anti-Social', 'Kirsten', 2015, 'https://www.imdb.com/title/tt3475596/?ref_=ext_shr_lnk');

DROP TABLE IF EXISTS employee_data;

CREATE TABLE employee_data (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  empName VARCHAR NOT NULL, 
  designation VARCHAR NULL, 
  department VARCHAR NULL
);

INSERT INTO employee_data (empName, designation, department)
VALUES
  ('CHIN YEN', 'LAB ASSISTANT', 'LAB'),
  ('MIKE PEARL', 'SENIOR ACCOUNTANT', 'ACCOUNTS'),
  ('GREEN FIELD', 'ACCOUNTANT', 'ACCOUNTS'),
  ('DEWANE PAUL', 'PROGRAMMER', 'IT'),
  ('MATTS', 'SR. PROGRAMMER', 'IT'),
  ('PLANK OTO', 'ACCOUNTANT', 'ACCOUNTS');
