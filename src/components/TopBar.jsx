import { useState,useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios'

function TopBar() {

    const [anchorEl, setAnchorEl] = useState(null);
    const [nameUser, setNameUser] = useState("");
    const [cr,setCr] = useState("");
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    // const {user} = useAuth();
    const api = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000"
  
    useEffect(() => {
      const fetchData = async () => {
        const user = sessionStorage.getItem('user');
        try {
          const response = await axios.post(api+"/api/user", {
            id: user
          });
  
          const data = response.data;
          setNameUser(data[0].email);
          setCr(data[0].creditosact)
        } catch (e) {
          console.log(e);
        }
      };
  
      fetchData();
    }, []); 
  return (
    <AppBar sx={{position:'fixed',top:0,left:0}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* Personaliza el ícono del menú aquí */}
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bienvenido <Typography component="span">{nameUser}</Typography>
          </Typography>
          <Typography variant="h6" component="span">Creditos actuales:{cr}/274</Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Perfil</MenuItem>
              <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
  )
}

export default TopBar