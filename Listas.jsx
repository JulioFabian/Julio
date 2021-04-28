import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core'
import EventNoteIcon from '@material-ui/icons/EventNote';
import HomeIcon from '@material-ui/icons/Home';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const Listas = () => {
    return (
        <div>
            <List components='nav'>
            <ListItem button>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary='INICIO'/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <AllInboxIcon />
                    </ListItemIcon>
                    <ListItemText primary='INVENTARIO'/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <AssignmentIndIcon />
                    </ListItemIcon>
                    <ListItemText primary='CLIENTES'/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <EventNoteIcon />
                    </ListItemIcon>
                    <ListItemText primary='PROVEEDORES'/>
                </ListItem>

                <Divider />

            </List>
        </div>
    )
}

export default Listas;