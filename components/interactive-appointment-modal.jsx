"use client"

import { useState } from "react"
import { Calendar, User, Clock } from 'lucide-react'
import "./interactive-appointment-modal.css"

export default function InteractiveAppointmentModal({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
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

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

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
        // Removed setTimeout to stop automatic closing
        // User can now close the modal manually after seeing the success message
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

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.phone
      case 2:
        return formData.date && formData.time && formData.service
      case 3:
        return true
      default:
        return false
    }
  }

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>
                <Calendar className="modal-header-icon" /> Book Your Appointment
              </h2>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                ✕
              </button>
            </div>

            {/* Progress Bar */}
            <div className="progress-bar">
              <div className="progress-steps">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="progress-step-container">
                    <div className={`progress-step ${step <= currentStep ? "active" : ""}`}>{step}</div>
                    {step < 3 && <div className={`progress-line ${step < currentStep ? "active" : ""}`} />}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="appointment-form">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="form-step">
                  <h3>
                    <User className="form-step-icon" /> Personal Information
                  </h3>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Appointment Details */}
              {currentStep === 2 && (
                <div className="form-step">
                  <h3>
                    <Clock className="form-step-icon" /> Appointment Details
                  </h3>
                  <div className="form-group">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div className="form-group">
                    <select name="time" value={formData.time} onChange={handleChange} required>
                      <option value="">Select Time *</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select name="service" value={formData.service} onChange={handleChange} required>
                      <option value="">Select Service *</option>
                      <option value="general">General Consultation</option>
                      <option value="cleaning">Dental Cleaning</option>
                      <option value="filling">Dental Filling</option>
                      <option value="crown">Crown & Bridge</option>
                      <option value="cosmetic">Cosmetic Dentistry</option>
                      <option value="emergency">Emergency Care</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Additional Information */}
              {currentStep === 3 && (
                <div className="form-step">
                  <h3>💬 Additional Information</h3>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Any specific concerns or additional information (Optional)"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Summary */}
                  <div className="appointment-summary">
                    <h4>Appointment Summary:</h4>
                    <div className="summary-details">
                      <p>
                        <strong>Name:</strong> {formData.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {formData.email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {formData.phone}
                      </p>
                      <p>
                        <strong>Date:</strong> {formData.date}
                      </p>
                      <p>
                        <strong>Time:</strong> {formData.time}
                      </p>
                      <p>
                        <strong>Service:</strong> {formData.service}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="form-navigation">
                <button
                  type="button"
                  className={`nav-btn secondary ${currentStep === 1 ? "hidden" : ""}`}
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                >
                  Previous
                </button>

                {currentStep < 3 ? (
                  <button type="button" className="nav-btn primary" onClick={handleNext} disabled={!isStepValid()}>
                    Next
                  </button>
                ) : (
                  <button type="submit" className="nav-btn confirm" disabled={isSubmitting}>
                    {isSubmitting ? "Booking..." : "Confirm Appointment"}
                  </button>
                )}
              </div>

              {submitMessage && (
                <div className={`submit-message ${submitMessage.includes("successfully") ? "success" : "error"}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  )
}
