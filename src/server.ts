import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(6000, () => console.log("Server ready on port 6000."));

export default app;
