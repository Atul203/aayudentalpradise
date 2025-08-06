import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { db } from "@/lib/firebase-admin" // Import Firestore database instance

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, date, time, service, message } = body

    // Validate required fields
    if (!name || !email || !phone || !date || !time) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Store appointment in Firestore
    const appointmentRef = db.collection("appointments").doc(); // Create a new document with auto-generated ID
    const newAppointment = {
      id: appointmentRef.id,
      name,
      email,
      phone,
      appointment_date: date,
      appointment_time: time,
      service: service || "General Consultation",
      message: message || "",
      status: "pending",
      createdAt: admin.firestore.FieldValue.serverTimestamp(), // Use server timestamp
    };
    await appointmentRef.set(newAppointment);

    // Send email notification
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || "587"),
      secure: process.env.EMAIL_SERVER_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_SERVER_USER,
      to: process.env.CONTACT_EMAIL_RECIPIENT || "aayudental@gmail.com", // Send to clinic email
      subject: "New Appointment Booking - Aayu Dental Paradise",
      html: `
        <h1>New Appointment Details</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
        <p>This appointment has been booked via your website.</p>
      `,
    }

    try {
      await transporter.sendMail(mailOptions)
      console.log("Appointment email sent successfully.")
    } catch (emailError) {
      console.error("Error sending appointment email:", emailError)
      // Continue with response even if email fails, but log the error
    }

    return NextResponse.json({ message: "Appointment booked successfully", appointment: newAppointment }, { status: 201 })
  } catch (error) {
    console.error("Error in appointment POST:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const appointmentsSnapshot = await db.collection("appointments").orderBy("createdAt", "desc").get();
    const appointments = appointmentsSnapshot.docs.map(doc => doc.data());
    return NextResponse.json({ appointments });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
