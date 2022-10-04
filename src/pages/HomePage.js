import React, { useState } from "react";

import { useFetchAll } from "../hooks/useFetchAll";
import RepoCard from "../components/RepoCard";
import RepoTable from "../components/RepoTable";
import HomePagination from "../components/HomePagination";
import Search from "../components/Search";
import Header from "../components/Header";

import { Stack } from "@mui/material";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const HomePage = () => {
  const { searchItem, handleChange, listToDisplay } =
    useFetchAll();

  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 6;

  // pagination logic
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = listToDisplay.slice(indexOfFirstRepo, indexOfLastRepo);

  const [preferCard, setPreferCard] = useState(true);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Header text="Find Github repos in an instant, just type in a string and get all the matches for it" />
      <Container maxWidth="sm">
        <Stack spacing={2}>
          <Search searchItem={searchItem} handleChange={handleChange} />
        </Stack>
      </Container>
      <Container
        sx={{
          padding: 5,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {listToDisplay.length > 0 && (
          <FormControlLabel
            className="toggle"
            size="medium"
            sx={{ color: "white" }}
            value="top"
            checked={preferCard}
            onChange={(e) => setPreferCard(!preferCard)}
            control={<Switch color="secondary" />}
            label="Click to toggle Card"
            labelPlacement="top"
          />
        )}
        {preferCard ? (
          <Grid
            container={true}
            justifyContent={"center"}
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          >
            {currentRepos.map((repo) => {
              return (
                <Grid key={repo.id}>
                  <RepoCard
                    name={repo.name}
                    description={repo.description}
                    repoOwner={repo.owner.login}
                    avatar={repo.owner.avatar_url}
                    id={repo.id}
                    query={searchItem}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <RepoTable data={currentRepos} />
        )}
        {listToDisplay.length > 0 && (
          <HomePagination
            totalRepos={listToDisplay.length}
            reposPerPage={reposPerPage}
            handlePageChange={handlePageChange}
          />
        )}
      </Container>
    </>
  );
};

export default HomePage;
