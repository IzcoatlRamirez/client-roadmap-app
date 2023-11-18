import React from 'react'
import Semestre from './Semestre';
import { Typography,Box } from '@mui/material';
import { blue} from '@mui/material/colors';

function Roadmap({ roadmap }) {
    return (
      <div>
        {roadmap.map((semestre, index) => (
          <div key={index}>
            <Box sx={{display:'flex',flexDirection:'row'}}>
            <div style={{backgroundColor:'#1976d2', minWidth:175,maxWidth:175,marginTop:10}}></div>
            <Typography sx={{mt:2}}variant='h6' color={'white'}></Typography>
            </Box>
            <Box sx={{ml:7}}>
                <Semestre materias={semestre} />
            </Box>
          </div>
        ))}
      </div>
    );
  }

export default Roadmap