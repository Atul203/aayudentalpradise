import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react'
import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Clinic Info */}
          <div className="footer-section">
            <div className="clinic-info">
              <div className="logo">
                <Link href="/">
                  <Image
                    src="/images/aayu-dental-paradise-logo.jpeg"
                    alt="Aayu Dental Paradise Logo"
                    width={150}
                    height={100}
                    className="aayu-logo-image-footer"
                  />
                </Link>
              </div>
              <p className="clinic-description">
                Providing exceptional dental care with compassion, precision, and professionalism in Lucknow.
              </p>
              <div className="social-links">
                <Facebook className="social-icon" />
                <Instagram className="social-icon" />
                <Linkedin className="social-icon" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="service-list">
              <li>General Dentistry</li>
              <li>Cosmetic Dentistry</li>
              <li>Restorative Dentistry</li>
              <li>Preventive Care</li>
              <li>Emergency Care</li>
              <li>Specialized Treatments</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>Lucknow, Uttar Pradesh</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>+91 9795120111</span>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>aayudental@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Aayu Dental Paradise. All rights reserved. | Designed with care for your smile.</p>
        </div>
      </div>
    </footer>
  )
}
