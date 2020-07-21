import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Formulario from "./componentes/Formulario";

configure({ adapter: new Adapter() });

describe("App", () => {
  const wrapper = shallow(<App />);

  it("Se verifica existencia de Indicador", () => {
    expect(wrapper.exists("Indicador")).toEqual(true);
  });

  it("Se verifica existencia de Formulario", () => {
    expect(wrapper.exists("Formulario")).toEqual(true);
  });

  it("Se verifica existencia de indicadorFecha", () => {
    expect(wrapper.exists("IndicadorFecha")).toEqual(true);
  });

  it("Se verifica no existencia de Spinner", () => {
    expect(wrapper.exists("Spinner")).toEqual(false);
  });
});

describe("Llamar a formulario con sus funciones ", () => {
  it("Formulario", () => {
    const guardarResultadoFecha = jest.fn();
    const guardarCargando = jest.fn();

    const wrapper = shallow(
      <Formulario
        guardarResultadoFecha={guardarResultadoFecha}
        guardarCargando={guardarCargando}
      />
    );
    expect(wrapper).toEqual({});
  });
});
