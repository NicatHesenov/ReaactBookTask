import { Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Load.css";

function LoadBook() {
  const [enteredbookName, setBookName] = useState("");
  const [enteredAuthor, setAuthor] = useState("");
  const [enteredCount, setCount] = useState(0);
  const [enteredPrice, setPrice] = useState(0);
  const [enteredTitle, setTitle] = useState("");
  const [bookModel, setBookModel] = useState({});

  useEffect(() => {
    const addBookDataToApi = async (bookModeL) => {
      const response = await fetch(
        " https://books-a63a6-default-rtdb.firebaseio.com/Books.json",
        {
          method: "POST",
          body: JSON.stringify(bookModeL),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      const data = response.json();
      data.then((x) => console.log(x));
    };
    addBookDataToApi(bookModel);
  }, [bookModel]);

  const bookNameHandler = (e) => {
    setBookName(e.target.value);
  };

  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const countHandler = (e) => {
    setCount(e.target.value);
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const loadBook = (e) => {
    e.preventDefault();

    const bookAddedModeL = {
      bookName: enteredbookName,
      author: enteredAuthor,
      count: enteredCount,
      price: enteredPrice,
      title: enteredTitle,
    };
    setBookModel(bookAddedModeL);
    console.log(bookAddedModeL);
  };
  return (
    <form onSubmit={loadBook}>
      <Stack
        alignContent={"left"}
        justifyContent={"left"}
        spacing={2}
        direction={"column"}
      >
        <TextField
          label="BookName"
          type="text"
          variant="standard"
          onChange={bookNameHandler}
        />
        <TextField
          label="Author"
          type="text"
          variant="standard"
          onChange={authorHandler}
        />
        <TextField
          label="Count"
          type="number"
          variant="standard"
          onChange={countHandler}
        />
        <TextField
          label="Price"
          type="number"
          variant="standard"
          onChange={priceHandler}
        />
        <TextField
          label="Title"
          type="text"
          variant="standard"
          onChange={titleHandler}
        />
      </Stack>

      <button variant="contained" color="success" type="submit">
        Load
      </button>
    </form>
  );
}

export default LoadBook;
