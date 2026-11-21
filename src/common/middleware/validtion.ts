import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import { AppError } from "../utils/globalErrorHandling";
import type { ZodType } from "zod";

type ReqType = keyof Request;
type SchemaType = Partial<Record<ReqType, ZodType>>;

export const Validation = (schema: SchemaType) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const ResultError = [];
    for (const key of Object.keys(schema) as ReqType[]) {
      if (!schema[key]) continue;
      const result = schema[key].safeParse(req[key]);
      if (!result.success) {
        ResultError.push(result.error.message);
      }
   }
    if (ResultError.length > 0) {
        throw new AppError(JSON.parse(ResultError.join(", ")), 400)
    }
    next()
}

}
