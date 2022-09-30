import React from "react";

import Pagination from "@mui/material/Pagination";

const HomePagination = ({ reposPerPage, totalRepos, handlePageChange }) => {
  return (
    <Pagination
      count={Math.ceil(totalRepos / reposPerPage)}
      color="secondary"
      variant="outlined"
      onChange={handlePageChange}
      size="large"
    />
  );
};

export default HomePagination;
