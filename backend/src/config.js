//importo la librerira dotenv
import dotenv from "dotenv";

//ejecuto "Dotenv"
//me ayudara a acceder al .env
dotenv.config();

export const config = {
    db: {
        URI: process.env.DB_URI || "mongodb+srv://fito:WYBS0lQxFDP31IYm@sitiowebcholos.w6tdj.mongodb.net/CholosDB?retryWrites=true&w=majority&appName=SitioWebCholos", 
    },
    server: {
        port: process.env.PORT || 4000,
    }
}