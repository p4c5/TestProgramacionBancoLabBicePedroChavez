import React from "react";

import styled from "@emotion/styled";

const ResultadoDiv = styled.div`
  color: #fff;
  font-family: Arial, Arial, Helvetica, sans-serif;
  margin-bottom: 50px;
`;

const Info = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
    text-transform: capitalize;
  }
`;

const Unidad = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const IndicadorFecha = ({ resultadoFecha }) => {
  if (Object.keys(resultadoFecha).length === 0) return null;

  return (
    <ResultadoDiv>
      <Unidad>
        Consulta:{" "}
        <span>
          {resultadoFecha.key === null ? "Sin Resultado" : resultadoFecha.key}
        </span>{" "}
      </Unidad>
      <Info>
        Fecha:{" "}
        <span>
          {resultadoFecha.date === null ? "Sin Resultado" : resultadoFecha.date}
        </span>
      </Info>
      <Info>
        Tipo de conversion:{" "}
        <span>
          {resultadoFecha.name === null ? "Sin Resultado" : resultadoFecha.name}
        </span>{" "}
      </Info>
      <Info>
        Divisa:{" "}
        <span>
          {resultadoFecha.unit === null ? "Sin Resultado" : resultadoFecha.unit}
        </span>{" "}
      </Info>
      <Info>
        Valor:{" "}
        <span>
          {resultadoFecha.value === null
            ? "Sin Resultado"
            : resultadoFecha.value}
        </span>{" "}
      </Info>
    </ResultadoDiv>
  );
};

export default IndicadorFecha;
