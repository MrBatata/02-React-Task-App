import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';


const ProfilePage = ({user}) => {
    
    const location = useLocation();
    console.log(`We are in Route ${location.pathname}`);
    const history = useHistory();

    const navigateTo = (path) => {
        history.push(path);
    }

    const goBack = () => {
        history.goBack();
    }

    const goForward = () => {
        history.goForward();
    }

    
    return (
        <div>
            <h1>Tu Perfil</h1>

            <button onClick={()=> {navigateTo('/tasks')}}>Tasks</button>
            <button onClick={()=> {navigateTo('/dashboard')}}>DashBoard</button>
            {/* Opciones con igual resultado: */}
            <button onClick={goBack}>Atrás</button>
            {/* <button onClick={()=> goBack()}>Atrás</button> */}
        </div>
    );
}

export default ProfilePage;
