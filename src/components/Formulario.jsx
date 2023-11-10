import React, { useEffect, useState } from "react";

import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import CardPelicula from "./CardPelicula";


const Formulario = () => {
  const {
    register,
    formState: { errors },
    handleSubmit, 
    reset
  } = useForm();
  const peliculaLocalStorage = JSON.parse(localStorage.getItem("peliculas")) || ""
  const [pelicula, setPelicula] =useState(peliculaLocalStorage)

useEffect(()=>{
localStorage.setItem("peliculas", JSON.stringify(pelicula))
}, [pelicula])


  const onSubmit = (data) => {
    setPelicula(data)
reset()

  };
  const deletePelicula =()=>{

    setPelicula(null)
    localStorage.removeItem("peliculas")
  }
  return (
    <div>
      <h1 className="text-center">Formulario</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="nombre"
            {...register("nombre", {
              required: true,
              maxLength:{value:30} ,
              pattern: /^[a-zA-Z]+(?: [a-zA-Z]+)?$/

            })}
          />
          {errors.nombre?.type === "required" && (
            <p className="text-danger">El campo nombre es requerido </p>
          )}
          {errors.nombre?.type === "maxLength" && (
            <p  className="text-danger">El campo nombre debe tener menos de 30 caracteres</p>
          )}
           {errors.nombre?.type === "pattern" && (
            <p  className="text-danger">El nombre no es correcto, escribe un nombre real</p>
          )}
        </Form.Group>
        <Form.Label>Descripcion</Form.Label>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Describe la pelicula"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            {...register("descripcion", {
              required: true,
              maxLength: 50,
            })}
          />
          {errors.descripcion?.type === "required" && (
            <p className="text-danger">El campo descripcion es requerido </p>
          )}
        </FloatingLabel>
        <Form.Group className="mb-3">
          <Form.Label>Categoria</Form.Label>
          <Form.Select {...register("categoria", {
            required:true
          })}>
            <option value="">Seleccione una categoria</option>
            <option value="comedia">Comedia</option>
            <option value="drama">Drama</option>
            <option value="infantil">Infantil</option>
          </Form.Select>
          {errors.categoria?.type === "required" &&(<p className="text-danger">Seleccione una categoria</p> )}

        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {pelicula && <CardPelicula pelicula={pelicula} deletePelicula={deletePelicula} />}

    </div>
  );
};

export default Formulario;
