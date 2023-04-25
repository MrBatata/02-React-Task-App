import React, { useState } from 'react';

/*
*   Login / Logout Buttons: componentes hijos de OptionalRender
*/
// ? (Expresion : true) && expresion => renderiza la expresión
// ? (Expresion : false) && expresion => no renderiza la expresión

const loginStyle = {
    color: 'green',
    'background-color': 'white',
    'font-weight': '900',
    border: '0px'
};

const logoutStyle = {
    'color': 'white',
    'background-color': 'tomato',
    border: '0px'
};

const LoginButton = ({ loginProp, loginPropStyle }) => {
    return (
        <button onClick={loginProp} style={loginPropStyle}>Login</button>
    );
};

const LogoutButton = ({ logoutProp, logoutPropStyle }) => {
    return (
        <button onClick={logoutProp} style={logoutPropStyle}>Logout</button>
    );
};

/*
*   Componente Container Padre
*/
const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setnMessages] = useState(0);

    /*
    *   Login Logout 
    */
    const loginAction = () => {
        setAccess(true);
    }
    const logoutAction = () => {
        setAccess(false);
    }

    let optionalButton;
    if (access) {
        optionalButton = <LogoutButton logoutProp={logoutAction} logoutPropStyle={logoutStyle} ></LogoutButton>
    } else {
        optionalButton = <LoginButton loginProp={loginAction} loginPropStyle={loginStyle}></LoginButton>
    }

    /*
    *   Unread messages 
    */
    const addMessages = () => {
        setnMessages(nMessages + 1)
    }

    /*
    *   >>> DOM 
    */
    return (
        <div>
            {/* Login / Logout Button */}
            {optionalButton}
            <hr></hr>
            {/* Message creation and counting */}
            {/* {(nMessages === 0) && <p>There are no new messages...</p>}
            {(nMessages > 0) && (nMessages <= 1) && <p>You have {nMessages} new message!</p>}
            {(nMessages > 1) && (nMessages < 20) && <p>You have {nMessages} new messages!</p>}
            {(nMessages >= 20) && <p>Too many massages bastard...</p>}
            <button onClick={addMessages}>Add message</button> */}

            {/* Best Message creation and counting */}
            {(access)
                ? (
                    <div>
                        {
                            (nMessages === 0)
                                ? <p>You have no new message!</p>
                                : <p>You have {nMessages} new message
                                    {(nMessages > 1)
                                        ? 's'
                                        : null
                                    }
                                    !
                                </p>
                        }
                        <button onClick={addMessages}>Add {(nMessages === 0) ? 'your first' : 'new'} message</button>
                    </div>
                )
                : null
            }

        </div>
    );
}


/*
*   Opción básica: un operador en el componente funcional (antes del return) define qué se devuelve al DOM en el return. 
*/
// const OptionalRender = () => {

//     const [access, setAccess] = useState(true);

//     function updateAccess() {
//         setAccess(!access);
//     }

//     let optionalButton;
//     if (access) {
//         optionalButton = <button onClick={updateAccess}>Logout</button>
//     } else {
//         optionalButton = <button onClick={updateAccess}>Login</button>
//     }

//     return (
//         <div>
//             {optionalButton}
//         </div>
//     );
// }


export default OptionalRender;


