import Form from "../model/form.js";
import {setUser,verifytoken}  from "../service/auth.js"
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
export const logindata = async(req,res) => {
  try{
    const {email,password} = req.body;

    if(process.env.email!=email){
       return res.status(401).json({error:"invalid credentials"});
    }
    if(process.env.password!=password){
      return res.status(401).json({error:"invalid credentials"});

    }
    const token =  setUser(req.body);
    res.cookie("auth_token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: false,  // enable in production (HTTPS)
      maxAge: 1000 * 60 * 60 // match expiry (1 hour)
    });
    // send a response so the client knows login succeeded
    return res.status(200).json({ success: true, message: "Logged in" });
  }
  catch(err){
    console.log(err.message);
    res.status(500).json({
      error:"server error"
    })
  }
};


export function authenticate(req, res, next) {
  const token = req.cookies.auth_token;
  console.log("Cookies:", req.cookies); 
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  try {
    const checktoken = verifytoken(token);
    // attach decoded token payload to request
    req.user = checktoken;
    return next();
  } catch (err) {
    console.log("Token verification failed:", err?.message || err);
    return res.status(401).json({ error: "Invalid token" });
  }
}
