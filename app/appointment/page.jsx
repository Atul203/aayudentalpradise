import Header from "@/components/header"
import Footer from "@/components/footer"
import AppointmentForm from "@/components/appointment-form"

export default function AppointmentPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Book Your Appointment</h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Schedule your visit with Dr. A.N. Upadhyay at Aayu Dental Paradise. We're here to provide you with
            exceptional dental care.
          </p>
          <AppointmentForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}
