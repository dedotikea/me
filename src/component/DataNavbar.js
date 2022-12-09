import { AppBar, Box, IconButton, SwipeableDrawer, Toolbar, Drawer, Divider, Skeleton, Select, MenuItem, } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TimelineIcon from '@mui/icons-material/Timeline';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Global } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import React, { useState } from 'react'

const DataNavbar = () => {

  // const drawerBleeding = 5;
  const menus = ["satuan", "informasi", "data sensor", "settings"]
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState('')

  const toggleDrawer = (newOpen, menu) => () => {
    if (newOpen === true) {
      setOpen(newOpen)
      setMenu(menu)
    } else {
      setOpen(newOpen)
    }
  }

  const RenderMenu = (props) => {
    let menuToRender = props.menu;
    const [satuanValue, setSatuanValue] = useState('Satuan')
    const handleChange = (event) => {
      setSatuanValue(event.target.value);
    };
    switch (menuToRender) {
      case "satuan":
        return (
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
              <p>satuan: </p>
              <Select
                label="satuan"
                value={satuanValue}
                onChange={handleChange}
              >
                <MenuItem value="test 1">test 1</MenuItem>
                <MenuItem value="test 2">test 2</MenuItem>
                <MenuItem value="test 3">test 3</MenuItem>
              </Select>
            </div>
            <Select
              label="satuan"
              value={satuanValue}
              onChange={handleChange}
            >
              <MenuItem value="test 1">test 1</MenuItem>
              <MenuItem value="test 2">test 2</MenuItem>
              <MenuItem value="test 3">test 3</MenuItem>
            </Select>
            <Select
              label="satuan"
              value={satuanValue}
              onChange={handleChange}
            >
              <MenuItem value="test 1">test 1</MenuItem>
              <MenuItem value="test 2">test 2</MenuItem>
              <MenuItem value="test 3">test 3</MenuItem>
            </Select>
            <Select
              label="satuan"
              value={satuanValue}
              onChange={handleChange}
            >
              <MenuItem value="test 1">test 1</MenuItem>
              <MenuItem value="test 2">test 2</MenuItem>
              <MenuItem value="test 3">test 3</MenuItem>
            </Select>
          </div>
        )
      case "informasi":
        return (
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
            <p>{props.menu}</p>
          </div>
        )
      case "data sensor":
        return (
          <>
            <p>{props.menu}</p>
          </>
        )
      case "settings":
        return (
          <>
            <p>{props.menu}</p>
          </>
        )
      default:
        break;
    }

  }

  const nextMenu = (menu) => {
    let index = menus.indexOf(menu)
    if (index == (menus.length - 1)) {
      return setMenu(menus[0])
    } else {
      return setMenu(menus[index + 1])
    }
  }

  const prevMenu = (menu) => {
    let index = menus.indexOf(menu)
    if (index == 0) {
      return setMenu(menus[menus.length - 1])
    } else {
      return setMenu(menus[index - 1])
    }
  }


  // const Root = styled('div')(({ theme }) => ({
  //   height: '100%',
  //   backgroundColor:
  //     theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
  // }));

  // const StyledBox = styled(Box)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
  // }));

  // const Puller = styled(Box)(({ theme }) => ({
  //   width: 30,
  //   height: 6,
  //   backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  //   borderRadius: 3,
  //   position: 'absolute',
  //   top: 8,
  //   left: 'calc(50% - 15px)',
  // }));

  return (
    <div style={{ color: "white" }}>

      <AppBar position="absolute" color="inherit" sx={{ top: 'auto', bottom: 0, zIndex: "100" }}>
        <Toolbar sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
          <IconButton onClick={toggleDrawer(true, "satuan")} sx={{ display: "flex", flexDirection: "column", fontSize: "5vw" }}>
            <LocalShippingIcon></LocalShippingIcon>
            satuan
          </IconButton>
          <IconButton onClick={toggleDrawer(true, "informasi")} sx={{ display: "flex", flexDirection: "column", fontSize: "5vw" }}>
            <ArticleIcon></ArticleIcon>
            informasi
          </IconButton>
          <IconButton onClick={toggleDrawer(true, "data sensor")} sx={{ display: "flex", flexDirection: "column", fontSize: "5vw" }}>
            <TimelineIcon></TimelineIcon>
            data sensor
          </IconButton>
          <IconButton onClick={toggleDrawer(true, "setting")} sx={{ display: "flex", flexDirection: "column", fontSize: "5vw" }}>
            <SettingsIcon></SettingsIcon>
            settings
          </IconButton>
        </Toolbar>
      </AppBar>



      <Drawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false, "")}
        transitionDuration={600}
        PaperProps={{
          sx: { height: "50%" },
        }}
      // swipeAreaWidth={drawerBleeding}
      // disableSwipeToOpen={false}
      // ModalProps={{
      //   keepMounted: true,
      // }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          {/* Pake arrow function biar ga error  */}
          <IconButton onClick={() => { prevMenu(menu) }}>
            <ChevronLeftIcon></ChevronLeftIcon>
          </IconButton>
          <Typography>
            {menu}
          </Typography>
          <IconButton onClick={() => { nextMenu(menu) }}>
            <ChevronRightIcon></ChevronRightIcon>
          </IconButton>
        </Box>
        <Divider></Divider>
        <RenderMenu menu={menu}></RenderMenu>
        {/* <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography>
            Data x sesuai menunya
          </Typography>
          <Skeleton
            variant="rectangular"
            width={50}
            height={50}>

          </Skeleton>
        </Box> */}

        {/* <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        > */}
        {/* <Puller /> */}
        {/* <Typography sx={{ p: 2 }}>
            state_dari_menu
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
        </StyledBox> */}
      </Drawer>
    </div>
  )
}

export default DataNavbar