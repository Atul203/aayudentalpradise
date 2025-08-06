import Header from "@/components/header"
import Footer from "@/components/footer"
import ServicesSection from "@/components/services-section"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Dental Services</h1>
        </div>
      </div>
      <ServicesSection />
      <Footer />
    </div>
  )
}
