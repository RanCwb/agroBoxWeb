import { Request, Router, Response } from "express";

const router = Router();

router.get("/init", (req: Request, res: Response) => {
  res.send("Hello World");
});


export { router };