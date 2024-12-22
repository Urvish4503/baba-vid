import express, { Express } from "express";
import dotenv from "dotenv";
import router from "./routes/ping";
import { errorMiddleware } from "./middlewares/error";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3003;

app.use(express.json());
app.use(router)
app.use(errorMiddleware)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
