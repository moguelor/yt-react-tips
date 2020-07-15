import React from "react";

/**
 * YT: mogueloDev
 *
 * Tip #2: Optional Chaining (?.)
 *
 * Explicación: https://www.youtube.com/watch?v=Qyqok5ITBFs
 *
 * Links Utiles:
 * Optional Chaining: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Encadenamiento_opcional
 *
 */
const Tip02 = () => {
  const club = {
    name: "Moguelo Club",
    /**
     * Recuerda que si por alguna razón no nos llega el objeto
     * como esperamos podemos validar los elementos de su profundidad,
     * con el operador optional chaining (?.) introducido en el ES2020.
     */
    // members: [
    //   {
    //     hobbies: [
    //       {
    //         name: "run",
    //       },
    //     ],
    //   },
    // ],
  };

  return (
    <>
      {/* Intentamos acceder al nombre del primer hooby. */}
      {/* Hobbie: {club.members?.[0].hobbies?.[0].name} */}

      {/* En lugar de validarlo de esta manera, que nos ensucia mucho el código. */}
      {/* Hobbie: {club.members && club.members[0].hobbies? && club.members[0].hobbies[0].name} */}

      {/* Utilicemos el optional chaining (?.) */}
      Hobbie: {club.members?.[0].hobbies?.[0].name}
    </>
  );
};

export default Tip02;
