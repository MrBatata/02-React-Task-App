import React, { Component } from 'react'
// import '../../styles / clock.scss';

class Clock extends Component {

    constructor(props) {
        super(props);
        // Estado privado del component
        this.state = {
            // Se genera una fecha como estado inicial del componente
            fecha: new Date(),
            tiempo: 0,
            nombre: 'Martín',
            apellidos: 'San José'
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div className='card text-white bg-success mb-3'>
                <div class="card-header">Login time</div>
                <div className='card-body'>
                    <h3>
                        Hora Actual: {this.state.fecha.toLocaleTimeString()}
                    </h3>
                    <h3>Usuario: {this.state.nombre} {this.state.apellidos}</h3>
                    <h3>Tiempo de logeo: {this.state.tiempo}</h3>
                </div>
            </div>
        )
    }

    tick() {
        this.setState((prevState) => {
            let newTiempo = prevState.tiempo + 1;
            return {
                ...prevState,
                fecha: new Date(),
                tiempo: newTiempo
            }
        });
    }

}

export default Clock;