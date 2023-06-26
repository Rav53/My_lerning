
-- create
CREATE TABLE GROUPTEST (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  adress TEXT NOT NULL
);

-- insert
INSERT INTO GROUPTEST VALUES (0001, 'Анна',      38, 'Москва');
INSERT INTO GROUPTEST VALUES (0002, 'Михаил',    30, 'Самара');
INSERT INTO GROUPTEST VALUES (0003, 'Данила',    28, 'Санкт-Петербург');
INSERT INTO GROUPTEST VALUES (0004, 'Николай',   30, 'Москва');
INSERT INTO GROUPTEST VALUES (0005, 'Арина',     40, 'Санкт-Петербург');
INSERT INTO GROUPTEST VALUES (0006, 'Алекс',     34, 'Москва');
INSERT INTO GROUPTEST VALUES (0007, 'Ирина',     18, 'Владимир');
INSERT INTO GROUPTEST VALUES (0008, 'Максим',    29, 'Москва');
INSERT INTO GROUPTEST VALUES (0009, 'Николай',   23, 'Москва');
INSERT INTO GROUPTEST VALUES (0010, 'Анна',      43, 'Самара');

-- fetch 
SELECT name  FROM GROUPTEST WHERE age >= 18 AND age < 30 AND adress = 'Москва' 