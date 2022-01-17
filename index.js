require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.get("*", (req, res) => {
    res.status(404).send("Not Found");
})

app.listen(process.env.HTTP_PORT, () => {
    console.log("App online");
});

