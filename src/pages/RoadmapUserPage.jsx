import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MapIcon from "@mui/icons-material/Map";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import Roadmap from "../components/Roadmap";
import TopBar from "../components/TopBar";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import { pink } from "@mui/material/colors";

function RoadmapUserPage() {
  const [roadmap, setRoadmap] = useState([]);
  const navigate = useNavigate();
  const api = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000"

  const goToMenu = () => {
    navigate("/menu");
  };

  useEffect(() => {
    const fetchData = async () => {
      const user = sessionStorage.getItem("user");
      try {
        const response = await axios.post(api+"/api/roadmap", {
          userId: user,
        });

        const data = response.data;
        setRoadmap(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [api]);

  return (
    <>
      <TopBar></TopBar>
      <div style={{ position: "fixed", left: 0, top: 75 }}>
        <Button sx={{ color: pink["A400"] }} onClick={goToMenu}>
          <FirstPageIcon></FirstPageIcon> Regresar
        </Button>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ ml: 30, mt: 15 }}>
          <Roadmap roadmap={roadmap}></Roadmap>
        </Box>

        <Box sx={{ color: "white", ml: 30, mt: 15, maxWidth: 600 }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <MapIcon sx={{ fontSize: 56 }}></MapIcon>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bolder",
                textAlign: "center",
                mt: 1.5,
                letterSpacing: 5,
              }}
            >
              roadmap
            </Typography>
          </div>
          <div>
            <Typography variant="h1" sx={{ fontWeight: "bolder" }}>
              La mejor ruta escolar
            </Typography>
            <Typography sx={{ mt: 5, letterSpacing: 2 }} variant="h6">
              Para editar tu roadmap , asegurate de mantener actualizado tu
              registro de materias faltantes por cursar.
            </Typography>
          </div>
        </Box>
      </div>
    </>
  );
}

export default RoadmapUserPage;
