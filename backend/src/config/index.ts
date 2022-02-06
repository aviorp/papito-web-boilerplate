export default {
  env: process.env.NODE_ENV,
  port: process.env.port || 3300,
  DB_URI: process.env.DB_URI || "mongodb://localhost/testdb",
  jwtSecret: process.env.JWT_SECRET || "secretKey",
};
  