/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo función y acceder a su estado
 * privado a través de un hook y, además, poder modificarlo
 */

import React from 'react';
import { useState } from 'react';

const Componente1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre: 'Mr. Batata',
        email: 'batata@hotmail.com'
    }

    // Queremos que valorInicial y personaInicial sean parte del estado del componente
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    // Función para actualizar el estado privado que contiene el contador y persona
    const incrementarContador = () => {
        setContador(contador + 1)
    }

    const actualizarPersona = () => {
        setPersona(
            {
                nombre: 'Mr. Batatin',
                email: 'batatin@hotmail.com'
            }
        )
    }

    const resetContadorPersona = () => {
        setContador(valorInicial);
        setPersona(personaInicial)
    }


    return (
        <div style={{width:"100%"}}>
            <h1>*** Ejemplo de useState ***</h1>
            <h2>Contador = {contador}</h2>
            <h2>Persona</h2>
            <h3>Nombre Persona = {persona.nombre}</h3>
            <h3>Correo Persona = {persona.email}</h3>
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona y Correo</button>
            <button onClick={resetContadorPersona}>Reset</button>
            <hr></hr>
        </div>
    );
}

export default Componente1;
