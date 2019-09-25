DROP DATABASE IF EXISTS burgers_db;

-- Creates the "todolist" database --
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);