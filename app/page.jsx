import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import DentalSlider from "@/components/dental-slider"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-height-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DentalSlider />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
