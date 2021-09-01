CREATE TABLE libros (
  titulo VARCHAR(50),
  editorial VARCHAR(50),
  id BIGINT,
  num_pag TINYINT,
  PRIMARY KEY (id)
);

CREATE TABLE usuarios (
  nombre VARCHAR(100),
  fecha_nac DATE,
  calle VARCHAR(50),
  ciudad VARCHAR(50),
  codigo_post CHAR(5),
  id BIGINT,
  PRIMARY KEY (id)
);

CREATE TABLE autores (
  id_libro BIGINT,
  autor VARCHAR(100),
  PRIMARY KEY (id_libro, autor),
  -- FOREIGN KEY (campo_actual) REFENCES tabla_original(campo_original)
  FOREIGN KEY (id_libro) REFERENCES libros(id)
);

-- Data Manipulation Language

-- INSERT INTO [tabla] VALUES ([campo1], [campo2], ..., [campoN])
-- Nota: El orden de los valores debe coincidir con el orden de los campos en la tabla

INSERT INTO libros VALUES ('Harry Potter y la piedra filosofal', 'Trigillas', 100, 100);
INSERT INTO libros VALUES ('Juegos del Hambre', 'Trigillas', 101, 100);
INSERT INTO usuarios VALUES ('Juan Perez','1980-10-10', 'Av. Insurgentes', 'CDMX', '08070', 200);
INSERT INTO autores VALUES (100, 'J.K. Rowling');
INSERT INTO autores VALUES (101, 'Un autor desconocido');

-- Seleccionando todos los registros con algunos campos (proyección):
-- SELECT [campo1], [campo2], ..., [campoN] FROM [tabla]

-- Seleccionando todos los registros con todos los campos:
-- SELECT * FROM [tabla]

SELECT * FROM libros;

