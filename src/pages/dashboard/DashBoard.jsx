import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';
import Copyright from '../../components/pure/Copyright';
import MenuListItems from '../../components/pure/MenuListItems';

const DashboardPage = () => {

    const history = useHistory();

    const logout = () => {
        history.push('/login');
    }

    const myList = [
        { text: "Perfil", path: "/profile", icon: "HOME" },
        { text: "Tareas", path: "/tasks", icon: "TASKS" },
        { text: "Configuración", path: "/settings", icon: "SETTINGS" },
    ];

    return (
        <div>
            <h1>DashBoard</h1>
            <MenuListItems list={myList} ></MenuListItems>
            <Button variant="contained" onClick={logout}>Desconectarse</Button>
            <Copyright></Copyright>
        </div>
    );
}

export default DashboardPage;
