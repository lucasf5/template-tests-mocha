DROP SCHEMA IF EXISTS Users;

CREATE SCHEMA IF NOT EXISTS Users;

CREATE TABLE Users.usuarios (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO
    Users.usuarios (name, email, password)
VALUES
    ("lucas", "lucas@gmail.com", "1dragaonoceu");

INSERT INTO
    Users.usuarios (name, email, password)
VALUES
    ("carlos", "carlos@gmail.com", "pagandodividas");

INSERT INTO
    Users.usuarios (name, email, password)
VALUES
    ("fer", "fer@gmail.com", "valarmorg");