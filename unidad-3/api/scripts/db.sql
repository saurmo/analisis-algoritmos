
CREATE TABLE public.usuarios (
	id varchar NOT NULL,
	nombres varchar NOT NULL,
	apellidos varchar NULL,
	correo varchar NULL,
	fecha_nacimiento date NULL,
	celular varchar NOT NULL
);


CREATE TABLE public.notas (
	id serial NOT null primary KEY,
	id_estudiante varchar NOT NULL,
	nota decimal NULL,
	id_curso varchar NULL
);

CREATE TABLE public.estudiantes (
	id varchar NOT null primary KEY,
	nombres varchar NOT NULL,
	apellidos varchar NULL,
	correo varchar NULL,
	fecha_nacimiento date NULL
);