import { PORT } from "./config/config.service";
import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import cors from "cors";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import {
  AppError,
  globalErrorHandling,
} from "./common/utils/globalErrorHandling";

const app = express();
const port = PORT;
const limiter = rateLimit({
  windowMs: 60 * 5 * 1000,
  limit: 20,
  message: {
    success: false,
    message: "Too Many Requests",
  },
});
const bootstrap = async () => {
  app.use(express.json(), cors(), helmet(), limiter);

  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: "hello on my app" });
  });

  app.use("{/*demo}", (req: Request, res: Response, next: NextFunction) => {
    throw new AppError(
      `Url:${req.originalUrl} with method:${req.method} not found`,
      404,
    );
  });

  app.use(globalErrorHandling);

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};

export default bootstrap;
