import React, { useState } from 'react'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from '@mui/icons-material';


const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})
const SearchBar = styled('div')(({theme}) => ({
  backgroundColor: 'white',
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))
const Icons = styled(Box)(({theme}) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}))
const UserBox = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}))

const NavBar = () => {
  const [ openMenu, setOpenMenu]= useState(false)
  return (
      <AppBar position='sticky'>
        <StyledToolBar>
          <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block'}}}>Dev</Typography>
          <DeviceHubIcon sx={{ display: { xs: 'block', sm: 'none'}}}/>
          <SearchBar sx={{bgcolor:'background.default', color: 'text.primary'}}>
            <InputBase placeholder='search....'/>
          </SearchBar>
          <Icons>
            <Badge badgeContent={4} color='error'>
              <MailIcon/>
            </Badge>
            <Badge badgeContent={2} color='error'>
              <Notifications/>
            </Badge>
            <Badge color='error'>
              <Avatar sx={{ width: 30, height:30}} onClick={(e) => setOpenMenu(true)}/>  
            </Badge>
          </Icons>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30}} onClick={(e) => setOpenMenu(true)}/>
            <Typography>Helen</Typography>
          </UserBox>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={openMenu}
            onClose={e => setOpenMenu(false)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
        </StyledToolBar>  
      </AppBar>  
  )
} 

export default NavBar
