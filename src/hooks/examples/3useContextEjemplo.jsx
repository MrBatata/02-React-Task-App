
import React, { useContext, useState } from 'react';

const miContext = React.createContext(null);

const Componente4 = () => {

    const state = useContext(miContext);

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            <Componente5></Componente5>
        </div>
    );
}

const Componente5 = () => {

    const state = useContext(miContext);

    return (
        <div>
            <h2>
                La sesión es: {state.sesion}
            </h2>
        </div>
    );
}

const ComponenteConContexto = () => {

    const estadoInicial = {
        token: '0000',
        sesion: 0
    }

    const [sesionData, setSesionData] = useState(estadoInicial);

    function actualizarSesion() {
        setSesionData(
            {
                token: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
                sesion: sesionData.sesion + 1,
                estado: 'Actualizado.'
            }
        );
        console.log(sesionData.estado)
    }

    return (
        <div style={{ width: "100%" }}>
            <h1>*** Ejemplo de useContext ***</h1>
            <miContext.Provider value={sesionData}>
                {/* Todo lo que está acá adentro puede leer datos de SessionDatos.*/}
                {/* Además, si se actualizan los componentes, acá también lo actualizan*/}
                <Componente4></Componente4>
                <button onClick={()=>actualizarSesion()}>Actualizar Sesión</button>
            </miContext.Provider>
            <hr></hr>
        </div>
    );

}

export default ComponenteConContexto;
