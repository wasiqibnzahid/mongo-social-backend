import Express from "express";
import { ab, authRouter, setAb } from "./auth/auth";
const router = Express.Router();
router.use(authRouter);

export default router;
export { router as v1Routes };
