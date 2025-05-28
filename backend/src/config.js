import dotenv from "dotenv";
 dotenv.config();

export const config = {
  db: {
    URI: process.env.DB_URI,
  },
  server: {
    port: process.env.PORT,
  },
  JWT: {
    secret: process.env.JWT_SECRET,
    expires: process.env.JWT_EXPIRES
  },
  ADMIN: {
    email: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASSWORD
  },
  cloudinary: {
     cloudinary_name: process.env.CLOUDINARY_NAME,
     cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
     cloudinary_api_secret : process.env.CLOUDINARY_API_SECRET
  }
};
