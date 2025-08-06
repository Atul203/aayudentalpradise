import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

const galleryImages = [
  { src: "/images/dental-treatment-1.jpg", alt: "Professional Dental Treatment" },
  { src: "/images/dentist-patient-care.jpg", alt: "Dentist Patient Care" },
  { src: "/images/dental-tooth-mirror.jpeg", alt: "Dental Examination Tools" },
  { src: "/images/happy-elderly-patient.jpeg", alt: "Happy Patient Experience" },
  { src: "/images/dental-examination.jpg", alt: "Dental Examination Process" },
  { src: "/images/dental-health-concept.jpg", alt: "Dental Health Concept" },
  { src: "/images/dental-procedure.jpg", alt: "Advanced Dental Procedure" },
  { src: "/images/pediatric-dental.jpg", alt: "Pediatric Dental Care" },
  { src: "/images/modern-dental-treatment.webp", alt: "Modern Dental Treatment" },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Clinic Gallery</h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Take a virtual tour of our modern dental facility equipped with state-of-the-art technology and comfortable
            amenities for patients of all ages.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {image.alt}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
