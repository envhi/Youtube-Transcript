import express from "express";
import { routes } from "./router.js";

const app = express();

app.use(express.json());

app.use(routes)

app.listen(3000, () => {
  console.log('running')
})