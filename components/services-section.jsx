import { SmileIcon as Tooth, Smile, Crown, Shield, Zap, Stethoscope } from "lucide-react" // Import Lucide icons
import "./services-section.css"

const services = [
  {
    icon: Tooth, // Lucide Icon Component
    title: "General Dentistry",
    description:
      "Comprehensive dental care including cleanings, fillings, and routine check-ups for optimal oral health.",
  },
  {
    icon: Smile, // Lucide Icon Component
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with teeth whitening, veneers, and aesthetic treatments for enhanced confidence.",
  },
  {
    icon: Crown, // Lucide Icon Component
    title: "Restorative Dentistry",
    description: "Crowns, bridges, and implants to restore function and appearance of damaged or missing teeth.",
  },
  {
    icon: Shield, // Lucide Icon Component
    title: "Preventive Care",
    description: "Proactive treatments and education to prevent dental problems before they develop.",
  },
  {
    icon: Zap, // Lucide Icon Component
    title: "Emergency Dental Care",
    description: "Immediate treatment for dental emergencies, pain relief, and urgent oral health issues.",
  },
  {
    icon: Stethoscope, // Lucide Icon Component
    title: "Specialized Treatments",
    description: "Advanced procedures combining dental expertise with multidisciplinary medical knowledge.",
  },
]

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Dental Services</h2>
          <p>
            Comprehensive dental care services designed to meet all your oral health needs with the latest technology
            and techniques.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <div className="service-icon">
                  <service.icon className="icon-medium icon-blue" /> {/* Render Lucide Icon */}
                </div>
                <h3>{service.title}</h3>
              </div>
              <div className="service-content">
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
