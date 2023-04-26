import React, { useState } from 'react';

// Definiendo estilos en constantes:

// ? Estilo para usuario logueado
const loggedStyle = {
    color: 'white',
};

// ? Estilo para usuario no logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const Greetingstyled = (props) => {

    // Generamos un estado para el componente
    // y así controlar si el usuario está o no logueado
    const [logged, setLogged] = useState(false)

    const greetingUser = () => { return <p>Hola, {props.nombre}</p> }
    const pleaseLogin = () => { return <p>Please login</p> }

    const logearse = () => {
        console.log('Botón pulsado');
        setLogged(!logged);
    }

    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
            {
                logged ?
                    greetingUser()
                    :
                    pleaseLogin()
            }
            <button onClick={logearse} className='btn btn-danger'>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default Greetingstyled;
