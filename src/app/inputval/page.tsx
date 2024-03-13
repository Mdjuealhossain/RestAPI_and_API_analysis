"use client";
import { fetchData } from "@/widget/DataFetchComponent/restApi/ApiMethode/ApiMethodes";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState, FormEvent, Suspense } from "react";

export default function InputValidation() {
  const [comment, setComment] = useState<any>([]);
  const [input, setInput] = useState("");

  async function postMet(event: any) {
    event.preventDefault();

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify({ input }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("data", data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchData(setComment);

  return (
    <>
      <Suspense>
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        ></TextField>
        <Button variant="contained" type="submit" onClick={postMet}>
          Submit
        </Button>
      </Suspense>
      {comment.map((com: any) => {
        return (
          <Box key={com.id}>
            <Typography>{com.title}</Typography>
          </Box>
        );
      })}
    </>
  );
}
