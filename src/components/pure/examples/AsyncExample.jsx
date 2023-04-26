import React from 'react';

const AsyncExample = () => {

    /*  ASYNC FUNCTIONS  */
    async function generateNumber() {
        return 1;
    };

    /*  If not used keyword "async" in function, 
        it is not possible to uso .then().catch()   */
    function obtainNumber() {
        generateNumber()
            .then(
                (response) => { return alert(`Respuesta: ${response}`) }
            )
            .catch(
                (error) => { return alert(`Ocurrió un error: ${error}`) }
            )
    };

    /*  ASYNC FUNCTIONS WITH PROMISE    */
    async function generatePromiseNumber() {
        return Promise.resolve(2)
    };

    function obtainPromiseNumber() {
        generatePromiseNumber()
            .then(
                (response) => alert(`Respuesta: ${response}`)
            )
    };

    /*  ASYNC FUNCTIONS WITH RESOLVED PROMISE /* 
    /*  Promise is already "fullfilled" /*
    /*  Save in session Storage  */
    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value);
        return Promise.resolve(sessionStorage.getItem(key))
    };

    function showSessionStorage() {
        saveSessionStorage('name', 'Batata')
            .then((response) => {
                let value = response;
                alert(`Nombre guardado: ${value}`)
            })
            .catch((error) => {
                alert(`Ocurrió un error: ${error}`)
            })
            .finally(() => alert(`Nombre guardado y retornado exitósamente.`)
            )
    }

    /*  ASYNC FUNCTIONS WITH PROMISE / AWAIT */
    async function obtainMessage() {
        let promise = new Promise((resolve, reject) => {
            // setTimeout(function, delay, param1, param2, params to pass to funcion as argument)
            // función: resolve(... argument that returns) -> resolve('Hola mundo!')
            setTimeout(resolve, 5000,'Hola mundo!')
            // Same effect...
            // setTimeout(() => { resolve('Hola mundo!') }, 5000)
        }
        );
        let mensaje = await promise; 
        // await pauses in code execution untill Promise is resolved

        alert(`Mensaje recibido: ${mensaje}`)
        console.log(promise)
    }

    /*  Error forcing */
    const returnError = async () => {
        await Promise.reject(new Error('Oopppss!!!'))
    }

    const consumeError = () => {
        returnError()
            .then((resp) => alert(`Todo OK! ${resp}`))
            .catch((err) => alert(`Todo mal: ${err}`))
            .finally(() => alert(`Fin!`))
    }

    /*  TRY & CATCH */
    const urlNotFound = async () => {
        try {
            let response = await fetch('https://invalidURL.com');
            alert(`Response: ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Something went wrong with your URL: ${error} (check your console)`)
        }
    }

    /*  MULTIPLE PROMISE */
    const multiplePromise = async () => {
        let results = await Promise
            .all(
                [
                    fetch('https://reqres.in/api/users'),
                    fetch('https://reqres.in/api/users?page=2')
                ]
            )
            .catch((error) => alert(`Something went wrong with your URLs: ${error} (check your console)`))
    }

    return (
        <div>
            <button onClick={obtainNumber}>Obtener numero</button>
            <button onClick={obtainPromiseNumber}>Obtener numero Promesa</button>
            <button onClick={showSessionStorage} >Guardar y mostrar nombre</button>
            <button onClick={obtainMessage}>Mandar mensaje diferido</button>
            <button onClick={consumeError}>Error</button>
            <button onClick={urlNotFound}>Petición a inexistente URL</button>
            <button onClick={multiplePromise}> Multiple Promises </button>


        </div>
    );
}

export default AsyncExample;
