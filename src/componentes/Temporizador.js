import React, { useState, useEffect } from 'react';

const Temporizador = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContador((prevContador) => prevContador + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Contador: <span className="contador-numeros">{contador}</span></h1> {/* Envolver los números en un span */}
    </div>
  );
};

export default Temporizador;
