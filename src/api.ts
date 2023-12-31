// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from "express";
import serverless from "serverless-http";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.DATABASE_URL || '', process.env.SUPABASE_SERVICE_KEY || '')

const api = express();
// corsの全許可
api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const router = Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.jsasdf!</h1>');
  res.end();
});
router.get("/hello", async (req, res) => {

const result = await supabase
 .from('notes')
 .insert([
    { note: 'I need to not forget this' },
 ]).select('*') ;
  return res.send("Hello World!");
});

api.use("/api/", router);


export const handler = serverless(api);