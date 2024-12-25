
import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

const postData = [
  {
    avatarSrc: 'https://images.pexels.com/photos/5723941/pexels-photo-5723941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageSrc: 'https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=800./Icons/pexels-prolificpeople-29734216.jpg',
    title: 'Shrimp and Chorizo Paella',
    subHeader: 'September 14, 2016',
    content: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
  },
  {
    avatarSrc: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageSrc: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Grilled Steak with Chimichurri Sauce',
    subHeader: 'August 20, 2021',
    content: 'Grilled steak with a flavorful chimichurri sauce is perfect for summer barbecues. Pair it with your favorite sides for a complete meal.',
  },
  {
    avatarSrc: 'https://images.pexels.com/photos/987654/pexels-photo-987654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageSrc: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Delicious Vegan Salad',
    subHeader: 'June 10, 2022',
    content: 'This refreshing vegan salad features a mix of fresh greens, crunchy vegetables, and a tangy dressing that is perfect for any occasion.',
  },
];



const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {postData.map((post, index) => (
        <Post key={index} imageSrc={post.imageSrc} avatarSrc={post.avatarSrc} content={post.content} title={post.title} subHeader={post.subHeader}/>
      ))}
    </Box>
  )
}

export default Feed
