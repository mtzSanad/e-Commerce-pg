import express, { Application, Request, Response } from "express";

const PORT = 3000;

const app: Application = express();

//Adding route
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello 🤖",
  });
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

export default app;
