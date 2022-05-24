import express, { Router } from "express";
import siteRoute from "./site/siteRoute";

const router: Router = express.Router();

router.use("/sites", siteRoute);

export default router;
