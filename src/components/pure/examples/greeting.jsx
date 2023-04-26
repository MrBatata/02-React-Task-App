import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {
    
    // myAge= 32;
    
    constructor(props) {
        super(props);
        this.state = {
            // age: this.myAge,
            age: 32,
        };
    }

    render() {
        return (
            <div>
                <h1>¡{this.props.name} te da la bienvenida!</h1>
                <h2>Tenes {this.state.age} años.</h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
        ))
    }
}

// Es imprescindible el propTypes en React ya que es necesario especificar qué tipo de dato es cada prop
Greeting.propTypes = {
    name: PropTypes.string,
};

export default Greeting;
