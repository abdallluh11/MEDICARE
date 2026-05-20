import express from "express";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import {
  cancelAppointment,
  conformPayment,
  createAppointment,
  getAppointments,
  getAppointmentsByDoctor,
  getAppointmentsByPatients,
  getRegisterUserCount,
  getStats,
  updateAppointment,
} from "../controllers/appointmentControllers.js";

const appointmentRouter = express.Router();

appointmentRouter.get("/", getAppointments);
appointmentRouter.get("/confirm", conformPayment);
appointmentRouter.get("/stats/summary", getStats);

// authentic routs
appointmentRouter.post(
  "/",
  clerkMiddleware(),
  requireAuth(),
  createAppointment,
);
appointmentRouter.get(
  "/me",
  clerkMiddleware(),
  requireAuth(),
  getAppointmentsByPatients,
);

appointmentRouter.get("/doctor/:doctorId", getAppointmentsByDoctor);

appointmentRouter.post("/:id/cancel", cancelAppointment);
appointmentRouter.get("/patents/count", getRegisterUserCount);
appointmentRouter.put("/:id", updateAppointment);

export default appointmentRouter;
