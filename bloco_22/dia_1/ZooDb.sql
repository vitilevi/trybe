CREATE DATABASE IF NOT EXISTS ZooDb;

USE ZooDb;

CREATE TABLE Gerentes (
	Gerente_id INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(80) NOT NULL
);

CREATE TABLE Cuidadores (
	Cuidador_ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(80) NOT NULL,
    Gerente_id INT NOT NULL,
    FOREIGN KEY (Gerente_id) REFERENCES Gerentes (Gerente_id)
);

CREATE TABLE Animais (
	Animal_id INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(80) NOT NULL,
    Especie VARCHAR(30),
    Sexo VARCHAR(5) NOT NULL,
    Idade INT,
    `Localização` VARCHAR(50),
    Cuidador_id INT NOT NULL,
    FOREIGN KEY (Cuidador_id) REFERENCES Cuidadores (Cuidador_id)
);