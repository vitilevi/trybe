-- 1) Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
USE sakila;
DELIMITER $$
CREATE PROCEDURE exibeDezAtoresMaisPopulares()
BEGIN
	SELECT actor_id, COUNT(film_id)
    FROM film_actor
    GROUP BY actor_id;
END$$

DELIMITER ;

CALL exibeDezAtoresMaisPopulares();

-- 2) Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.
DELIMITER $$
CREATE PROCEDURE retornaInfo(IN categoria VARCHAR(50))
BEGIN
	SELECT f.film_id, f.title, fc.category_id, c.name
    FROM film AS f
    INNER JOIN film_category AS fc
    ON f.film_id = fc.film_id
    INNER JOIN category AS c
    ON c.category_id = fc.category_id
    WHERE c.name = categoria;
END$$
DELIMITER ;

CALL retornaInfo('Action');

-- 3) Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
DELIMITER $$
CREATE PROCEDURE clienteEstaAtivo(IN inputEmail VARCHAR(50), OUT response VARCHAR(50))
BEGIN
	SELECT IF(active = 1, 'Cliente Ativo', 'Cliente Não Ativo')
    FROM customer
    WHERE email = inputEmail
    INTO response;
END$$
DELIMITER ;

CALL clienteEstaAtivo('SANDRA.MARTIN@sakilacustomer.org', @response);
SELECT @response;




-- 1) Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
DELIMITER $$
CREATE FUNCTION retornaQuantidadePagamentos(c_id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total INT;
	SELECT COUNT(payment_id)
    FROM payment
    WHERE customer_id = c_id INTO total;
    RETURN total;
END$$
DELIMITER ;

SELECT retornaQuantidadePagamentos(3);

-- 2) Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
DELIMITER $$
CREATE FUNCTION retornaIdInventarioDeFilme(i_id INT)
RETURNS VARCHAR(500) READS SQL DATA
BEGIN
	DECLARE info VARCHAR(100);
    SELECT f.title
    FROM film AS f
    INNER JOIN inventory AS i
    ON f.film_id = i.film_id
    WHERE i.inventory_id = i_id INTO info;
    RETURN info;
END$$
DELIMITER ;

SELECT retornaIdInventarioDeFilme(22);


-- 3) Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
DELIMITER $$
CREATE FUNCTION retornaQtdFilmesPorCategoria(cat VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE value INT;
    SELECT COUNT(fc.film_id) AS qtd
    FROM film_category AS fc
    INNER JOIN category AS c
    ON fc.category_id = c.category_id
    WHERE c.name = cat INTO value;
    RETURN value;
END$$
DELIMITER ;

SELECT retornaQtdFilmesPorCategoria('Action');



-- 1) Crie um TRIGGER que, a cada nova inserção feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido, a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1 .
USE betrybe_automoveis;
DELIMITER $$
CREATE TRIGGER defineDataAtualizacao
	BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
    NEW.disponivel_em_estoque = 1;
END$$
DELIMITER ;

INSERT INTO carros (preco) VALUES (10000);

-- 2) Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO' .
USE betrybe_automoveis;
DELIMITER $$
CREATE TRIGGER defineValorEAcao
	BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
    NEW.acao = 'ATUALIZAÇÃO';
END$$
DELIMITER ;

UPDATE carros
SET preco = 44444
WHERE id_carro = 1;

-- 3) Crie um TRIGGER que, a cada exclusão feita na tabela carros , envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.
USE betrybe_automoveis;
DELIMITER $$
CREATE TRIGGER onDeleteUpdateAction
	BEFORE DELETE ON carros
    FOR EACH ROW
BEGIN
	INSERT INTO log_operacoes (tipo_operacao, data_ocorrido) VALUES ('EXCLUSÃO', NOW());
END$$
DELIMITER ;

DELETE FROM carros
WHERE id_carro = 1;
