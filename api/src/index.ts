import express from "express";

const app = express();

app.listen(8000, () => {
    console.log("server is running at http://localhost:8000");
    console.log("Starting the project");
});
