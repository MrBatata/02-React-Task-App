import React, {useEffect} from 'react';

const Allcycles = () => {

    useEffect(() => {
        console.log('Componente creado')

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Actualización del componente')
        }, 2500);

        return () => {
            console.log('Componente va a desaparecer');
            document.title = "Tiempo detenido";
            clearInterval(intervalID);
        }
    }, []);


    // return (
    //     <div>
        
    //     </div>
    // );
}

export default Allcycles;
