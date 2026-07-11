//const express = require('express');
import express from 'express';
import "dotenv/config"
import cros from "cors";

import { clerkMiddleware } from "@clerk/express" ;


import User from './models/user.model.js';
import Message from './models/message.model.js';
import { connectDB } from './lib/db.js';


const app = express();
const port = process.env.PORT ;
const FRONTEND_URL = process.env.FRONTEND_URL ;

app.use(express.json);
app.use(cors({prigin:FRONTEND_URL , credentials:true}));
app.use(clerkMiddleware());

app.get("/health", (req, res) => {
  res.status(200).json({ ok:true});
});



app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});