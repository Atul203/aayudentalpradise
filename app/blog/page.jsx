import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogCard from "@/components/blog-card"
import "../globals.css"
import "./blog.css"

const blogPosts = [
  {
    id: 1,
    title: "Essential Daily Oral Hygiene Routine",
    excerpt: "Learn the proper techniques for brushing, flossing, and maintaining optimal oral health every day.",
    image: "/images/dental-cleaning.png",
    author: "Dr. A.N. Upadhyay",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Preventive Care",
    slug: "daily-oral-hygiene-routine",
  },
  {
    id: 2,
    title: "The Importance of Regular Dental Checkups",
    excerpt: "Discover why routine dental visits are crucial for preventing serious oral health problems.",
    image: "/images/dentist-patient-care.jpg",
    author: "Dr. A.N. Upadhyay",
    date: "2025-01-10",
    readTime: "4 min read",
    category: "Preventive Care",
    slug: "importance-regular-checkups",
  },
  {
    id: 3,
    title: "Foods That Promote Healthy Teeth and Gums",
    excerpt: "Explore the best foods for dental health and which ones to avoid for a brighter smile.",
    image: "/images/dental-health-concept.jpg",
    author: "Dr. A.N. Upadhyay",
    date: "2025-01-05",
    readTime: "6 min read",
    category: "Nutrition",
    slug: "foods-for-healthy-teeth",
  },
  {
    id: 4,
    title: "Professional Dental Cleaning: What to Expect",
    excerpt: "A comprehensive guide to professional dental cleaning procedures and their benefits.",
    image: "/images/dental-examination.jpg",
    author: "Dr. A.N. Upadhyay",
    date: "2025-01-01",
    readTime: "7 min read",
    category: "Treatments",
    slug: "professional-dental-cleaning",
  },
  {
    id: 5,
    title: "Dental Care for Children: A Parent's Guide",
    excerpt: "Essential tips for maintaining your child's oral health from infancy through adolescence.",
    image: "/images/pediatric-dental.jpg",
    author: "Dr. A.N. Upadhyay",
    date: "2024-12-28",
    readTime: "8 min read",
    category: "Pediatric Care",
    slug: "dental-care-for-children",
  },
  {
    id: 6,
    title: "Common Dental Problems and Prevention",
    excerpt: "Learn about the most common dental issues and how to prevent them effectively.",
    image: "/images/dental-procedure.jpg",
    author: "Dr. A.N. Upadhyay",
    date: "2024-12-25",
    readTime: "6 min read",
    category: "Prevention",
    slug: "common-dental-problems",
  },
]

export default function BlogPage() {
  return (
    <div className="min-height-screen">
      <Header />

      {/* Hero Section */}
      <div className="blog-hero-section">
        <div className="container">
          <div className="text-center">
            <h1 className="blog-hero-title">Dental Health Blog</h1>
            <p className="blog-hero-subtitle">Expert advice and tips for maintaining optimal oral health</p>
            <p className="blog-hero-description">
              Stay informed with the latest dental care insights, preventive tips, and treatment information from Dr.
              A.N. Upadhyay at Aayu Dental Paradise.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="blog-posts-grid-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
