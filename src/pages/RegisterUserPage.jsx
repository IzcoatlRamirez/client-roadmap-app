import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Grid, Paper } from "@mui/material";
import Materias from "../components/materias-cursadas";
import SendIcon from "@mui/icons-material/Send";
import Notification from "../components/Notification";
import SvgIcon from "@mui/material/SvgIcon";
import axios from "axios";

import "../estilos/estilo.css";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function RegisterUserPage() {
  const paperStyle = {
    width: "50%",
    margin: "0 auto",
    borderRadius: 20,
    backgroundColor: "aliceblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 20,
    marginBottom: 20,
  };
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [roadmap, setRoadmap] = useState([]);
  const navigate = useNavigate();
  const [materias, setMaterias] = useState([]);
  const [formularioContestado, setFormularioContestado] = useState(false);
  const [numeroSemestres, setNumeroSemestres] = useState(0);

  const api = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000"
  useEffect(() => {
    axios
      .get(api+"/api/materias")
      .then((response) => {
        const materiasOrdenadas = response.data; // Supongamos que la API devuelve las materias en orden
        setMaterias(materiasOrdenadas);
      })
      .catch((error) => {
        console.error("Error al obtener las materias:", error);
      });
  }, [api]);

  const goToMenu = () => {
    navigate("/menu");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSnackbarOpen = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const anadirAlRoadmap = (materiasCursadas) => {
    setRoadmap((prevRoadmap) => {
      const nuevoRoadmap = prevRoadmap.concat(...materiasCursadas);
      return nuevoRoadmap;
    });
  };

  const handleNumeroSemestresChange = (e) => {
    setFormularioContestado(true);
    let inputValue = parseInt(e.target.value, 10); // Convierte el valor a un número entero
    if (inputValue < 0) {
      inputValue = 0;
    } else if (inputValue > 10) {
      inputValue = 10;
    }
    setNumeroSemestres(inputValue);
  };

  const handleGuardarMaterias = async () => {
    const api = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000"
    try {
      const response = await axios.post(api+"/api/materiasRoadmap", {
        materias: roadmap,
      });
      const materias = response.data;
      await handleRegister(materias);
      handleSnackbarOpen();
      scrollToTop();
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async (materias) => {
    const api = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000"
    const user = sessionStorage.getItem("user");
    try {
      const data = await axios.post(api+"/api/setRoadmapUser", {
        materias: materias,
        semestres: numeroSemestres,
        id: user,
      });

      return data.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid>
        <Paper style={paperStyle}>
          <Button
            variant="contained"
            style={{
              marginTop: "20px",
              marginBottom: "10px",
              fontSize: "1rem",
              padding: "1rem 1rem",
            }}
            className="btnstyl"
            onClick={goToMenu}
            startIcon={<HomeIcon />}
          >
            Volver al menú
          </Button>
          <div className="QuestionarioTitulo">
            <h2 className="questionario">Questionario de materias</h2>
            <h4 className="questionario1">
              Selecciona las materias cursadas, por favor
            </h4>
          </div>

          <div className="CuestionarioMateria">
            <Materias
              semestre="1"
              materias={materias
                .filter((materia) => [1, 2, 3, 4, 5, 6].includes(materia.id))
                .map((materia) => materia.namem)}
              anadirAlRoadmap={anadirAlRoadmap}
            />
          </div>
          <div className="CuestionarioMateria">
            <Materias
              semestre="2"
              materias={materias
                .filter((materia) => [7, 8, 9, 10, 11].includes(materia.id))
                .map((materia) => materia.namem)}
              anadirAlRoadmap={anadirAlRoadmap}
            />
          </div>

          <div className="CuestionarioMateria">
            <Materias
              semestre="3"
              materias={materias
                .filter((materia) =>
                  [12, 13, 14, 15, 16, 17].includes(materia.id)
                )
                .map((materia) => materia.namem)}
              anadirAlRoadmap={anadirAlRoadmap}
            />
          </div>
          <div className="CuestionarioMateria">
            <Materias
              semestre="4"
              materias={materias
                .filter((materia) => [18, 19, 20, 21, 22].includes(materia.id))
                .map((materia) => materia.namem)}
              anadirAlRoadmap={anadirAlRoadmap}
            />
          </div>
          <div className="CuestionarioMateria">
            <Materias
              semestre="5"
              materias={materias
                .filter((materia) => [23, 24, 25, 26, 27].includes(materia.id))
                .map((materia) => materia.namem)}
              anadirAlRoadmap={anadirAlRoadmap}
            />
          </div>
          <div className="CuestionarioMateria">
            <Materias
              semestre="6"
              materias={materias
                .filter((materia) => [28, 29, 30].includes(materia.id))
                .map((materia) => materia.namem)}
              anadirAlRoadmap={anadirAlRoadmap}
            />
          </div>
          <div className="CuestionarioMateria">
            <Materias
              semestre="7"
              materias={materias
                .filter((materia) => [31, 32, 33, 34].includes(materia.id))
                .map((materia) => materia.namem)}
              anadirAlRoadmap={anadirAlRoadmap}
            />
          </div>
          <div className="CuestionarioMateria">
            <Materias
              semestre="8"
              materias={materias
                .filter((materia) => [35, 36, 37, 38].includes(materia.id))
                .map((materia) => materia.namem)}
              anadirAlRoadmap={anadirAlRoadmap}
            />
          </div>

          <TextField
            label="Número de Semestres"
            type="number"
            InputProps={{
              inputProps: {
                min: 0,
                max: 10,
              },
            }}
            value={numeroSemestres}
            onChange={handleNumeroSemestresChange}
            style={{ marginTop: "20px", marginBottom: "20px", width: "400px" }}
          />

          <Button
            variant="contained"
            style={{
              marginTop: "10px",
              marginBottom: "20px",
              fontSize: "1rem",
              padding: "1rem 1rem",
            }}
            className="btnstyl"
            endIcon={<SendIcon />}
            onClick={handleGuardarMaterias}
            disabled={!formularioContestado}
          >
            Registrar materias
          </Button>
          <Notification
            open={snackbarOpen}
            handleClose={handleSnackbarClose}
            message="Materias guardadas"
            severity="success"
          />
        </Paper>
      </Grid>
    </>
  );
}

export default RegisterUserPage;
