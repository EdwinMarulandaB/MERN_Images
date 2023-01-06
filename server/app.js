import express from "express";
import filerUpload from "express-fileupload";
import postRoutes from "./routes/posts.routes.js";
import { PORT } from "./config.js";
import cors from "cors";
import morgan from "morgan";

const app = express();

//middlewares
app.use(express.json());
app.use(
  filerUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);
app.use(morgan("dev"));
app.use(cors());

// Routes
app.use("/posts", postRoutes);

//Settings
app.set("PORT", PORT);

export default app;
