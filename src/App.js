import React from 'react';
import './App.css';
import Temporizador from '../src/componentes/Temporizador.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Manejo básico de errores */}
        {Temporizador ? (
          <Temporizador />
        ) : (
          <p>Error al cargar el componente Temporizador</p>
        )}
      </header>
    </div>
  );
}

export default App;
