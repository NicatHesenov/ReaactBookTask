import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Table from "./components/BookBoolean/table";
import LoadBook from "./components/BookBoolean/LoadBook";
import { Box, Card } from "@mui/material";

function App() {
  return (
    <>
      <Box
        sx={{
          minWidth: 215,
          display: "flex",
          direction: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "13px",
        }}
        flexDirection={"row"}
      >
        <Card
          sx={{
            minWidth: 215,
            width: 600,
            justifyContent: "center",
            alignItems: "center",
            padding: 13,
            margin: "10px",
          }}
        >
          <LoadBook></LoadBook>
        </Card>
        <Table></Table>
      </Box>
    </>
  );
}

export default App;
