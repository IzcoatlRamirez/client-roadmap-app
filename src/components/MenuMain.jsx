import { Box, Button} from "@mui/material";
import {useNavigate} from 'react-router-dom'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import AddRoadRoundedIcon from '@mui/icons-material/AddRoadRounded';
import { pink } from '@mui/material/colors';


function MenuMain() {
  
  const navigate = useNavigate();

  const goToRoadmap= ()=>{
    navigate('/roadmap')
  }
  const goToRegister= ()=>{
    navigate('/register')
  }

  const exit = ()=>{
    sessionStorage.removeItem('user');
    navigate('/')
  }

  return (
    <div style={{ color: "white",marginLeft:350,marginTop:250 ,display:"flex", flexDirection:'row', gap: 5}}>
      <Box sx={{ backgroundColor: "white", maxWidth: 300,minWidth:300, borderRadius: 3, display:'flex',flexDirection:'column' }}>
        <Button sx={{color:pink[400]}} onClick={goToRegister}>
          <AddRoadRoundedIcon sx={{ fontSize: 120 }}></AddRoadRoundedIcon>
          Registrar materias
        </Button>
      </Box>
      <Box sx={{ backgroundColor: "white", maxWidth: 300, minWidth:300,borderRadius: 3 }}>
        <Button sx={{color:pink[400]}} onClick={goToRoadmap}>
          <AltRouteIcon sx={{ fontSize: 120 }}></AltRouteIcon>
          Visualizar Roadmap
        </Button>
      </Box>
      <Box sx={{ backgroundColor: "white", maxWidth: 300,minWidth:300, borderRadius: 3 }}>
        <Button sx={{color:pink[400]}} onClick={exit}>
          <ExitToAppIcon sx={{fontSize:120}}></ExitToAppIcon>
          Cerrar sesion         
        </Button>
      </Box>
    </div>
  );
}

export default MenuMain;
