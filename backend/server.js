const express = require("express");
const connectDB = require("./config/db");
//*Penser à connecter le dotenv
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = 5000;

//-connexion à la DB
connectDB();

const app = express();

//Authorisation CORS (authoriser à inscrire dans la base de donnée)
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

//!Middleware permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

//*Ici c'est pour lancer le serveur
app.listen(port, () => console.log("Le serveur à démarré au port " + port));
