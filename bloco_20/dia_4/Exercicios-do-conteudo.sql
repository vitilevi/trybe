-- 1) Insira um novo funcionário na tabela sakila.staff .
USE sakila;
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password, last_update)
VALUES ('Mumu', 'da silva', '3', 'dasilva@gmail.com', '1', '1', 'daSilva', 'mumuDaSilva', NOW());

-- 2) Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password) VALUES
('Cócó', 'Pereira', '2', 'cpereira@gmail.com', '2', '1', 'cocó', 'coPereiraco'),
('Ranhento', 'Almeida', '3', 'ralmeida@gmail.com', '1', '1', 'ranhento', 'ralmeida');

-- 3) Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .
INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name FROM customer LIMIT 5;

-- 4) Cadastre três categorias de uma vez só na tabela sakila.category .
INSERT INTO category (name) VALUES
('Comédia'),
('Ação'),
('Aventura');

-- 5) Cadastre uma nova loja na tabela sakila.store .
INSERT INTO store (manager_staff_id, address_id) VALUES
(3, 3);



-- 1) Atualize o primeiro nome de todas as pessoas da tabela sakila.actor que possuem o primeiro nome "JULIA" para "JULES"
USE sakila;
UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

-- 2) Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".
UPDATE category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

-- 3) Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a classificações "G" , "PG" ou "PG-13" e um custo de substituição maior que $20.
UPDATE film
SET rental_rate = 25
WHERE replacement_cost > 20
AND length > 100
AND rating in ('G', 'PG', 'PG-13');

-- 4) Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.
UPDATE film
SET rental_rate = (
	CASE
		WHEN length BETWEEN 1 AND 100 THEN 10
		WHEN length > 100 THEN 20
		ELSE rental_rate
	END
);



-- 1) Exclua do banco de dados o ator com o nome de "KARL".
DELETE FROM film_actor
WHERE actor_id = 12;

DELETE FROM actor
WHERE first_name = 'KARL';

-- 2) Exclua do banco de dados os atores com o nome de "MATTHEW".
SELECT * FROM actor WHERE first_name = 'MATTHEW';
DELETE FROM film_actor
WHERE actor_id in (8, 103, 181);

DELETE FROM actor
WHERE first_name = 'MATTHEw';

-- 3) Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
DELETE FROM film_text
WHERE description
LIKE '%saga%';

-- 4) Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category .
TRUNCATE film_actor;
TRUNCATE film_category;

-- 5) Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).

-- 6) Exclua o banco de dados e o recrie (use as instruções no início desta aula).
TRUNCATE sakila;
