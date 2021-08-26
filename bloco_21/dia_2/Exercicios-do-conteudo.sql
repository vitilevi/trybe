-- 1) Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .
USE sakila;

SELECT act.actor_id, act.first_name, film.film_id
FROM actor act
INNER JOIN film_actor film
ON act.actor_id = film.actor_id;

-- 2) Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .
SELECT s.first_name, s.last_name, a.address
FROM staff s
INNER JOIN address a
ON s.address_id = a.address_id;

-- 3) Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .
SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address
FROM customer c
INNER JOIN address a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

-- 4) Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer .
SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM customer c
INNER JOIN address a
ON c.address_id = a.address_id
WHERE a.district = 'California'
AND c.first_name LIKE '%rene%';

-- 5) Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer .
SELECT c.first_name, COUNT(a.address)
FROM customer c
INNER JOIN address a
ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY c.first_name
ORDER BY c.first_name DESC;

-- 6) Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT s.first_name, s.last_name, AVG(p.amount)
FROM staff s
INNER JOIN payment p
ON s.staff_id = p.staff_id
WHERE YEAR(payment_date) = '2006'
GROUP BY first_name, last_name;

-- 7) Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .
SELECT a.actor_id, a.first_name, f.film_id, f.title
FROM actor AS a
INNER JOIN film_actor AS fa
ON a.actor_id = fa.actor_id
INNER JOIN film AS f
ON f.film_id = fa.film_id;




-- 1) Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição
SELECT t1.film_id, t1.replacement_cost, t2.film_id, t2.replacement_cost
FROM film AS t1, film AS t2
WHERE t1.replacement_cost = t2.replacement_cost;

-- 2) Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
SELECT t1.title, t1.rental_duration, t2.title, t2.rental_duration
FROM film AS t1, film AS t2
WHERE t1.rental_duration BETWEEN 2 AND 4
AND t2.rental_duration BETWEEN 2 AND 4;




-- 1) Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor , exibindo apenas o nome e o sobrenome . Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.


-- 2) Monte uma query que una os resultados das tabelas customer e actor , exibindo os nomes que contêm a palavra "tracy" na tabela customer e os que contêm "je" na tabela actor . Exiba apenas os resultados únicos.


-- 3) Monte uma query que exiba a união dos cinco últimos nomes da tabela actor , o primeiro nome da tabela staff e cinco nomes a partir da 15ª posição da tabela customer . Não permita que dados repetidos sejam exibidos. Ordene os resultados em ordem alfabética.


-- 4) Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados, em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página. Monte uma query que simule esse cenário.





-- db: https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/hotel-6969e872405a203072b3d984f5fbdea8.sql

-- 1) Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.


-- 2) Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.


-- 3) Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.


-- 4) Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.


