import React, { useState, useEffect } from "react";
import axios from "axios";
import Formulario from "./componentes/Formulario";
import Indicador from "./componentes/Indicador";
import IndicadorFecha from "./componentes/IndicadorFecha";
import Spinner from "./componentes/Spinner";
import imagen from "./indicadores.png";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;
const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: block;
`;

function App() {
  const [resultado, guardarResultado] = useState({});
  const [resultadoFecha, guardarResultadoFecha] = useState({});
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = "/last";
      const respuesta = await axios.get(url);
      guardarResultado(respuesta.data.cobre);
    };
    consultarAPI();
  }, []);

  const componente = cargando ? (
    <Spinner />
  ) : (
    <IndicadorFecha resultadoFecha={resultadoFecha} />
  );
  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="imagen cripto" />
      </div>
      <div>
        <Heading>Consulta Indicador Económico</Heading>
        <Label>Consulta del Día</Label>
        <Indicador resultado={resultado} />
  
      </div>
      <div>
      <Heading>Consulta por fecha</Heading>
      <Formulario
          guardarResultadoFecha={guardarResultadoFecha}
          guardarCargando={guardarCargando}
        />
        {componente}
      </div>
    </Contenedor>
  );
}

export default App;
