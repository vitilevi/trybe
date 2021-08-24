SELECT UCASE('Oi, eu sou uma string');
SELECT REPLACE('Oi eu sou uma string', 'string', 'cadeia de caracteres');

USE sakila;
SELECT UCASE(title) FROM film LIMIT 10;
SELECT LCASE(title) FROM film LIMIT 10;
SELECT LEFT(title, 7) FROM film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM film WHERE film_id = 1;


-- 1) Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
SELECT UCASE('trybe');

-- 2) Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?' 
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');

-- 3) Utilizando uma query , encontre quantos caracteres temos em 'Uma frase qualquer' .
SELECT LENGTH('Uma frase qualquer');

-- 4) Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas' .
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

-- 5) Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');



-- 1) Usando o IF na tabela sakila.film , exiba o id do filme , o título e uma coluna extra chamada 'conheço o filme?' , em que deve-se avaliar se o nome do filme é ' ACE GOLDFINGER '. Caso seja, exiba "Já assisti a esse filme". Caso contrário, exiba "Não conheço o filme". Não esqueça de usar um alias para renomear a coluna da condicional.
SELECT IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') as 'conheço o filme?'
FROM film;

-- 2) Usando o CASE na tabela sakila.film , exiba o título , a classificação indicativa ( rating ) e uma coluna extra que vamos chamar de 'público-alvo' , em que classificaremos o filme de acordo com as seguintes siglas:
-- G: "Livre para todos";
-- PG: "Não recomendado para menores de 10 anos";
-- PG-13: "Não recomendado para menores de 13 anos";
-- R: "Não recomendado para menores de 17 anos";
-- Se não cair em nenhuma das classificações anteriores: "Proibido para menores de idade".
SELECT title, rating,
CASE
	WHEN rating = 'G' THEN 'Livre para todos'
    WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
    WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
    WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
    ELSE 'Proibido para menores de idade'
END as 'Classificativa'
FROM film;



-- 1) Monte uma query que gere um valor entre 15 e 20
SELECT ROUND(15 + (RAND() * 5));

-- 2) Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.
SELECT ROUND(15.7515971, 5);

-- 3) Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?
SELECT FLOOR(39.494);

-- 4) Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?
SELECT CEIL(85.236);



-- 1) Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
SELECT DATEDIFF('2030-01-20', NOW());

-- 2) Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00' .
SELECT TIMEDIFF('10:25:45', '11:00:00');




-- 1) Monte um query que exiba:
-- A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
SELECT AVG(length) as 'Média de duração' FROM film;

-- A duração mínima dos filmes como 'Duração Mínima';
SELECT MIN(length) as 'Duração Mínima' FROM film;

-- A duração máxima dos filmes como 'Duração Máxima';
SELECT MAX(length) as 'Duração Máxima' FROM film;

-- A soma de todas as durações como 'Tempo de Exibição Total
SELECT SUM(length) as 'Tempo de Exibição Total' FROM film;

-- E finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
SELECT COUNT(title) as 'Filmes Registrados' FROM film;





-- 1) Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
SELECT active, COUNT(*) as 'Qtd'
FROM customer
GROUP BY active;

-- 2) Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja , o status dos clientes (ativos ou inativos) e a quantidade de clientes por status .
SELECT store_id, active, count(*) as 'Qtd'
FROM customer
GROUP BY store_id, active
ORDER BY store_id;

-- 3) Monte uma query que exiba a média de duração de locação por classificação indicativa ( rating ) dos filmes cadastrados na tabela sakila.film . Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
SELECT rating, AVG(length) as 'Duração média'
FROM film
GROUP BY rating;

-- 4) Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
SELECT district, COUNT(*) as qtd
FROM address
GROUP BY district
ORDER BY qtd DESC;


-- 1) Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.
SELECT rating, AVG(length) as media
FROM film
GROUP BY rating
HAVING media BETWEEN 115.0 AND 121.50;

-- 2) Usando a query a seguir, exiba apenas os valores de custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
SELECT rating, SUM(replacement_cost) as soma
FROM sakila.film
GROUP by rating
HAVING soma > 3950.0;
