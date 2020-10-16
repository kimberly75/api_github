import React from "react";
import { Spinner } from "react-bootstrap";

function Loader() {
  return (
    <div style={{textAlign: '-webkit-center', margin: '20%'}}>
      <Spinner animation="border" role="status">
        <span className="sr-only">Carregando...</span>
      </Spinner>
    </div>
  );
}

export default Loader;
