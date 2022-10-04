import React from "react";

import { Link, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";


const RepoCard = ({ name, description, repoOwner, repoPage, id, avatar, query }) => {

  const navigate = useNavigate();

  const redirectHandler = () => {
    navigate(`details/${id}?search=${query}`);
  }

  return (
    <Box
      className="card--wrapper"
      sx={{
        maxWidth: 500,
        minWidth: 300,
        boxShadow: 3,
        p: 1,
        m: 1,
        borderRadius: 2,
      }}
    >
      <Card
        variant="outlined"
        sx={{ backgroundColor: "#1a202c", borderColor: "steelblue" }}
      >
        <CardHeader
          sx={{ color: "lightblue" }}
          title={repoOwner}
          avatar={<Avatar src={avatar}></Avatar>}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ color: "steelblue" }}
          >
            {name}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Link to={`/details/${id}`}> */}
            <Button onClick={redirectHandler} variant="outlined" size="small" sx={{ color: "#ff2d75" }}>
              Details
              <KeyboardDoubleArrowRightIcon sx={{ fontSize: 20 }} />
            </Button>
          {/* </Link> */}
        </CardActions>
      </Card>
    </Box>
  );
};

export default RepoCard;
