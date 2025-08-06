import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react'
import InteractiveAppointmentModal from "./interactive-appointment-modal"
import "./blog-post.css"

export default function BlogPost({ post }) {
  return (
    <article className="blog-post-article">
      <div className="container blog-post-container">
        {/* Back Button */}
        <Link href="/blog" className="blog-post-back-link">
          <ArrowLeft className="blog-post-back-icon" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="blog-post-header">
          <div className="blog-post-badge-container">
            <span className="blog-post-badge">{post.category}</span>
          </div>

          <h1 className="blog-post-title">{post.title}</h1>

          <div className="blog-post-meta-info">
            <div className="blog-post-meta-item">
              <User className="blog-post-meta-icon" />
              <span>{post.author}</span>
            </div>
            <div className="blog-post-meta-item">
              <Calendar className="blog-post-meta-icon" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="blog-post-meta-item">
              <Clock className="blog-post-meta-icon" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="blog-post-image-container">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="blog-post-image" />
          </div>
        </header>

        {/* Article Content */}
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Call to Action */}
        <div className="blog-post-cta">
          <h3 className="blog-post-cta-title">Ready to Improve Your Oral Health?</h3>
          <p className="blog-post-cta-description">
            Schedule an appointment with Dr. A.N. Upadhyay at Aayu Dental Paradise for personalized dental care and
            professional advice.
          </p>
          <InteractiveAppointmentModal>
            <button className="blog-post-cta-button">Book Your Appointment</button>
          </InteractiveAppointmentModal>
        </div>
      </div>
    </article>
  )
}
