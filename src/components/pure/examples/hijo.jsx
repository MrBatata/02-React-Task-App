import React, { useRef } from 'react';

const Hijo = ({ nameHijo, sendHijo, updateHijo }) => {
    /*
    *   Definimos props específicas y las llamamos: nameHijo y sendHijo.
    *   Ambas se definen en el mismo return con el HTML a imprimir.
    *
    *   nameHijo será un string a ingresar en el HTML a imprimir en DOM.
    *   sendHijo será una función que podrá ejecutar una función definida en el padre
    */

    const mensajeRef = useRef('')
    const nombreRef = useRef('')

    function pressButton() {
        const text = mensajeRef.current.value;
        alert(`Texto en input: ${text}`);
    }

    function pressButtonParams(texto1) {
        alert(`Texto: ${texto1}`);
    }

    function metodoSubmitName(e) {
        e.preventDefault(); // por defecto el submit intenta recargar la página. Esto lo evita
        updateHijo(nombreRef.current.value);
    }

    return (

        <div>
            <p onMouseOver={() => { console.log('On mouse over!') }}>
                Componente Child con nombre: {nameHijo}!
            </p>

            <button onClick={() => console.log('Botón 1 pulsado')}>
                Botón 1
            </button>
            <button onClick={pressButton}>
                Botón mensaje referenciado
            </button>
            <button onClick={() => { pressButtonParams('Hola') }}>
                Botón 3
            </button>

            <input
                placeholder='Insertar texto'
                onFocus={() => { console.log('Input Focused') }}
                onChange={(e) => { console.log('Input Changed', e.target.value) }}
                onCopy={(e) => { console.log('Input Copied', e.target.value) }}
                ref={mensajeRef}
            >
            </input>
            <button onClick={() => { sendHijo(mensajeRef.current.value) }}>
                Mandar Mensaje
            </button>

            <hr></hr>

            <div className='mt-3'>
                <form onSubmit={metodoSubmitName}>
                    <input
                        placeholder='Nuevo Nombre'
                        ref={nombreRef}
                    >
                    </input>
                    <button type='submit'>Actualizar Nombre</button>
                </form>
            </div>

        </div>

    );
}

export default Hijo;
