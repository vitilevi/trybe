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


-- 3) Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a classificações "G" , "PG" ou "PG-13" e um custo de substituição maior que $20.


-- 4) Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.