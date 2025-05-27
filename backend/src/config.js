import dotenv from "dotenv";
 dotenv.config();

export const config = {
  db: {
    URI: process.env.DB_URI || "mongodb+srv://fito:WYBS0lQxFDP31IYm@sitiowebcholos.w6tdj.mongodb.net/CholosDB?retryWrites=true&w=majority&appName=SitioWebCholos",
  },
  server: {
    port: process.env.PORT || 4000,
  },
  cloudinary: {
     cloudinary_name: process.env.CLOUDINARY_NAME,
     cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
     cloudinary_api_secret : process.env.CLOUDINARY_API_SECRET
  }
};
