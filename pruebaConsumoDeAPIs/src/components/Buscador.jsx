import React from "react";

function Buscador({ serchTerm, setSearchTerm }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Busca por titulo"
        value={serchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Buscador;
