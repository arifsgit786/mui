import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import {
    Add as AddIcon,
    DateRange,
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack,
  } from "@mui/icons-material";
  import {Box} from '@mui/system'

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})
const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px'
})

const Add = () => {
    const [openModal, setOpenModal] = useState(false)
  return (
    <>
        <Tooltip
        onClick={(e) => setOpenModal(true)} title="Add Post" sx={{ position: 'fixed', bottom: 20, left: {xs: "calc(50% - 25px)", md: 30}}}>
            <Fab color='primary' aria-label='add'>
                <AddIcon/>
            </Fab>
        </Tooltip>
        <StyledModal open={openModal} onClose={(e) => setOpenModal(false)} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
            <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                <Typography variant='h6' color='gray' textAlign="center">
                    Create Post
                </Typography>
                <UserBox>
                    <Avatar src='https://images.pexels.com/photos/29702116/pexels-photo-29702116/free-photo-of-black-and-white-romantic-couple-kissing-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' sx={{width:30, height: 30}}>
                        <Typography fontWeight={500} variant='span'>
                            John smith
                        </Typography>
                    </Avatar>
                </UserBox>
                <TextField sx={{width: '100%'}} multiline rows={3} placeholder="What's on your mind?" variant='standard' id="standard-multiline-static"/>
                <Stack direction='row' gap={1} mt={2} mb={3}>
                    <EmojiEmotions color='primary'/>
                    <Image color='secondary'/>
                    <VideoCameraBack color='success'/>
                    <PersonAdd color='error'/>
                </Stack>
                <ButtonGroup fullWidth variant='contained' aria-label='outlined primary button group'>
                    <Button>Post</Button>
                    <Button sx={{ width: "100px"}}>
                        <DateRange/>
                    </Button>
                </ButtonGroup>
            </Box>
        </StyledModal>

    </>
  )
}

export default Add
