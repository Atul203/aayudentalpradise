import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogPost from "@/components/blog-post"
import "../../globals.css" // Ensure global styles are imported
import "../blog.css" // Blog specific styles

const postContent = {
  title: "Essential Daily Oral Hygiene Routine",
  author: "Dr. A.N. Upadhyay",
  date: "2025-01-15",
  readTime: "5 min read",
  category: "Preventive Care",
  image: "/images/dental-cleaning.png",
  content: `
    <p>Maintaining excellent oral hygiene is the foundation of good dental health. A consistent daily routine can prevent most dental problems and keep your smile bright and healthy.</p>

    <h2>The Perfect Brushing Technique</h2>
    <p>Proper brushing is more than just moving a toothbrush around your mouth. Here's how to do it right:</p>
    <ul>
      <li><strong>Use the right toothbrush:</strong> Choose a soft-bristled toothbrush that fits comfortably in your mouth</li>
      <li><strong>Brush for 2 minutes:</strong> Divide your mouth into quadrants and spend 30 seconds on each</li>
      <li><strong>Use proper technique:</strong> Hold your brush at a 45-degree angle to your gums and use gentle circular motions</li>
      <li><strong>Don't forget your tongue:</strong> Gently brush your tongue to remove bacteria and freshen breath</li>
    </ul>

    <h2>The Importance of Flossing</h2>
    <p>Flossing removes plaque and food particles from between teeth where your toothbrush can't reach. Here's how to floss effectively:</p>
    <ul>
      <li>Use about 18 inches of floss, winding most around your middle fingers</li>
      <li>Gently guide the floss between your teeth using a rubbing motion</li>
      <li>Curve the floss into a C-shape against one tooth and slide it into the space between the gum and tooth</li>
      <li>Repeat for each tooth, using a clean section of floss each time</li>
    </ul>

    <h2>Choosing the Right Products</h2>
    <p>The products you use can make a significant difference in your oral health:</p>
    <ul>
      <li><strong>Toothpaste:</strong> Use fluoride toothpaste to help prevent cavities</li>
      <li><strong>Mouthwash:</strong> An antimicrobial mouthwash can help reduce bacteria and freshen breath</li>
      <li><strong>Toothbrush replacement:</strong> Replace your toothbrush every 3-4 months or after illness</li>
    </ul>

    <h2>Additional Tips for Optimal Oral Health</h2>
    <ul>
      <li>Brush twice daily - morning and before bed</li>
      <li>Floss at least once daily, preferably before bedtime</li>
      <li>Limit sugary and acidic foods and drinks</li>
      <li>Stay hydrated to maintain saliva production</li>
      <li>Don't use your teeth as tools</li>
      <li>Schedule regular dental checkups every 6 months</li>
    </ul>

    <p>Remember, consistency is key. Following this routine daily will help you maintain healthy teeth and gums for life. If you have any questions about your oral hygiene routine, don't hesitate to consult with our team at Aayu Dental Clinic.</p>
  `,
}

export default function DailyOralHygienePost() {
  return (
    <div className="min-height-screen">
      <Header />
      <BlogPost post={postContent} />
      <Footer />
    </div>
  )
}
