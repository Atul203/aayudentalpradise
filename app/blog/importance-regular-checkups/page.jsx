import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogPost from "@/components/blog-post"
import "../../globals.css" // Ensure global styles are imported
import "../blog.css" // Blog specific styles

const postContent = {
  title: "The Importance of Regular Dental Checkups",
  author: "Dr. A.N. Upadhyay",
  date: "2025-01-10",
  readTime: "4 min read",
  category: "Preventive Care",
  image: "/images/dentist-patient-care.jpg",
  content: `
    <p>Regular dental checkups are one of the most important investments you can make in your overall health. Many people only visit the dentist when they experience pain or discomfort, but preventive care is far more effective and cost-efficient.</p>

    <h2>Why Regular Checkups Matter</h2>
    <p>Dental problems often develop silently, without obvious symptoms until they become serious. Regular checkups allow us to:</p>
    <ul>
      <li><strong>Detect problems early:</strong> Small cavities, gum disease, and other issues can be treated before they become painful and expensive</li>
      <li><strong>Prevent serious complications:</strong> Untreated dental problems can lead to infections, tooth loss, and even systemic health issues</li>
      <li><strong>Maintain oral health:</strong> Professional cleanings remove plaque and tartar that regular brushing can't eliminate</li>
      <li><strong>Save money:</strong> Preventive care costs far less than emergency treatments</li>
    </ul>

    <h2>What Happens During a Checkup</h2>
    <p>A typical dental checkup includes:</p>
    <ul>
      <li><strong>Comprehensive examination:</strong> We check your teeth, gums, tongue, and entire mouth for signs of problems</li>
      <li><strong>Professional cleaning:</strong> Removal of plaque, tartar, and stains that can't be removed at home</li>
      <li><strong>X-rays (when needed):</strong> To detect problems not visible during the visual examination</li>
      <li><strong>Oral cancer screening:</strong> Early detection of potentially serious conditions</li>
      <li><strong>Personalized advice:</strong> Recommendations for improving your home care routine</li>
    </ul>

    <h2>How Often Should You Visit?</h2>
    <p>Most patients should visit every 6 months, but some may need more frequent visits if they have:</p>
    <ul>
      <li>Gum disease</li>
      <li>History of cavities</li>
      <li>Certain medical conditions like diabetes</li>
      <li>Tobacco use</li>
      <li>Pregnancy</li>
    </ul>

    <h2>Signs You Need to Schedule a Checkup</h2>
    <p>Don't wait for your scheduled appointment if you experience:</p>
    <ul>
      <li>Tooth pain or sensitivity</li>
      <li>Bleeding or swollen gums</li>
      <li>Persistent bad breath</li>
      <li>Loose teeth</li>
      <li>Jaw pain or clicking</li>
      <li>White spots on teeth</li>
    </ul>

    <p>At Aayu Dental Clinic, we're committed to providing comprehensive preventive care in a comfortable, welcoming environment. Regular checkups are your best defense against dental problems and the key to maintaining a healthy, beautiful smile for life.</p>
  `,
}

export default function RegularCheckupsPost() {
  return (
    <div className="min-height-screen">
      <Header />
      <BlogPost post={postContent} />
      <Footer />
    </div>
  )
}
