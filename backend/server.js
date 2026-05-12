import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { clerkMiddleware } from '@clerk/express'
import { connectDB } from './config/db.js';
import doctorRouter from './routes/doctorRouter.js';
import serviceRouter from './routes/serviceRouter.js';
import appointmentRoutes from './routes/appointmentRouter.js';


const app = express();
const port = 4000;

// Middlewares
app.use(cors());
app.use(clerkMiddleware());
app.use(express.json({ limit: "20mb"}));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

// DB
connectDB();

// Routs
app.use("/api/doctors", doctorRouter);
app.use("/api/services", serviceRouter);
app.use("/api/appointment", appointmentRoutes);

app.get('/', (req, res) => {
    res.send("API WORK")
})
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`)
})

