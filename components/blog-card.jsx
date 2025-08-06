import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Clock, ArrowRight } from "lucide-react" // Import Lucide icons
import "./blog-card.css"

export default function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <div className="blog-card-header">
        <div className="blog-card-image-container">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={400}
            height={250}
            className="blog-card-image"
          />
          <div className="blog-card-badge">{post.category}</div>
        </div>
      </div>
      <div className="blog-card-content">
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>

        <div className="blog-card-meta">
          <div className="blog-card-meta-group">
            <div className="blog-card-meta-item">
              <User className="blog-card-icon" />
              <span>{post.author}</span>
            </div>
            <div className="blog-card-meta-item">
              <Calendar className="blog-card-icon" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="blog-card-meta-item">
            <Clock className="blog-card-icon" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <Link href={`/blog/${post.slug}`} className="blog-card-read-more">
          Read More
          <ArrowRight className="blog-card-read-more-icon" />
        </Link>
      </div>
    </div>
  )
}
