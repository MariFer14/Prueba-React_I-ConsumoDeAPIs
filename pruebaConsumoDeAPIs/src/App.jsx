import React from "react";
import MiApi from "./components/MiApi";
import "./assets/css/styles.css";

function App() {
  return (
    <div>
      <header>
        <div className="contenedor">
          <h2 className="logotipo">Maryland-News</h2>
          <nav className="navbar">
          <a href="/" className="active">Noticias</a>
          <a href="/">Sobre Nosotros</a>
          </nav>
        </div>
      </header>

      <main>
        <div className="imagen-principal">
          <div className="contenedor">
            <h3 className="titulo">Portal De Noticias</h3>
            <p className="descripcion">
              Mantente al día con todos los acontecimientos ocurridos alrededor del mundo.
            </p>
            <button className="boton">Suscribete</button>
            <button className="boton">Inicia Sesión</button>
          </div>
        </div>
      </main>

      <div>
        <MiApi />
      </div>
    </div>
  );
}

export default App;
