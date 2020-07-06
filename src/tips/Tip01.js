import React from "react";

/**
 * YT: mogueloDev
 * 
 * Tip #1: Asignar un valor por default
 * al desestructurar una variable.
 *
 * Explicación: https://www.youtube.com/watch?v=T0ewUhBr0Xo
 * 
 * Links Utiles:
 * Desestructuración: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * Operadores Logicos: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operadores_l%C3%B3gicos
 *
 */
const Tip01 = (props) => {
  /**
   * Aqui es donde utilizamos la asignación por defecto de
   * nuestra variable.
   *
   * Nota: Recuerda que funciona unicamente cuando
   *       es de tipo "undefined."
   */
  const { data = [] } = props;

  /**
   * Si llega como null o un string vacio
   * te recomiendo que la valides
   * con el operando &&, ya que se valida como falso
   * y no ejecuta la función .map() de javascript.
   *
   * {
   *   data && data.map(()=>{})...
   * }
   */
  return (
    <>
      {data.map((item) => (
        <div>{item}</div>
      ))}
    </>
  );
};

export default Tip01;
