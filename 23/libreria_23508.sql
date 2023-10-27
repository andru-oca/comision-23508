-- SHOW DATABASES;
/*

	soy un
	comentario en
	bloque
	
*/

# COMANTARIO TIPO PYTHON
DROP DATABASE  IF EXISTS libreria_23508;

CREATE DATABASE libreria_23508 ; 

USE libreria_23508;

CREATE TABLE AUTOR(
	CODIGO_AUTOR INT NOT NULL AUTO_INCREMENT,
	NOMBRE VARCHAR(50) DEFAULT 'NOMBRE DESCONOCIDO',
    PRIMARY KEY (CODIGO_AUTOR)
);


-- SHOW CREATE TABLE AUTOR;



CREATE TABLE LIBRO(
	CODIGO_LIBRO INT NOT NULL AUTO_INCREMENT,
    ISBN VARCHAR(100) DEFAULT '987-ISB-NI-IDEA',
    EDITORIAL VARCHAR(100) DEFAULT 'EDITORIAL NULL',
    PAGINA INT DEFAULT 100,
    TITULO NVARCHAR(200) DEFAULT 'NO TITLE',
    PRIMARY KEY(CODIGO_LIBRO)
);

CREATE TABLE EJEMPLAR(
	CODIGO_EJEMPLAR INT NOT NULL AUTO_INCREMENT,
	CODIGO_LIBRO INT NOT NULL,
    ALMACEN VARCHAR(100),
    PRIMARY KEY(CODIGO_EJEMPLAR)
    -- VOY A HACER UN ERROR A PROPO
);

ALTER TABLE EJEMPLAR
ADD FOREIGN KEY (CODIGO_LIBRO) REFERENCES LIBRO(CODIGO_LIBRO);



CREATE TABLE USUARIO(
	ID_USUARIO INT NOT NULL AUTO_INCREMENT,
    NOMBRE VARCHAR(50) ,
    TEL VARCHAR(50),
    DIRECCION VARCHAR(50),
    PRIMARY KEY(ID_USUARIO)
);

CREATE TABLE VENTA(
	ID_VENTA INT NOT NULL AUTO_INCREMENT,
    CODIGO_EJEMPLAR INT NOT NULL, -- FK
    ID_USUARIO INT NOT NULL, -- FK
    PUNTO_VENTA VARCHAR(100),
    PRECIO_VENTA DECIMAL(10,2),
	FECHA_VENTA DATE,
    PRIMARY KEY(ID_VENTA),
    FOREIGN KEY(CODIGO_EJEMPLAR) REFERENCES EJEMPLAR(CODIGO_EJEMPLAR),
    FOREIGN KEY(ID_USUARIO) REFERENCES USUARIO(ID_USUARIO)
);


CREATE TABLE LINK_AUTOR_LIBRO(
	CODIGO_AUTOR INT NOT NULL,
	CODIGO_LIBRO INT NOT NULL,
	LUGAR_ESCRITURA VARCHAR(50),
    
	FOREIGN KEY(CODIGO_AUTOR) REFERENCES AUTOR(CODIGO_AUTOR),
    FOREIGN KEY(CODIGO_LIBRO) REFERENCES LIBRO(CODIGO_LIBRO),
    
    PRIMARY KEY (CODIGO_AUTOR, CODIGO_LIBRO)
);




-- INSERT DATA

INSERT INTO AUTOR  -- ( ... COLS)
(NOMBRE)
VALUES
('ISMAEL'),
('MANAL'),
('SANDRA'),
('ESTEBAN');

-- QUERY'S


insert into AUTOR (NOMBRE) values (null);
insert into AUTOR (NOMBRE) values ('Serena');
insert into AUTOR (NOMBRE) values ('Russ');
insert into AUTOR (NOMBRE) values ('Kristin');
insert into AUTOR (NOMBRE) values ('Flory');
insert into AUTOR (NOMBRE) values ('Blondell');
insert into AUTOR (NOMBRE) values (null);
insert into AUTOR (NOMBRE) values (null);
insert into AUTOR (NOMBRE) values (null);
insert into AUTOR (NOMBRE) values (null);
insert into AUTOR (NOMBRE) values ('Patricio');
insert into AUTOR (NOMBRE) values ('Yasmin');
insert into AUTOR (NOMBRE) values (null);
insert into AUTOR (NOMBRE) values (null);
insert into AUTOR (NOMBRE) values (null);
insert into AUTOR (NOMBRE) values (null);
insert into AUTOR (NOMBRE) values (null);
insert into AUTOR (NOMBRE) values ('Felicdad');
insert into AUTOR (NOMBRE) values ('Tabb');
insert into AUTOR (NOMBRE) values (null);
insert into AUTOR (NOMBRE) values ('Dinah');
insert into AUTOR (NOMBRE) values (null);
insert into AUTOR (NOMBRE) values ('Josi');
insert into AUTOR (NOMBRE) values ('Oliviero');
insert into AUTOR (NOMBRE) values (null);
insert into AUTOR (NOMBRE) values (null);
insert into AUTOR (NOMBRE) values ('Flem');
insert into AUTOR (NOMBRE) values ('Celestyna');
insert into AUTOR (NOMBRE) values (null);
insert into AUTOR (NOMBRE) values ('Zara');
insert into AUTOR (NOMBRE) values (null);
insert into AUTOR (NOMBRE) values ('Francisco');
insert into AUTOR (NOMBRE) values (null);
insert into AUTOR (NOMBRE) values ('Clarance');
insert into AUTOR (NOMBRE) values ('Gerhardine');
insert into AUTOR (NOMBRE) values ('Gwyn');
insert into AUTOR (NOMBRE) values ('Ellen');
insert into AUTOR (NOMBRE) values ('Gayle');
insert into AUTOR (NOMBRE) values ('Drusy');
insert into AUTOR (NOMBRE) values ('Brigitta');
insert into AUTOR (NOMBRE) values (null);
insert into AUTOR (NOMBRE) values (null);
insert into AUTOR (NOMBRE) values (null);
insert into AUTOR (NOMBRE) values ('Marie-ann');
insert into AUTOR (NOMBRE) values ('Zaccaria');
insert into AUTOR (NOMBRE) values ('Jarib');
insert into AUTOR (NOMBRE) values ('Sibelle');
insert into AUTOR (NOMBRE) values ('Albina');
insert into AUTOR (NOMBRE) values (null);
insert into AUTOR (NOMBRE) values ('Dougy');

INSERT INTO AUTOR (CODIGO_AUTOR) VALUES (200) ;


SELECT 
-- CODIGO_AUTOR AS ID
	LOWER(NOMBRE) AS 'NOMBRE'
,	COUNT(1) AS TOTAL_NOMBRE
-- ,	CURDATE() AS 'FECHA DE CREACION DEL AUTOR'
FROM libreria_23508.AUTOR 
GROUP BY NOMBRE
ORDER BY TOTAL_NOMBRE DESC
LIMIT 10 ;


-- ACTUALIZAR

-- SET SQL_SAFE_UPDATES = 0;

UPDATE AUTOR 
	SET NOMBRE = 'NOMBRES NULL'
    WHERE NOMBRE IS NULL;


















