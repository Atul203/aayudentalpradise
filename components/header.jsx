"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import InteractiveAppointmentModal from "./interactive-appointment-modal"
import { Phone, Mail, Facebook, Instagram, Linkedin, Menu, X } from 'lucide-react' // Import Phone icon

import "./header.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <div className="contact-item">
                <Phone className="icon-base" />
                <span>Clinic: +91 9795120111</span>
              </div>
              <div className="contact-item">
                <Mail className="icon-base" />
                <span>aayudental@gmail.com</span>
              </div>
            </div>
            <div className="social-links">
              <Facebook className="social-icon" />
              <Instagram className="social-icon" />
              <Linkedin className="social-icon" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <Link href="/">
                <Image
                  src="/images/aayu-dental-paradise-logo.jpeg"
                  alt="Aayu Dental Paradise Logo"
                  width={150}
                  height={100}
                  className="aayu-logo-image"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <Link href="/" className="nav-link">
                HOME
              </Link>
              <Link href="/about" className="nav-link">
                ABOUT US
              </Link>
              <Link href="/services" className="nav-link">
                OUR SERVICES
              </Link>
              <Link href="/gallery" className="nav-link">
                GALLERY
              </Link>
              <Link href="/contact" className="nav-link">
                CONTACT US
              </Link>
              {/* New Call Us Button */}
              <a href="tel:+919795120111" className="call-us-btn">
                <Phone className="icon-base" />
                Call Us
              </a>
              <InteractiveAppointmentModal>
                <button className="appointment-btn">BOOK APPOINTMENT</button>
              </InteractiveAppointmentModal>
            </nav>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="icon-base" /> : <Menu className="icon-base" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="mobile-nav">
              <nav className="mobile-nav-links">
                <Link href="/" className="nav-link">
                  HOME
                </Link>
                <Link href="/about" className="nav-link">
                  ABOUT US
                </Link>
                <Link href="/services" className="nav-link">
                  OUR SERVICES
                </Link>
                <Link href="/gallery" className="nav-link">
                  GALLERY
                </Link>
                <Link href="/contact" className="nav-link">
                  CONTACT US
                </Link>
                {/* Mobile Call Us Button */}
                <a href="tel:+919795120111" className="call-us-btn mobile">
                  <Phone className="icon-base" />
                  Call Us
                </a>
                <InteractiveAppointmentModal>
                  <button className="appointment-btn mobile">BOOK APPOINTMENT</button>
                </InteractiveAppointmentModal>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
