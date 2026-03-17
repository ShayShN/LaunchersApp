import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import router from "./routes/launchersR.js";

const app = express();
const port = 3001;

dotenv.config();
app.use(express.json());
app.use(cors());


app.use("/api/launchers", router);
app.use("/api/auth", );




connectDB()

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});

