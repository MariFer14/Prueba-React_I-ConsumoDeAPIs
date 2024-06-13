import React, { useEffect, useState } from "react";
import Buscador from "./Buscador";
import "../assets/css/MiApi.css";

function MiApi() {
  const [noticias, setNoticias] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function baseDatos() {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5d0f899951254043b73f7a5b6a0de1a0"
      );
      const data = await response.json();
      setNoticias(data.articles);
    }

    baseDatos();
  }, []);

  const filteredNoticias = noticias.filter((noticia) =>
    noticia.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const ordenarPorTitulo = () => {
    const noticiasOrdenadas = [...filteredNoticias].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setNoticias(noticiasOrdenadas);
  };

  return (
    <div>
      <div className="buscador">
        <button className="btn1" onClick={ordenarPorTitulo}>
          Ordenar por título
        </button>
        <Buscador searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="noticias-container">
        {filteredNoticias.map((noticia) => {
          const uniqueId = `${noticia.title}-${noticia.publishedAt}`;
          return (
            <div key={uniqueId} className="noticias">
              <div className="card">
                <img src={noticia.urlToImage} alt={noticia.title} />
                <button className="btn2">Leer más...</button>
                <h2>{noticia.title}</h2>
                <h4>{noticia.author}</h4>
                <p>{noticia.description}</p>
                <h6>{noticia.publishedAt}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MiApi;
