import React, { useState } from 'react';
import Hijo from '../pure/hijo';

const Padre = ({ namePadre }) => {

    const [name, setName] = useState('Martin');

    function mostrarMensajePadre(texto2) {
        alert(`Soy función definida en padre --> ${texto2}`)
    }

    function updateHijo(newName) {
        setName(newName)
    }

    return (
        <div>
            <p>
                Componente Padre con nombre: {namePadre}!
            </p>
            <Hijo
                nameHijo={name}
                sendHijo={mostrarMensajePadre}
                updateHijo={updateHijo}>
            </Hijo>
        </div>
    );
}

export default Padre;
