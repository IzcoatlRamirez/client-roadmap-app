
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/material';
import { yellow } from '@mui/material/colors';

function Rating() {
  return (
    <Box sx={{display:'flex',flexDirection:'row'}} >
        <StarIcon sx={{color:yellow['700']}}></StarIcon>
        <StarIcon sx={{color:yellow['700']}}></StarIcon>
        <StarIcon sx={{color:yellow['700']}}></StarIcon>
        <StarIcon sx={{color:yellow['700']}}></StarIcon>
        <StarIcon sx={{color:yellow['700']}}></StarIcon>
    </Box>
  )
}

export default Rating