import React from "react";

import { TextField } from "@mui/material";

const Search = ({ searchItem, handleChange }) => {
  return (
    <TextField
      className="input"
      id="outlined-basic"
      label="Repo Search"
      variant="outlined"
      placeholder="you name it.."
      value={searchItem}
      onChange={handleChange}
      focused
    />
  );
};

export default Search;
