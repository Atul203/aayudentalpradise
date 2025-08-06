import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { db } from "@/lib/firebase-admin" // Import Firestore database instance

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Store contact message in Firestore
    const contactMessageRef = db.collection("contactMessages").doc(); // Create a new document with auto-generated ID
    const newContactMessage = {
      id: contactMessageRef.id,
      name,
      email,
      phone,
      message,
      status: "unread",
      createdAt: admin.firestore.FieldValue.serverTimestamp(), // Use server timestamp
    };
    await contactMessageRef.set(newContactMessage);

    console.log("Contact form submission:", { name, email, phone, message })

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
      subject: "New Contact Form Submission - Aayu Dental Paradise",
      html: `
        <h1>New Contact Message</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p>This message was sent via your website's contact form.</p>
      `,
    }

    try {
      await transporter.sendMail(mailOptions)
      console.log("Contact email sent successfully.")
    } catch (emailError) {
      console.error("Error sending contact email:", emailError)
      // Continue with response even if email fails, but log the error
    }

    return NextResponse.json({ message: "Message sent successfully", contactMessage: newContactMessage }, { status: 200 })
  } catch (error) {
    console.error("Error in contact POST:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
