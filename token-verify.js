const jwt = require('jsonwebtoken');

const secret = "myCat";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInNjb3BlIjoiY3VzdG9tZXIiLCJpYXQiOjE3NDE5ODgzMzd9.tw8pOy-eyTegt5LXs75o_DzpKEJmBw5vPRZdwYcH96I";

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
