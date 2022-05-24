import express, { Router } from "express";
import { createSite, updateSite } from "../../controllers/siteController";

const router: Router = express.Router();

router.post("/", createSite);
router.put("/:siteId", updateSite);
export default router;
