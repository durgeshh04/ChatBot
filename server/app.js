const express = require("express");
const cors = require("cors");
// const fetch = require('node-fetch');
require("dotenv").config();

const port = 3000;

const app = express();

app.use(cors());

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a very helpful assistant",
      },
    ],
  };

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        ...data,
        messages: [...data.messages, ...messages],
      }),
    });
    const resdata = await response.json();
    console.log(resdata);
    res.send(resdata);
  } catch (error) {
    console.log(error, "Error");
  }
});

app.listen(port, () => {
  console.log(`Example app at http://localhost:${port}`);
});
