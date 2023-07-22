import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import "./table.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#00c853",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#bbdefb",
  },
  // hide last border
  "&:last-child(even) td, &:last-child(even) th": {
    border: 0,
    color: "#00c853",
  },
}));

function createData(bookName, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

let book = [
  createData("bookName", "Author", 6.0, 24, 4.0),
  createData("bookName", "Author", 9.0, 37, 4.3),
  createData("bookName", "Author", 16.0, 24, 6.0),
  createData("bookName", "Author", 3.7, 67, 4.3),
  createData("bookName", "Author", 16.0, 49, 3.9),
];

export default function CustomizedTables(second) {
  const [books, SetBooks] = useState([]);
  const getTableDatas = useCallback(async () => {
    const dataBooksGetModel = [];
    try {
      const response = await fetch(
        "https://books-a63a6-default-rtdb.firebaseio.com/Books.json"
      );
      if (!response.ok) {
        throw new Error("There is error!");
      }

      const table = await response.json();

      for (const key in table) {
        dataBooksGetModel.push({
          key: key,
          bookName: table[key].bookName,
          author: table[key].author,
          count: table[key].count,
          price: table[key].price,
          title: table[key].title,
        });
      }
    } catch (error) {
      alert(error.message);
    }

    SetBooks(dataBooksGetModel);
  }, []);
  useEffect(() => {
    getTableDatas();
  }, [getTableDatas]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell> Book Name</StyledTableCell>
            <StyledTableCell align="right">Author</StyledTableCell>
            <StyledTableCell align="right">count&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">price&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">title&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <StyledTableRow key={book.key}>
              <StyledTableCell component="th" scope="row">
                {book.bookName}
              </StyledTableCell>
              <StyledTableCell align="right">{book.author}</StyledTableCell>
              <StyledTableCell align="right">{book.count}</StyledTableCell>
              <StyledTableCell align="right">{book.price}</StyledTableCell>
              <StyledTableCell align="right">{book.title}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
