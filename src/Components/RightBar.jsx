import React from 'react'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

const RightBar = () => {
  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }} flex={2} p={2}>
      <Box position='fixed'>
        <Typography variant='h6' fontWeight={300}>
          Online Friends
        </Typography>
        <AvatarGroup max={7} sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <Avatar src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
          <Avatar src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <Avatar src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <Avatar src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
          <Avatar src="https://images.pexels.com/photos/29912380/pexels-photo-29912380/free-photo-of-portrait-of-a-woman-in-winter-clothing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=800" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src='https://images.pexels.com/photos/2116721/pexels-photo-2116721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.pexels.com/photos/15661903/pexels-photo-15661903/free-photo-of-majestic-buildings-and-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.pexels.com/photos/8145352/pexels-photo-8145352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2}>
          Latest Converations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='sharp' src='https://images.pexels.com/photos/19650796/pexels-photo-19650796/free-photo-of-smiling-woman-shooting-confetti-cannon-sitting-in-the-living-room-by-the-christmas-tree.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' />
            </ListItemAvatar>
            <ListItemText primary="Happy Christmas" secondary={
              <React.Fragment>
                <Typography variant='body2' sx={{ display: 'inline' }} component='span' color="text.primary">
                  Steve Julie
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            } />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='sharp' src='https://images.pexels.com/photos/5370666/pexels-photo-5370666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
            </ListItemAvatar>
            <ListItemText primary="Summer Time" secondary={
              <React.Fragment>
                <Typography variant='body2' sx={{ display: 'inline' }} component='span' color="text.primary">
                  to Scott, Alex, Jennifer
                </Typography>
                {" — I wish I could be there…"}
              </React.Fragment>
            } />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/28186188/pexels-photo-28186188/free-photo-of-a-woman-with-an-umbrella-standing-on-the-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>

    </Box>
  )
}

export default RightBar
