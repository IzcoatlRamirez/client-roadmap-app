import { useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Dialog, DialogContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import DetallesMateria from "./DetallesMateria";
import axios from 'axios'
import {pink } from "@mui/material/colors";

function Materia({ nombre, codigo, creditos }) {
  const [profesores, setProfesores] = useState([]);
  const [open, setOpen] = useState(false);


  const handleOpen = async() => {
    try {
      const api = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000"
      const response = await axios.post(api+"/api/getRecomendaciones",
        {
          nameMateria: nombre,
        }
      );

      const data = response.data;
      setProfesores(data);
    } catch (e) {
      console.log(e);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 300,
        minWidth: 300,
        bgcolor: "background.paper",
        borderRadius: 3,
      }}
    >
      <Box sx={{ my: 1, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h8" component="div">
              {nombre}
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
          {codigo} | CR {creditos}
        </Typography>
      </Box>
      {/* <Divider variant="middle" /> */}
      <Box sx={{ mt: 1, ml: 1 }}>
        <Button sx={{ color: pink["A400"] }} onClick={handleOpen}>
          <Typography variant="h8">...</Typography>
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DetallesMateria
            profesores={profesores}
            nombre={nombre}
          ></DetallesMateria>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
export default Materia;
