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
      <Buscador searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <button onClick={ordenarPorTitulo}>Ordenar por título</button>
      {filteredNoticias.map((noticia) => {
        const uniqueId = `${noticia.title}-${noticia.publishedAt}`;
        return (
          <div key={uniqueId}>
            <h2>{noticia.title}</h2>
            <h4>{noticia.author}</h4>
            <img src={noticia.urlToImage} alt={noticia.title} />
            <p>{noticia.description}</p>
            <h6>{noticia.publishedAt}</h6>
          </div>
        );
      })}
    </div>
  );
}

export default MiApi;
