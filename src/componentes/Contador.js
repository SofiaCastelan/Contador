import React from 'react';
import './hojas-de-estilo/Contador.css';

/**Tomamos el numero de click con
 * un prop
 */
function Contador({ numClics }){
    return (
        <div className='contador'>
            { numClics }
        </div>
    );
}

export default Contador;