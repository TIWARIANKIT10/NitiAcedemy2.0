import Form from "../model/form.js";

// Handle form submission
export const submitForm = async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(201).json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// (Optional) Get all forms
export const getForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
