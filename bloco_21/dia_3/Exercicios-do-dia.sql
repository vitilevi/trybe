-- CREATE DATABASE IF NOT EXISTS BeeMovies;

-- USE BeeMovies;

-- CREATE TABLE movies(
--     movie_id INT PRIMARY KEY auto_increment,
--     ticket_price DECIMAL(12, 2) NOT NULL DEFAULT 0,
--     ticket_price_estimation VARCHAR(15),
--     release_year YEAR
-- ) engine = InnoDB;

-- CREATE TABLE movies_logs(
--     log_id INT AUTO_INCREMENT PRIMARY KEY,
--     movie_id INT NOT NULL,
--     executed_action VARCHAR(15) NOT NULL,
--     log_date DATE NOT NULL
-- ) engine = InnoDB;

-- 1) Crie um Trigger para INSERT que deve definir o valor do campo release_year da tabela movies como o ano atual de forma dinâmica, sem haver a necessidade de digitar manualmente o valor do ano. Além disso, crie um outro Trigger para INSERT que adiciona um novo registro na tabela movies_logs , informando o movie_id do filme que acaba de ser inserido na tabela movies , a executed_action como 'INSERT' e a log_date como a data atual.
DELIMITER $$
CREATE TRIGGER updateReleaseYear
	BEFORE INSERT ON movies
    FOR EACH ROW
BEGIN
	SET NEW.release_year = YEAR(NOW());
END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER updateMovieIdOnLogs
	AFTER INSERT ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, log_date) VALUES (NEW.movie_id, 'INSERT', NOW());
END$$
DELIMITER ;

INSERT INTO movies(ticket_price, ticket_price_estimation) VALUES (12.4, 1200);

-- 2) Crie um Trigger para UPDATE que, ao receber uma alteração na tabela movies , deve comparar o valor anterior de ticket_price com o valor sendo inserido nesta atualização. Caso o valor seja maior que o anterior, insira na coluna ticket_price_estimation o valor de 'Increasing' . Caso contrário, insira o valor 'Decreasing' . Adicionalmente, insira um novo registro na tabela movies_logs , contendo informações sobre o registro alterado ( movie_id , executed_action e log_date ).


-- 3) Crie um Trigger na tabela movies que, ao ter algum de seus registros excluídos, deve enviar uma informação para a tabela movies_logs , onde devem ser guardados a data da exclusão, a executed_action 'DELETE' e o id do filme excluído.