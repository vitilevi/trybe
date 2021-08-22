select 'Víctor';
select 'Víctor' as nome, 'faria' as sobrenome, 'Guaratinguetá' as 'cidade natal', 25 as idade;
select 13 * 8;
select now() as 'Data atual';


use sakila;
SELECT CONCAT (first_name, last_name) FROM actor;
SELECT CONCAT (first_name, ' ', last_name) FROM actor;
SELECT CONCAT (first_name, ' ', last_name) AS 'Nome Completo' FROM actor;


SELECT CONCAT (title, ' ', release_year) as 'Lançamento do filme' from film;
SELECT CONCAT (title, ' ', rating) as 'Classificação' from film;
SELECT CONCAT (address, ' ', district) as 'Endereço' from address;


CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Alunos (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
INSERT INTO Escola.Alunos VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);

USE Escola;
SELECT Nome, Idade FROM Alunos; -- 5rows 
SELECT DISTINCT Nome FROM Alunos; -- 4rows
SELECT DISTINCT Idade FROM Alunos; -- 4rows


USE sakila;
SELECT COUNT(password) FROM staff; -- 1
SELECT COUNT(staff_id) FROM staff; -- 2
SELECT COUNT(email) FROM staff; -- 1


SELECT COUNT(*) FROM rental;
SELECT * FROM rental;
SELECT * FROM rental LIMIT 10;


SELECT * FROM actor LIMIT 10 OFFSET 4;