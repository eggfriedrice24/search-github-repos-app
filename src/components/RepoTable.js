import * as React from "react";
import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function RepoTable({ data }) {
  return (
    <Container maxWidth="md" className="table--container">
      <TableContainer component={Paper} sx={{ background: "#1a202c" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ color: "#ffffffaf", fontWeight: "bold", fontSize: 20 }}
              >
                Owner
              </TableCell>
              <TableCell
                sx={{ color: "#ffffffaf", fontWeight: "bold", fontSize: 20 }}
              >
                Full Name
              </TableCell>
              <TableCell
                sx={{ color: "#ffffffaf", fontWeight: "bold", fontSize: 20 }}
              >
                Details
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => {
              return (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ color: "#ffffffaf" }}>
                    {item.full_name}
                  </TableCell>
                  <TableCell sx={{ color: "#ffffffaf" }}>
                    {item.owner.login}
                  </TableCell>
                  <TableCell sx={{ color: "#ffffffaf" }}>
                    <Link to={`/details/${item.id}`}>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ color: "#ff2d75" }}
                      >
                        Details
                        <KeyboardDoubleArrowRightIcon sx={{ fontSize: 20 }} />
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default RepoTable;
