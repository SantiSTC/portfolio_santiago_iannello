import React from "react";

function Spinner() {
  return (
    <div className="card">
      <div className="loader">
        <p>Cargando</p>
        <div className="words">
          <span className="word">imagenes</span>
          <span className="word">videos</span>
          <span className="word">modelos 3D</span>
          <span className="word">botones</span>
          <span className="word">contenido</span>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
