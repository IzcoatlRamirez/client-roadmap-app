import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Rating from "./Rating";
import { Typography } from "@mui/material";

function DetallesMateria({ profesores, nombre }) {
  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <Typography sx={{color:'black', letterSpacing:2,ml:2}} variant="h5">{nombre}</Typography>
        {profesores.map((profesor, index) => (
          <div key={index}>
            <Typography sx={{mb:1}}>{profesor.profesor}</Typography>
            <Rating></Rating>
            <Divider variant="fullWidth" component="li" />
          </div>
        ))}
      </List>
    </>
  );
}

export default DetallesMateria;

