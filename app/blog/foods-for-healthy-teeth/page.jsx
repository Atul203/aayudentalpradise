import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogPost from "@/components/blog-post"
import "../../globals.css" // Ensure global styles are imported
import "../blog.css" // Blog specific styles

const postContent = {
  title: "Foods That Promote Healthy Teeth and Gums",
  author: "Dr. A.N. Upadhyay",
  date: "2025-01-05",
  readTime: "6 min read",
  category: "Nutrition",
  image: "/images/dental-health-concept.jpg",
  content: `
    <p>What you eat plays a crucial role in your oral health. The right foods can strengthen your teeth, protect your gums, and help prevent cavities, while the wrong choices can lead to decay and gum disease. Let's explore the best foods for dental health and which ones to limit.</p>

    <h2>Foods That Strengthen Your Teeth</h2>
    
    <h3>Dairy Products</h3>
    <p>Milk, cheese, and yogurt are excellent for dental health because they:</p>
    <ul>
      <li><strong>High in calcium:</strong> Essential for strong tooth enamel</li>
      <li><strong>Rich in phosphorus:</strong> Helps remineralize teeth</li>
      <li><strong>Contain casein:</strong> A protein that helps repair tooth enamel</li>
      <li><strong>Low in sugar:</strong> Won't feed harmful bacteria</li>
    </ul>

    <h3>Leafy Greens</h3>
    <p>Spinach, kale, and other leafy greens provide:</p>
    <ul>
      <li>High levels of calcium and folic acid</li>
      <li>Vitamins and minerals that promote gum health</li>
      <li>Natural cleaning action when chewed</li>
      <li>Low acidity that won't erode enamel</li>
    </ul>

    <h3>Crunchy Fruits and Vegetables</h3>
    <p>Apples, carrots, and celery offer multiple benefits:</p>
    <ul>
      <li><strong>Natural cleaning:</strong> Help scrub away plaque and food particles</li>
      <li><strong>Stimulate saliva:</strong> Nature's way of neutralizing acids</li>
      <li><strong>High water content:</strong> Helps rinse away bacteria</li>
      <li><strong>Rich in vitamins:</strong> Support overall oral health</li>
    </ul>

    <h2>Protein-Rich Foods for Oral Health</h2>
    
    <h3>Fish and Lean Meats</h3>
    <p>These provide essential nutrients:</p>
    <ul>
      <li><strong>Phosphorus:</strong> Works with calcium to strengthen teeth</li>
      <li><strong>Protein:</strong> Helps repair and maintain oral tissues</li>
      <li><strong>Vitamin D:</strong> Helps the body absorb calcium effectively</li>
    </ul>

    <h3>Nuts and Seeds</h3>
    <p>Almonds, walnuts, and seeds offer:</p>
    <ul>
      <li>Healthy fats that reduce inflammation</li>
      <li>Protein for tissue repair</li>
      <li>Minerals like calcium and magnesium</li>
      <li>Natural abrasive action to clean teeth</li>
    </ul>

    <h2>Beverages That Support Dental Health</h2>
    
    <h3>Water</h3>
    <p>The best drink for your teeth:</p>
    <ul>
      <li>Rinses away food particles and bacteria</li>
      <li>Helps maintain saliva production</li>
      <li>Contains fluoride (in many municipal supplies)</li>
      <li>Has no calories or acids to harm teeth</li>
    </ul>

    <h3>Green Tea</h3>
    <p>Contains beneficial compounds:</p>
    <ul>
      <li>Antioxidants that fight inflammation</li>
      <li>Natural fluoride content</li>
      <li>Antibacterial properties</li>
      <li>Helps reduce bad breath</li>
    </ul>

    <h2>Foods to Limit or Avoid</h2>
    
    <h3>Sugary Foods and Drinks</h3>
    <p>These feed harmful bacteria:</p>
    <ul>
      <li>Candy, cookies, and pastries</li>
      <li>Soda and fruit juices</li>
      <li>Sports and energy drinks</li>
      <li>Dried fruits (high in concentrated sugars)</li>
    </ul>

    <h3>Acidic Foods</h3>
    <p>Can erode tooth enamel:</p>
    <ul>
      <li>Citrus fruits (consume in moderation)</li>
      <li>Tomatoes and tomato-based products</li>
      <li>Vinegar-based dressings</li>
      <li>Wine and other alcoholic beverages</li>
    </ul>

    <h3>Sticky and Chewy Foods</h3>
    <p>These cling to teeth:</p>
    <ul>
      <li>Caramel and taffy</li>
      <li>Gummy candies</li>
      <li>Dried fruits</li>
      <li>Crackers and chips (can get stuck in teeth)</li>
    </ul>

    <h2>Smart Eating Tips for Dental Health</h2>
    <ul>
      <li><strong>Eat meals rather than snacking:</strong> Reduces acid attacks on teeth</li>
      <li><strong>Rinse with water:</strong> After eating acidic or sugary foods</li>
      <li><strong>Wait to brush:</strong> After consuming acidic foods, wait 30-60 minutes</li>
      <li><strong>Use a straw:</strong> When drinking sugary or acidic beverages</li>
      <li><strong>Choose natural sugars:</strong> Fresh fruits over processed sweets</li>
      <li><strong>Read labels:</strong> Watch for hidden sugars in processed foods</li>
    </ul>

    <h2>Sample Daily Menu for Dental Health</h2>
    <p><strong>Breakfast:</strong> Greek yogurt with berries and nuts</p>
    <p><strong>Lunch:</strong> Spinach salad with grilled chicken and cheese</p>
    <p><strong>Snack:</strong> Apple slices with almond butter</p>
    <p><strong>Dinner:</strong> Grilled salmon with steamed broccoli</p>
    <p><strong>Beverages:</strong> Water throughout the day, green tea with meals</p>

    <p>Remember, a balanced diet that's good for your overall health is also good for your teeth and gums. At Aayu Dental Clinic, we're happy to provide personalized nutrition advice as part of your comprehensive dental care plan.</p>
  `,
}

export default function FoodsForHealthyTeethPost() {
  return (
    <div className="min-height-screen">
      <Header />
      <BlogPost post={postContent} />
      <Footer />
    </div>
  )
}
