import React from 'react';
import './hojas-de-estilo/Boton.css';

//Probamos la sintaxis de 
//desestructuracion
//Una forma mas sencilla ya que
//solo llamas a la propiedad con su nombre
//Operador ternario
//Permite tomar decisiones en base a
//otro valor en una sola linea
/**Si esBotonDeClic es verdadera  a retornar boton-clic
 * si es falsa va a retornar boton-reiniciar
 * asi que a la clase de boton se le puede asignar cierto 
 * nombre dependiendo de lo anterior mencionado
*/
//Cuando hagamos click en el boton
/** tendremos que actualizar el numero de clicks en otro compo
 * nente entonces por eso ocupamos manejarClic
*/

function Boton({ texto, esBotonDeClic, manejarClic }){
    return(
        <button
        className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' } 
        onClick={manejarClic}
        >
            {texto}
        </button>
    );
}

export default Boton;