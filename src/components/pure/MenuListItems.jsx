import React from 'react'
// import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Home, Settings } from '@mui/icons-material'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import AssignmentIcon from '@mui/icons-material/Assignment'

/*
*   Function to get icon
*/
function getIcon (icon) {
    switch (icon) {
        case 'HOME':
            return (<Home></Home>)
        case 'TASKS':
            return (<AssignmentIcon></AssignmentIcon>)
        case 'SETTINGS':
            return (<Settings></Settings>)
        default:
            return (<Home></Home>)
    }
};

/*
*   Main Menú - Functional component w/ MUI Materials & Icons
*/
const MenuListItems = ({ list }) => {
    const history = useHistory()

    const navigateTo = (path) => {
        history.push(path)
    }

    // const [selectedIndex, setSelectedIndex] = useState(1)

    // const handleListItemClick = (index) => {
    //     setSelectedIndex(index)
    // }

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="main mailbox folders">
                {list.map(({ text, path, icon }, index) =>
                (
                    <ListItemButton
                        key={index}
                        selected={true}
                        onClick={() => {
                            navigateTo(path)
                            // handleListItemClick(index)
                        }}>

                        <ListItemIcon>
                            {getIcon(icon)}
                        </ListItemIcon>

                        <ListItemText
                            primary={text}
                        />
                    </ListItemButton>
                )
                )}
            </List>
        </Box>

    )
}

export default MenuListItems
