import React, { useState } from "react";
import Error from "./Error";
import axios from "axios";
import styled from "@emotion/styled";

const Input = styled.input`
  width: 92%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = ({ guardarResultadoFecha, guardarCargando }) => {
  const [state, actualizarState] = useState("");
  const [error, guardarError] = useState(false);

  const consultaIndicador = async e => {
    e.preventDefault();
    if (state === "") {
      guardarError(true);
      return;
    }
    const url = `/date/cobre/${state}`;
    const respuesta = await axios.get(url);
    guardarCargando(true);

    setTimeout(() => {
      guardarCargando(false);
      guardarError(false);
      guardarResultadoFecha(respuesta.data);
    }, 3000);
  };

  return (
    <form onSubmit={consultaIndicador}>
      {error ? <Error mensaje="La fecha es obligatoria" /> : null}
      <Input
        type="date"
        name="fecha"
        onChange={e => actualizarState(e.target.value)}
        value={state}
      />

      <Boton type="submit" value="Consultar" />
    </form>
  );
};

export default Formulario;
