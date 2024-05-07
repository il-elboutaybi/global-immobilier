import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import multer from 'multer';
import RecrutementModel from './models/Recrutement.js';
import ContactModel from './models/Contact.js';
import dotenv from 'dotenv';

const app = express();
const __dirname = path.resolve(); // Get absolute path for portability

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use('/files', express.static(path.join(__dirname, 'files')));
dotenv.config();

// Connect to MongoDB using an async IIFE for cleaner connection handling
(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI); 
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
})();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'files'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now(); 
    cb(null, uniqueSuffix + file.originalname); 
  }
});

const upload = multer({ storage }); 

app.post('/register', upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const { prenom, nom, email, telephone, nationalite } = req.body;
    const fileName = req.file.filename;

    const recrutement = await RecrutementModel.create({ prenom, nom, email, telephone, nationalite, pdf: fileName });
                   
    res.json({ status: "ok", recrutement }); // Return created document
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Failed to create recrutement entry" });
  }
});

app.post('/contact', (req, res) => {
    const { entreprise, telephone, email } = req.body;

    // Verify that all fields are provided
    if (!entreprise || !telephone || !email) {
        return res.status(400).json({ message: "entreprise, téléphone et email sont requis." });
    }

    // Verify email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Format de courrier électronique invalide" });
    }

    // Verify telephone format
    const telephoneRegex = /^\d{10}$/;
    if (!telephoneRegex.test(telephone)) {
        return res.status(400).json({ message: "Format de téléphone invalide. Doit être de 10 chiffres" });
    }

    ContactModel.create(req.body)
      .then(Contact => res.json(Contact))
      .catch(err => res.json(err));
});

app.listen(5000, () => {
    console.log("server is running");
});
