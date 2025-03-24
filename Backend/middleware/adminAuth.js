import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    // Log the entire headers object to see the structure
    console.log("Authorization Header:", req.headers);

    // Extract token from the Authorization header
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
      return res.json({
        success: false,
        message: "Not Authorized Login",
      });
    }

    // Extract the token from 'Bearer <token>'
    const token = authHeader.split(" ")[1]; // Get the token part after 'Bearer'

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login",
      });
    }

    // Decode the token
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token: ", token_decode); // For debugging

    // Compare the decoded email and password
    const expectedTokenValue =
      process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD;

    // Ensure the decoded token matches the expected value
    if (token_decode !== expectedTokenValue) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default adminAuth;
