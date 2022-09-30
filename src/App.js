import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import BgDot from "./components/backgroundComponents/BgDot";

import Box from "@mui/material/Box";

function App() {
  return (
    <div className="bg-container">
      <BgDot />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/details/:id" element={<DetailsPage />}></Route>
        </Routes>
      </Box>
    </div>
  );
}

export default App;
