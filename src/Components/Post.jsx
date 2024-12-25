import React, { useState } from 'react'
import { MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

const Post = ({avatarSrc, imageSrc, title, subHeader, content}) => {
    const [isLiked, setIsLiked] = useState(false);
    const [counter, setCounter] = useState(100)

    const handleLikeToggle = () => {
        setIsLiked((prevState) => {
          const newLikedState = !prevState;
          setCounter((prevCounter) => prevCounter + (newLikedState ? 1 : -1));
          return newLikedState;
        });
      };
  return (
    <Card sx={{margin: 2}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} src={avatarSrc}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={title}
        subheader={subHeader}
      />
      <CardMedia
        component="img"
        height="20%"
        image={imageSrc}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLikeToggle}>
            <Typography variant='body1'>{counter}</Typography>
          <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite color='error'/>} checked={isLiked}/>
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Post
