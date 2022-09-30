import React from "react";

import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SourceOutlinedIcon from "@mui/icons-material/SourceOutlined";

const RepoCardDetails = ({
  image,
  owner,
  fullName,
  name,
  language,
  sourceCode,
  id,
  description,
}) => {
  return (
    <>
      <Box
        className="card--wrapper"
        sx={{
          width: 800,
          boxShadow: 3,
          p: 1,
          m: 1,
          borderRadius: 2,
        }}
      >
        <Card
          variant="outlined"
          sx={{
            backgroundColor: "#1a202c",
            borderColor: "steelblue",
            display: "flex",
          }}
        >
          <CardHeader
            sx={{
              color: "lightblue",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
            title={owner}
            avatar={
              <img
                style={{ width: 300, height: 250, borderRadius: 10 }}
                src={image}
              />
            }
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ color: "steelblue" }}
            >
              Full Name : {fullName}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ color: "steelblue" }}
            >
              Language : {language}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ color: "steelblue" }}
            >
              Description: {description}
            </Typography>
            <CardActions>
              <a href={sourceCode}>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ color: "#ff2d75" }}
                >
                  Source Code
                  <SourceOutlinedIcon sx={{ fontSize: 15, marginLeft: 1 }} />
                </Button>
              </a>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default RepoCardDetails;
