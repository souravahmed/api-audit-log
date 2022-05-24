import express, {
  Application,
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import cors from "cors";
import apiRoute from "./routes";
import path from "path/posix";
import dbConfig from "./config/dbConfig";
import dotenv from "dotenv";

export const app: Application = express();
const PORT = process.env.PORT || 4000;
export const __dirname = path.resolve();
dotenv.config();
dbConfig(process);
//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRoute);

app.use(<ErrorRequestHandler>(
  function (err: any, req: Request, res: Response, next: NextFunction) {
    const statusCode = err.statusCode || 500;
    return res
      .status(statusCode)
      .json({ status: statusCode, message: err?.message });
  }
));

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});
