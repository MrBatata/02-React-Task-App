import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import { options } from '../../models/clock.model';



function ClockF(props) {

    const estadoInicial = {
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        tiempo: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    }

    const [nuevoEstado, setearNuevoEstado] = useState(estadoInicial);

    useEffect(() => {
        const intervalID = setInterval(() => {
            tick()
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, []);

    const tick = () => {
        setearNuevoEstado((estadoPrevio) => {
            let nuevoTiempo = estadoPrevio.tiempo + 1;
            return {
                // nuevo estado tiene que ser tambien objeto
                ...estadoPrevio,
                fecha: new Date(),
                tiempo: nuevoTiempo,
            }
        })
    }

    const clear = () => {
        setearNuevoEstado(estadoInicial)
    }

    return (
        <div className='card text-white bg-success mb-3'>
            <div className="card-header">
                <h4>Login time</h4>
            </div>
            <div className='card-body'>
                <h5>
                    Hora Actual: {nuevoEstado.fecha.toLocaleTimeString('es-AR', options)}
                </h5>
                <h5>Usuario: {nuevoEstado.nombre} {nuevoEstado.apellidos}</h5>
                <h5>Tick de logeo: {nuevoEstado.tiempo}</h5>
                <div className='container'>
                    <button className='btn btn-dark m-3' onClick={tick}>Update</button>
                    <button className='btn btn-dark m-3' onClick={clear}>Restart</button>
                </div>
            </div>
        </div>
    )
}

// ClockF.propTypes = {

// }

export default ClockF

