import { Router } from "express";
import { submitForm,getForms } from "../controllers/formController.js";

const router = Router();

router.post("/",submitForm );
router.get("/",getForms);

export default router;