import { Router } from "express";
import { submitForm,getForms,logindata ,authenticate} from "../controllers/formController.js";

const router = Router();

router.post("/",submitForm );
router.get("/",authenticate,getForms);
router.post("/admin",logindata)
export default router;