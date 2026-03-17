import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import routerLaunchers from "./routes/launchersR.js";
import routerRegister from "./routes/registerR.js";

const app = express();
const port = 3001;

dotenv.config();
app.use(express.json());
app.use(cors());


app.use("/api/launchers", routerLaunchers);
app.use("/api/auth", routerRegister);




connectDB()

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});

