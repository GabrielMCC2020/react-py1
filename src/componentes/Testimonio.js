import React from "react";
import "../hojas-de-estilo/Testimonio.css";
import PropTypes from 'prop-types';

export function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt="Foto de Emma"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong> {props.empresa}</strong>
        </p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}
Testimonio.propTypes = {
  imagen: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  pais: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  empresa: PropTypes.string.isRequired,
  testimonio: PropTypes.string.isRequired,
};

export default Testimonio;
