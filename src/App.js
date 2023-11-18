import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

import SignInOutContainer from "./containers";
import PageUser from "./pages/pageUser";
import RoadmapUserPage from "./pages/RoadmapUserPage";
import RegisterUserPage from "./pages/RegisterUserPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInOutContainer />}></Route>
          <Route path="/menu" element={<PageUser />}></Route>
          <Route path="/roadmap" element={<RoadmapUserPage/>}></Route>
          <Route path="/register" element={<RegisterUserPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
