// config/db.js
import mongoose from 'mongoose';

export const conectarDb = async() =>{
    try {
      await mongoose.connect(process.env.MONGO_URI)
        console.log("Conectado a la base de datos correctamente")
    } catch (error) {
        console.log("No se pudo conectar a la base de datos")
    }
}
