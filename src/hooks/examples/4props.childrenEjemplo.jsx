
import React from 'react';

const ComponenteChildren = (props) => {
    return (
        <div style={{ width: "100%" }}>
            <h1>*** Ejemplo de prop.children ***</h1>
            <h2>
                Nombre: {props.nombre}
            </h2>

            {/* {props.children} */}
            <hr></hr>
        </div>
    );
}

export default ComponenteChildren;
