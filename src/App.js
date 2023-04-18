import './App.css';
import { useState } from "react";
import Characters from "./components/Characters";
import credencial from './img/foto.jpg';

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };

  console.log(characters)

  return (
    <div className="App">
      <h1 className="title">Rick & Morty API</h1>
      <header className="App-header">
        <img src={credencial} alt="center" width="190" align="top"></img>
        <div style={{ color: "#89D325", fontSize: "1em", fontFamily: "Times" }}>By sag</div>
        <div style={{ color: "rgb(62, 199, 199)", fontSize: "1em", fontFamily: "Times" }}>S20006742 - Axel Gustavo Peña Sánchez</div>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <button onClick={reqApi} className="btn-search">Buscar Personaje</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
