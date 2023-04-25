import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';


const HomePage = () => {

    const location = useLocation();
    console.log(`We are in Route ${location.pathname}`);
    
    const history = useHistory();

    const navigateTo = (path) => {
        history.push(path);
    }

    const navigateProps = (path) => {
        history.push({
            pathname: path,
            search: '?online=true', // Query Params 
            state: {
                online: true
            }
        })
    }

    const goBack = () => {
        history.goBack();
    }

    const goForward = () => {
        history.goForward();
    }

    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <button onClick={() => { navigateTo('/login') }}>
                    Ingresar
                </button>
                <button onClick={() => { navigateProps('/online-state') }}>
                    Ir a State
                </button>
            </div>
        </div>
    );
}

export default HomePage;
