import React from "react";
import { Link } from "react-router-dom";

import { GitHub } from "@mui/icons-material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Header = ({ text }) => {
  return (
    <Container
      sx={{
        padding: 0.5,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <header className="header">
        <Link to={"/"}>
          <GitHub sx={{ fontSize: 200, color: "#ffffffaf" }} />
        </Link>
      </header>
      <Box
        sx={{
          backgroundColor: "#1a202c",
          padding: 2,
          borderRadius: "10px",
          maxWidth: { md: 700, lg: 1000 },
          textAlign: "center",
          display: { lg: "block", md: "block", sm: "none", xs: "none" },
        }}
      >
        <p>{text}</p>
      </Box>
    </Container>
  );
};

export default Header;
