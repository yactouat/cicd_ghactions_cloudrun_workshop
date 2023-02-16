import express from "express";
import { Request, Response } from "express";
import { getPgClient } from "./db";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    msg: "API is up",
    data: null,
  });
});

app.get("/status", async (req, res) => {
  let dbIsUp = true;
  const pgClient = getPgClient();
  try {
    await pgClient.connect();
    const qRes = await pgClient.query("SELECT $1::text as message", [
      "DB IS UP",
    ]);
    console.log(qRes.rows[0].message);
  } catch (error) {
    dbIsUp = false;
    console.error(error);
  } finally {
    await pgClient.end();
  }
  res.status(dbIsUp ? 200 : 500).json({
    msg: dbIsUp ? "API is available" : "API is partly available",
    data: null,
  });
});

export const listeningServer = app.listen(8080, () => {
  console.log("server started on port 8080");
});

export default app;
