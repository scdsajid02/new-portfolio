

import Contact from "../models/contactModel.js";

// Handle contact form submission
export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.json({ success: false, message: "All fields are required!" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Fetch all contact messages (for admin panel)
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, contacts });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    res.json({ success: true, message: "Contact deleted successfully!" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

