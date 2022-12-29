import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Something whent wrong", err);

  res.status(400).send({
    message: "Something went wrong",
  });
};
