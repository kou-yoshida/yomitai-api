// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

api.use("/api/", router);
// corsの全許可
api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


export const handler = serverless(api);