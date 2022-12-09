import { Avatar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import React, { useState } from 'react'

const AccountDrawer = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <div style={{ color: 'white', position: 'fixed', zIndex: '100', marginTop: '25px', marginLeft: '25px', display: 'flex', flexDirection: 'column' }}>
            <IconButton
                color='inherit'
                edge='start'
                onClick={() => {
                    setIsDrawerOpen(true)
                }}
                sx={{
                    backgroundColor: "black",
                }}>
                <MenuIcon></MenuIcon>
            </IconButton>

            <Drawer
                anchor='top'
                open={isDrawerOpen}
                transitionDuration={
                    {enter: 1000,
                    exit: 600,}
                }
                PaperProps={{
                    sx: { height: "50%" },
                }}
                onClose={() => {
                    setIsDrawerOpen(false)
                }}>
                <Typography>
                    KT Bekang Dashboard
                </Typography>
                <Divider></Divider>
                <Avatar></Avatar>
                <Typography>mwr_dev</Typography>
                <Divider></Divider>
                <List>
                    {['Logout'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    )
}

export default AccountDrawer