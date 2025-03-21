const jwt = require("jsonwebtoken");

const secretKey = "aterribleterriblesecrethushnow"; // Replace with your actual secret key
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3JlZSIsImlhdCI6MTc0MjUzNjAwMX0.QjZ0lkiqo9z3ClQlmwUv62CSuX8pxwnYMO-T76pQfvk"; // Replace with your actual JWT token

// Verify and Decode JWT
try {
  const decoded = jwt.verify(token, secretKey);
  console.log("Decoded JWT:", decoded);
} catch (err) {
  console.error("JWT verification failed:", err.message);
}
