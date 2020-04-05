import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

import routes from "./routes";

app.use(routes);

app.listen(3333);
