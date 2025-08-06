import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutSection from "@/components/about-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Dr. A.N. Upadhyay</h1>
        </div>
      </div>
      <AboutSection />
      <Footer />
    </div>
  )
}
