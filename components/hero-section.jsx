"use client"

import { useState, useEffect } from "react"
import InteractiveAppointmentModal from "./interactive-appointment-modal"
import Link from "next/link"
import "./hero-section.css"

const slides = [
{
  image: "/images/dental-treatment-1.jpg",
  title: "WE TRANSFORM YOUR SMILE",
  subtitle: "FOR CONFIDENCE & BETTER LIFE",
  description: "Advanced dental excellence care with Dr. A.N. Upadhyay at Aayu Dental Paradise", // Updated clinic name
},
{
  image: "/images/dentist-patient-care.jpg",
  title: "ADVANCED DENTAL TREATMENTS",
  subtitle: "WITH PERSONALIZED CARE",
  description: "State-of-the-art technology combined with compassionate care for optimal results",
},
{
  image: "/images/happy-elderly-patient.jpeg",
  title: "YOUR COMFORT IS OUR PRIORITY",
  subtitle: "RELAXING DENTAL EXPERIENCE",
  description: "Comfortable environment designed to make your dental visit stress-free",
},
]

export default function HeroSection() {
const [currentSlide, setCurrentSlide] = useState(0)

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, 5000)
  return () => clearInterval(timer)
}, [])

const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % slides.length)
}

const prevSlide = () => {
  setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
}

return (
  <section className="hero-section">
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`slide ${index === currentSlide ? "active" : ""}`}
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="slide-overlay" />
        <div className="slide-content">
          <div className="slide-text">
            <h1>{slide.title}</h1>
            <h2>{slide.subtitle}</h2>
            <p>{slide.description}</p>
            <div className="slide-buttons">
              <InteractiveAppointmentModal>
                <button className="btn-primary">Book Appointment</button>
              </InteractiveAppointmentModal>
              <Link href="/blog">
                <button className="btn-secondary">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}

    {/* Navigation Arrows */}
    <button onClick={prevSlide} className="nav-arrow prev">
      ‹
    </button>
    <button onClick={nextSlide} className="nav-arrow next">
      ›
    </button>

    {/* Slide Indicators */}
    <div className="slide-indicators">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`indicator ${index === currentSlide ? "active" : ""}`}
        />
      ))}
    </div>
  </section>
)
}
