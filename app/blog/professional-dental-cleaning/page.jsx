import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogPost from "@/components/blog-post"
import "../../globals.css" // Ensure global styles are imported
import "../blog.css" // Blog specific styles

const postContent = {
  title: "Professional Dental Cleaning: What to Expect",
  author: "Dr. A.N. Upadhyay",
  date: "2025-01-01",
  readTime: "7 min read",
  category: "Treatments",
  image: "/images/dental-examination.jpg",
  content: `
    <p>Professional dental cleaning is a cornerstone of preventive dental care. Even with excellent home care, professional cleanings are essential for maintaining optimal oral health. Let's explore what happens during a professional cleaning and why it's so important.</p>

    <h2>What is Professional Dental Cleaning?</h2>
    <p>Professional dental cleaning, also called prophylaxis, is a thorough cleaning performed by a dental hygienist or dentist. It removes plaque, tartar, and stains that cannot be eliminated through regular brushing and flossing at home.</p>

    <h2>The Step-by-Step Process</h2>
    
    <h3>1. Initial Examination</h3>
    <p>Before cleaning begins, we perform a thorough examination of your mouth, checking for:</p>
    <ul>
      <li>Signs of gum disease</li>
      <li>Cavities or tooth damage</li>
      <li>Oral cancer screening</li>
      <li>Overall oral health assessment</li>
    </ul>

    <h3>2. Plaque and Tartar Removal</h3>
    <p>Using specialized instruments called scalers, we carefully remove:</p>
    <ul>
      <li><strong>Plaque:</strong> Soft, sticky film of bacteria</li>
      <li><strong>Tartar (calculus):</strong> Hardened plaque that can only be removed professionally</li>
      <li>Buildup from hard-to-reach areas between teeth and along the gum line</li>
    </ul>

    <h3>3. Deep Cleaning with Gritty Toothpaste</h3>
    <p>We use a high-powered electric brush with special toothpaste to:</p>
    <ul>
      <li>Remove remaining plaque and surface stains</li>
      <li>Polish teeth to a smooth finish</li>
      <li>Make it harder for plaque to accumulate</li>
    </ul>

    <h3>4. Professional Flossing</h3>
    <p>Expert flossing helps:</p>
    <ul>
      <li>Remove any remaining debris</li>
      <li>Identify potential problem areas</li>
      <li>Demonstrate proper flossing technique</li>
    </ul>

    <h3>5. Fluoride Treatment</h3>
    <p>A fluoride treatment may be applied to:</p>
    <ul>
      <li>Strengthen tooth enamel</li>
      <li>Help prevent cavities</li>
      <li>Reduce tooth sensitivity</li>
    </ul>

    <h2>Benefits of Professional Cleaning</h2>
    <ul>
      <li><strong>Prevents gum disease:</strong> Removes bacteria that cause gingivitis and periodontitis</li>
      <li><strong>Prevents cavities:</strong> Eliminates plaque that produces cavity-causing acids</li>
      <li><strong>Freshens breath:</strong> Removes bacteria that cause bad breath</li>
      <li><strong>Brightens smile:</strong> Removes surface stains from coffee, tea, and tobacco</li>
      <li><strong>Early problem detection:</strong> Allows for early treatment of developing issues</li>
      <li><strong>Overall health benefits:</strong> Reduces risk of heart disease and other systemic conditions</li>
    </ul>

    <h2>How Often Should You Get Professional Cleanings?</h2>
    <p>Most patients benefit from cleanings every 6 months, but some may need more frequent cleanings if they have:</p>
    <ul>
      <li>Gum disease</li>
      <li>Heavy tartar buildup</li>
      <li>Certain medical conditions</li>
      <li>Tobacco use</li>
    </ul>

    <h2>What to Expect After Your Cleaning</h2>
    <p>After your professional cleaning, you may experience:</p>
    <ul>
      <li>Teeth feeling smoother and cleaner</li>
      <li>Slight sensitivity (temporary)</li>
      <li>Minor gum tenderness (if significant buildup was removed)</li>
      <li>Fresher breath</li>
      <li>Brighter-looking teeth</li>
    </ul>

    <h2>Maintaining Results at Home</h2>
    <p>To maximize the benefits of your professional cleaning:</p>
    <ul>
      <li>Brush twice daily with fluoride toothpaste</li>
      <li>Floss daily</li>
      <li>Use an antimicrobial mouthwash</li>
      <li>Limit sugary and acidic foods</li>
      <li>Don't smoke or use tobacco products</li>
      <li>Stay hydrated</li>
    </ul>

    <p>Professional dental cleanings are an investment in your long-term oral and overall health. At Aayu Dental Clinic, we provide gentle, thorough cleanings in a comfortable environment. Schedule your next cleaning today to maintain your healthiest smile!</p>
  `,
}

export default function ProfessionalCleaningPost() {
  return (
    <div className="min-height-screen">
      <Header />
      <BlogPost post={postContent} />
      <Footer />
    </div>
  )
}
