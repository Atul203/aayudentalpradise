"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us to schedule your appointment or ask any questions about our dental services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader className="text-center">
                  <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Location</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">Lucknow, Uttar Pradesh, India</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Phone</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">+91 9795120111</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">aayudental@gmail.com</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Hours</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">Mon-Sat: 9AM-7PM</p>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="bg-gray-200 rounded-lg h-64 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99971179003!2d80.77769995!3d26.8466777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aayu Dental Paradise Location - Lucknow"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
