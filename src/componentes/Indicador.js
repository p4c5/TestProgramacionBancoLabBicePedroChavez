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

const Indicador = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;

  return (
    <ResultadoDiv>
      <Unidad>
        Consulta: <span>{resultado.key}</span>{" "}
      </Unidad>
      <Info>
        Fecha: <span>{resultado.date}</span>
      </Info>
      <Info>
        Tipo de conversion: <span>{resultado.name}</span>{" "}
      </Info>
      <Info>
        Divisa: <span>{resultado.unit}</span>{" "}
      </Info>
      <Info>
        Valor: <span>{resultado.value}</span>{" "}
      </Info>
    </ResultadoDiv>
  );
};

export default Indicador;
