"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const dentalImages = [
  {
    src: "/images/dental-health-concept.jpg",
    alt: "Professional Dental Care Concept",
    title: "Comprehensive Dental Health",
    description: "Complete oral health solutions with modern technology",
  },
  {
    src: "/images/dental-tooth-mirror.jpeg",
    alt: "Dental Examination Tools",
    title: "Precision Dental Care",
    description: "Advanced diagnostic tools for accurate treatment",
  },
  {
    src: "/images/dental-examination.jpg",
    alt: "Professional Dental Examination",
    title: "Expert Dental Treatment",
    description: "Skilled professionals providing gentle, effective care",
  },
  {
    src: "/images/dentist-patient-care.jpg",
    alt: "Dentist Treating Patient",
    title: "Personalized Patient Care",
    description: "Individual attention for every patient's unique needs",
  },
  {
    src: "/images/happy-elderly-patient.jpeg",
    alt: "Happy Patient Experience",
    title: "Comfortable Dental Visits",
    description: "Creating positive experiences for patients of all ages",
  },
]

export default function DentalSlider() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % dentalImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % dentalImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + dentalImages.length) % dentalImages.length)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Dental Excellence</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our modern facilities and advanced dental care services designed for your comfort and health.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {dentalImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{image.title}</h3>
                  <p className="text-lg opacity-90">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
            {dentalImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImage ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Modern Equipment</h4>
            <p className="text-gray-600">Latest dental technology for accurate diagnosis and treatment</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full"></div>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Sterilized Environment</h4>
            <p className="text-gray-600">Highest standards of hygiene and safety protocols</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Comfortable Care</h4>
            <p className="text-gray-600">Relaxing atmosphere designed for patient comfort</p>
          </div>
        </div>
      </div>
    </section>
  )
}
