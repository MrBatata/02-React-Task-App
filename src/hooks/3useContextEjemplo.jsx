
import React, { useContext, useState } from 'react';

const miContexto = React.createContext(null);

const Componente4 = () => {

    const estado = useContext(miContexto);

    return (
        <div>
            <h1>
                El token es: {estado.token}
            </h1>
            <Componente5></Componente5>
        </div>
    );
}

const Componente5 = () => {

    const estado = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesión es: {estado.sesion}
            </h2>
        </div>
    );
}

const ComponenteConContexto = () => {

    const estadoInicial = {
        token: '0000',
        sesion: 0
    }

    const [sesionDatos, setSesionDatos] = useState(estadoInicial);

    function actualizarSesion() {
        setSesionDatos(
            {
                token: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
                sesion: sesionDatos.sesion + 1,
                estado: 'Actualizado.'
            }
        );
        console.log(sesionDatos.estado)
    }

    return (
        <div style={{ width: "100%" }}>
            <h1>*** Ejemplo de useContext ***</h1>
            <miContexto.Provider value={sesionDatos}>
                {/* Todo lo que está acá adentro puede leer datos de SessionDatos.*/}
                {/* Además, si se actualizan los componentes, acá también lo actualizan*/}
                <Componente4></Componente4>
                <button onClick={actualizarSesion}>Actualizar Sesión</button>
            </miContexto.Provider>
            <hr></hr>
        </div>
    );

}

export default ComponenteConContexto;
