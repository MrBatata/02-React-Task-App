
import React, { useState, useRef, useEffect } from 'react';

const Componente2 = () => {

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef para asociar una variable con un elemento del DOM del componente en vista HTML
    const miRef = useRef();

    const incrementarContador1 = () => {
        setContador1(contador1 + 1)
    }
    const incrementarContador2 = () => {
        setContador2(contador2 + 1)
    }

    // Cada vez que haya un cambio en el estado del componente se ejecuta lo que esté en el useEffect
    useEffect(() => {
        console.log('Cambio en el estado del componente');
        console.log('Mostrando Referencia a elemento del DOM:');
        console.log(miRef)
    }
    )

    // Si quiero hacer un useEffect apuntado a un cambio de estado específico.
    useEffect(() => {
        console.log('Cambio en el estado del contador 1 del componente');
        console.log('Mostrando Referencia a elemento del DOM:');
        console.log(miRef)
    }, [contador1]); // Este solo se ejecuta con el contador 1

    return (
        <div style={{width:"100%"}}>
            <h1>*** Ejemplo de useState, useRef y useEffect</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            <h4 ref={miRef}>Elemento referenciado</h4>
            <div>
                <button onClick={incrementarContador1}>Incrementar Contador 1</button>
                <button onClick={incrementarContador2}>Incrementar Contador 2</button>
            </div>
            <hr></hr>
        </div>
    );
}

export default Componente2;
