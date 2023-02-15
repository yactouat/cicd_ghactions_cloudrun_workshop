import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    msg: "API is up",
    data: null,
  });
});

export const listeningServer = app.listen(8080, () => {
  console.log("server started on port 8080");
});

export default app;
