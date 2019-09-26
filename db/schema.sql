DROP DATABASE IF EXISTS burgers_db;

-- Creates the "todolist" database --
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NULL,
    devoured BOOLEAN,
    extra VARCHAR(50),
    extra_two VARCHAR(50),
    PRIMARY KEY (id)
);

ALTER TABLE burgers CHANGE COLUMN createdAt createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE burgers CHANGE COLUMN updatedAt updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;