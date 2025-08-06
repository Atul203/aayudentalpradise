import { Shield, Users, Award } from "lucide-react" // Import Lucide icons
import "./features-section.css"

const features = [
  {
    icon: Shield, // Lucide Icon Component
    title: "Quality & Safety First",
    description:
      "At Aayu Dental Clinic, we render facilities for all routine dental treatments with the highest standards of safety and hygiene.",
  },
  {
    icon: Users, // Lucide Icon Component
    title: "Personalized Treatment",
    description:
      "We believe in providing more proactive and personalized dental care tailored to each patient's unique needs and preferences.",
  },
  {
    icon: Award, // Lucide Icon Component
    title: "Experienced Dentists",
    description:
      "Our experienced dental surgeons use the most up-to-date techniques and technology to provide the highest level of patient care possible.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <feature.icon className="icon-large icon-blue" /> {/* Render Lucide Icon */}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
