import express from "express";
import {
  submitContact,
  getContacts,
  deleteContact
} from "../controllers/contactController.js";

const router = express.Router();

router.post("/submit", submitContact); // Submit a contact message
router.get("/list", getContacts); // Fetch all contact messages (for admin panel)
router.delete("/delete/:id", deleteContact); 

export default router;
