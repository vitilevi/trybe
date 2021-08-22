-- 1) Precisamos identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org .
USE sakila;
SELECT * FROM customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

-- 2) Precisamos de um relatório dos nomes dos clientes, em ordem alfabética , que não estão mais ativos no nosso sistema e pertencem à loja com o id = 2 , e não inclua o cliente KENNETH no resultado.
SELECT * FROM customer
WHERE store_id = 2
AND active = 0
AND first_name <> 'KENNETH'
ORDER BY first_name;

-- 3) O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição ( replacement_cost ), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em ordem alfabética pelo título.
SELECT title, description, release_year, replacement_cost

LIMIT 100;

-- 4) Quantos clientes estão ativos e na loja 1 ?
SELECT COUNT(customer_id) FROM customer
WHERE store_id = 2
AND active = 1;

-- 5) Mostre todos os detalhes dos clientes que não estão ativos na loja 1 .
SELECT * FROM customer
WHERE active = 0
AND store_id = 1;

-- 6) Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em ordem alfabética pelo título.
SELECT * FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate
LIMIT 50;

-- 7) Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.
SELECT * FROM film
WHERE title
LIKE '%ace%';

-- 8) Mostre todos os detalhes dos filmes cujas descrições finalizam com china .
SELECT * FROM film
WHERE description
LIKE '%china';

-- 9) Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord .
SELECT * FROM film
WHERE description
LIKE '%girl%'
AND title
LIKE '%lord';

-- 10) Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon .
SELECT * FROM film
WHERE title
LIKE '___gon%';

-- 11) Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary .
SELECT * FROM film
WHERE title
LIKE '___gon%'
AND description LIKE '%Documentary%';

-- 12) Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito .
SELECT * FROM film
WHERE title
LIKE 'mosquito%'
OR title LIKE '%academy';

-- 13) Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições
SELECT * FROM film
WHERE description
LIKE '%monkey%'
AND description LIKE '%sumo%';

-- 14) Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy , ordenados por nome em ordem alfabética.
SELECT first_name, last_name, email FROM customer
WHERE last_name in ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy');

-- 15) Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176 , ordenados em ordem alfabética
SELECT email FROM customer
WHERE address_id in ('172', '173', '174', '175', '176')
ORDER BY first_name;

-- 16) Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005 . Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia , diferente do formato brasileiro, que é dia/mês/ano .
SELECT * FROM payment
WHERE payment_date BETWEEN '2005/05/01' AND '2005/08/01';

-- 17) Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6 . Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro. Em caso de empate, ordene em ordem alfabética pelo título.


-- 18) Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas G, PG e PG-13 . Os resultados devem estar ordenados por título.


-- 19) Quantos pagamentos temos com a data de retorno 2005-05-25 ? Há múltiplas maneiras possíveis de encontrar a resposta.


-- 20) Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005 ?


-- 21) Usando a tabela rental , extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330. Utilize a coluna rental_date para extrair as informações.


-- 22) Monte uma query que retorne todos os dados do pagamento feito no dia 28/07/2005 a partir das 22 horas .
