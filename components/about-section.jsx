"use client" // Added 'use client' directive as it will now use client-side interactivity

import Image from "next/image"
import { Briefcase, GraduationCap, Heart } from 'lucide-react'
import InteractiveAppointmentModal from "./interactive-appointment-modal" // Import the modal component
import "./about-section.css"

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Doctor Image */}
          <div className="doctor-image-container">
            <div className="doctor-image-wrapper">
              <Image
                src="/images/doctor-photo.png"
                alt="Dr. A.N. Upadhyay"
                width={400}
                height={500}
                className="doctor-image"
              />
              <div className="experience-badge">
                <div className="experience-number">5+</div>
                <div className="experience-text">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Doctor Information */}
          <div className="doctor-info">
            <div className="doctor-intro">
              <h2>
                <span className="dr-name-blue">Dr. A.N.</span> <span className="dr-name-blue">Upadhyay</span> {/* Changed to navy blue for both parts */}
              </h2>
              <p className="doctor-title">Dedicated Dental Surgeon & Physician Assistant</p>
              <p className="doctor-description">
                Dedicated and detail-oriented Dental Surgeon with a strong foundation in clinical dentistry and patient
                care. Proficient in diagnostic procedures, restorative treatments, and preventive oral healthcare.
                Committed to delivering high-quality dental/medical services with empathy, precision, and
                professionalism.
              </p>
            </div>

            {/* Experience Highlights */}
            <div className="experience-highlights">
              <div className="highlight-item">
                <Briefcase className="highlight-icon" />
                <div className="highlight-content">
                  <h4>Current Position</h4>
                  <p>Doctor at Appolo Super Speciality Hospital, Lucknow</p> {/* Updated text */}
                </div>
              </div>
              <div className="highlight-item">
                <GraduationCap className="highlight-icon" />
                <div className="highlight-content">
                  <h4>Academic Experience</h4>
                  <p>
                    Faculty Tutor in Prosthodontic Crown and Bridge Department, Sardar Patel Post Graduate Institute
                  </p>
                </div>
              </div>
              <div className="highlight-item">
                <Heart className="highlight-icon" />
                <div className="highlight-content">
                  <h4>Specialization</h4>
                  <p>Restorative Dentistry, Preventive Care, and Multidisciplinary Hospital Experience</p>
                </div>
              </div>
            </div>

            {/* Wrapped button with InteractiveAppointmentModal */}
            <InteractiveAppointmentModal>
              <button className="book-appointment-btn">Book Appointment</button>
            </InteractiveAppointmentModal>
          </div>
        </div>
      </div>
    </section>
  )
}
