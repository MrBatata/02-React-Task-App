import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // Intro a useState
    // const [variable, método para actualizar] = useState(valor inicial)
    const [age, setAge] = useState(29)

    const birthday = () => {
        // actualizando 
        setAge(age + 1)
    }

    return (
        <div>
            <h1>¡{props.name} te da la bienvenida Funcional!</h1>
            <h2>Tenes {age} años.</h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};

GreetingF.propTypes = {
    name: PropTypes.string,
};


export default GreetingF;
