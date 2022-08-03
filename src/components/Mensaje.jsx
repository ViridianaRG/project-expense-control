import React from "react";

const Mensaje = ({ children, tipo }) => {
  return <div className={`alerta ${tipo}`}>{children}</div>; //Se esta mezclando una clase fija con una clase dinamica
};

export default Mensaje;
