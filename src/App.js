import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCamp from './imagenes/freecodecamp.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);
  
 const manejarClic = () => {
    setNumClics(numClics + 1);
   }

   const reiniciarcontador = () => {
    setNumClics(0);
   }

  return (
    <div className='App'>
      <div className='freecodecamp-contenedor'>
        <img
       className='freecodecamp'
       src={freeCodeCamp}
       alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic} />
        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarcontador} />
    </div>
    </div>
  );
}

export default App;
