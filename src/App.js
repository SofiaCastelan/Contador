import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
//Para usar el Hook
import { useState } from 'react';
//Importamos la imagen
import Kuromi from './imagenes/kuromi.jpg';

function App() {
/**Se empezara a trabajar con Hooks 
 * useState permite agregar un estado a un componente 
 * funcional
*/
//la otra funcion (setNumClics) es para actualizarlo
// el valor cero es el valor inicial de nuestro contador
const [numClics, setNumClics] = useState(0); 



 const manejarClic = () => {
  setNumClics(numClics + 1);

 }

 const reiniciarContador = () => {
  setNumClics(0);
 }



//Si haces clic en el boton este va a llamar
//a la funcion manejarClic

  return (
    //Vamos a incluir imagenes
    <div className="App">
     <div className='kuromi-logo-contenedor'>
      <img
      className='kuromi-logo'
      src = {Kuromi}
      alt = 'Logo de kuromi' />
     </div>
     <div className='contador-principal'>
      <Contador 
      numClics = {numClics}
      />
      <Boton 
      texto = 'Clic'
      esBotonDeClic = {true}
      manejarClic = {manejarClic}
      />
      <Boton 
      texto = 'Reiniciar'
      esBotonDeClic = {false}
      manejarClic = {reiniciarContador}
      />
     </div>
    </div>
  );
}

export default App;
