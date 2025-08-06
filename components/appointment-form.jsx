"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from 'lucide-react'

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage("Appointment booked successfully! We will contact you soon.")
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          service: "",
          message: "",
        })
      } else {
        setSubmitMessage("Error booking appointment. Please try again.")
      }
    } catch (error) {
      setSubmitMessage("Error booking appointment. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
          <Calendar className="h-6 w-6" />
          Book an Appointment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div>
              <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, time: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="09:00">9:00 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="12:00">12:00 PM</SelectItem>
                  <SelectItem value="14:00">2:00 PM</SelectItem>
                  <SelectItem value="15:00">3:00 PM</SelectItem>
                  <SelectItem value="16:00">4:00 PM</SelectItem>
                  <SelectItem value="17:00">5:00 PM</SelectItem>
                </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Select Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Consultation</SelectItem>
              <SelectItem value="cleaning">Dental Cleaning</SelectItem>
              <SelectItem value="filling">Dental Filling</SelectItem>
              <SelectItem value="crown">Crown & Bridge</SelectItem>
              <SelectItem value="cosmetic">Cosmetic Dentistry</SelectItem>
              <SelectItem value="emergency">Emergency Care</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Textarea
            name="message"
            placeholder="Additional Message (Optional)"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* Updated styling for the button in Appointment Form */}
        <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white appointment-form-btn" disabled={isSubmitting}>
          {isSubmitting ? "Booking..." : "Book Appointment"}
        </Button>

        {submitMessage && (
          <div
            className={`text-center p-3 rounded ${
              submitMessage.includes("successfully") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {submitMessage}
          </div>
        )}
      </form>
    </CardContent>
  </Card>
)
}
