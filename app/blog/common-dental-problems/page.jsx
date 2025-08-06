import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogPost from "@/components/blog-post"
import "../../globals.css" // Ensure global styles are imported
import "../blog.css" // Blog specific styles

const postContent = {
  title: "Common Dental Problems and Prevention",
  author: "Dr. A.N. Upadhyay",
  date: "2024-12-25",
  readTime: "6 min read",
  category: "Prevention",
  image: "/images/dental-procedure.jpg",
  content: `
    <p>Understanding common dental problems and how to prevent them is key to maintaining excellent oral health. Early recognition and prevention can save you from pain, extensive treatments, and costly procedures. Let's explore the most frequent dental issues and effective prevention strategies.</p>

    <h2>1. Tooth Decay (Cavities)</h2>
    
    <h3>What It Is</h3>
    <p>Tooth decay occurs when bacteria in your mouth produce acids that erode tooth enamel, creating holes (cavities) in your teeth.</p>

    <h3>Signs and Symptoms</h3>
    <ul>
      <li>Tooth sensitivity to hot, cold, or sweet foods</li>
      <li>Visible holes or pits in teeth</li>
      <li>Brown, black, or white staining on tooth surfaces</li>
      <li>Toothache or spontaneous pain</li>
      <li>Pain when biting down</li>
    </ul>

    <h3>Prevention Strategies</h3>
    <ul>
      <li><strong>Brush twice daily:</strong> Use fluoride toothpaste</li>
      <li><strong>Floss daily:</strong> Remove plaque between teeth</li>
      <li><strong>Limit sugary foods:</b> Especially sticky candies and sodas</li>
      <li><strong>Regular dental checkups:</strong> Every 6 months for early detection</li>
      <li><strong>Dental sealants:</strong> Protective coating for back teeth</li>
    </ul>

    <h2>2. Gum Disease (Gingivitis and Periodontitis)</h2>
    
    <h3>What It Is</h3>
    <p>Gum disease is an infection of the tissues that support your teeth, ranging from mild gingivitis to severe periodontitis.</p>

    <h3>Signs and Symptoms</h3>
    <ul>
      <li>Red, swollen, or tender gums</li>
      <li>Bleeding gums during brushing or flossing</li>
      <li>Persistent bad breath</li>
      <li>Receding gums</li>
      <li>Loose teeth</li>
      <li>Changes in bite or tooth alignment</li>
    </ul>

    <h3>Prevention Strategies</h3>
    <ul>
      <li><strong>Excellent oral hygiene:</strong> Brush and floss daily</li>
      <li><strong>Regular professional cleanings:</strong> Remove tartar buildup</li>
      <li><strong>Don't smoke:</strong> Tobacco use increases gum disease risk</li>
      <li><strong>Healthy diet:</strong> Rich in vitamins C and D</li>
      <li><strong>Manage stress:</strong> Can affect immune system and gum health</li>
    </ul>

    <h2>3. Tooth Sensitivity</h2>
    
    <h3>What It Is</h3>
    <p>Tooth sensitivity occurs when the tooth's protective enamel is worn down, exposing the underlying dentin.</p>

    <h3>Signs and Symptoms</h3>
    <ul>
      <li>Sharp pain when consuming hot or cold foods</li>
      <li>Discomfort when eating sweet or acidic foods</li>
      <li>Pain when brushing or flossing</li>
      <li>Sensitivity to cold air</li>
    </ul>

    <h3>Prevention Strategies</h3>
    <ul>
      <li><strong>Use soft-bristled toothbrush:</strong> Avoid aggressive brushing</li>
      <li><strong>Desensitizing toothpaste:</strong> Contains compounds that block pain</li>
      <li><strong>Limit acidic foods:</strong> Citrus fruits, wine, sodas</li>
      <li><strong>Don't grind teeth:</strong> Use a nightguard if necessary</li>
      <li><strong>Fluoride treatments:</strong> Strengthen tooth enamel</li>
    </ul>

    <h2>4. Bad Breath (Halitosis)</h2>
    
    <h3>What It Is</h3>
    <p>Persistent bad breath that doesn't improve with regular oral hygiene, often caused by bacteria, food particles, or underlying health issues.</p>

    <h3>Common Causes</h3>
    <ul>
      <li>Poor oral hygiene</li>
      <li>Gum disease</li>
      <li>Dry mouth</li>
      <li>Certain foods (garlic, onions)</li>
      <li>Tobacco use</li>
      <li>Medical conditions</li>
    </ul>

    <h3>Prevention Strategies</h3>
    <ul>
      <li><strong>Maintain oral hygiene:</strong> Brush, floss, and clean tongue</li>
      <li><strong>Stay hydrated:</strong> Drink plenty of water</li>
      <li><strong>Regular dental visits:</strong> Address underlying issues</li>
      <li><strong>Avoid tobacco:</strong> Smoking and chewing tobacco</li>
      <li><strong>Chew sugar-free gum:</strong> Stimulates saliva production</li>
    </ul>

    <h2>5. Tooth Erosion</h2>
    
    <h3>What It Is</h3>
    <p>The gradual wearing away of tooth enamel due to acid exposure, making teeth more susceptible to decay and sensitivity.</p>

    <h3>Signs and Symptoms</h3>
    <ul>
      <li>Tooth sensitivity</li>
      <li>Yellowing teeth (dentin showing through thin enamel)</li>
      <li>Rounded teeth</li>
      <li>Transparent or thin-looking tooth edges</li>
      <li>Small dents on chewing surfaces</li>
    </ul>

    <h3>Prevention Strategies</h3>
    <ul>
      <li><strong>Limit acidic drinks:</strong> Sodas, sports drinks, fruit juices</li>
      <li><strong>Use a straw:</strong> Minimize contact with teeth</li>
      <li><strong>Rinse with water:</strong> After consuming acidic foods or drinks</li>
      <li><strong>Wait to brush:</strong> 30-60 minutes after acid exposure</li>
      <li><strong>Chew sugar-free gum:</strong> Neutralizes acids</li>
    </ul>

    <h2>6. Teeth Grinding (Bruxism)</h2>
    
    <h3>What It Is</h3>
    <p>Unconscious grinding or clenching of teeth, often occurring during sleep or times of stress.</p>

    <h3>Signs and Symptoms</h3>
    <ul>
      <li>Worn, flattened, or chipped teeth</li>
      <li>Jaw pain or stiffness</li>
      <li>Headaches, especially in the morning</li>
      <li>Earache</li>
      <li>Sleep disruption</li>
    </ul>

    <h3>Prevention Strategies</h3>
    <ul>
      <li><strong>Stress management:</strong> Exercise, meditation, counseling</li>
      <li><strong>Night guard:</strong> Custom-fitted protective appliance</li>
      <li><strong>Avoid stimulants:</strong> Caffeine and alcohol before bed</li>
      <li><strong>Good sleep hygiene:</strong> Regular sleep schedule</li>
      <li><strong>Treat underlying conditions:</strong> Sleep apnea, anxiety</li>
    </ul>

    <h2>7. Oral Cancer</h2>
    
    <h3>What It Is</h3>
    <p>Cancer that develops in any part of the mouth, including lips, tongue, cheeks, floor of mouth, or throat.</p>

    <h3>Risk Factors</h3>
    <ul>
      <li>Tobacco use (smoking or chewing)</li>
      <li>Heavy alcohol consumption</li>
      <li>HPV infection</li>
      <li>Excessive sun exposure (lip cancer)</li>
      <li>Age (most common after 40)</li>
    </ul>

    <h3>Prevention Strategies</h3>
    <ul>
      <li><strong>Avoid tobacco:</strong> All forms of tobacco products</li>
      <li><strong>Limit alcohol:</strong> Moderate consumption</li>
      <li><strong>Use lip protection:</strong> SPF lip balm</li>
      <li><strong>Regular dental exams:</strong> Include oral cancer screening</li>
      <li><strong>Self-examination:</strong> Check for unusual changes monthly</li>
    </ul>

    <h2>When to See Your Dentist</h2>
    <p>Schedule an appointment if you experience:</p>
    <ul>
      <li>Persistent tooth pain</li>
      <li>Swollen or bleeding gums</li>
      <li>Loose teeth</li>
      <li>Persistent bad breath</li>
      <li>White or red patches in your mouth</li>
      <li>Difficulty chewing or swallowing</li>
      <li>Jaw pain or clicking</li>
    </ul>

    <h2>The Power of Prevention</h2>
    <p>Most dental problems are preventable with:</p>
    <ul>
      <li>Consistent daily oral hygiene</li>
      <li>Regular professional dental care</li>
      <li>Healthy lifestyle choices</li>
      <li>Early intervention when problems arise</li>
    </ul>

    <p>At Aayu Dental Clinic, we believe prevention is the best treatment. Our comprehensive approach focuses on educating patients and providing personalized preventive care to help you avoid these common dental problems. Remember, early detection and treatment are always more comfortable and cost-effective than waiting until problems become severe.</p>
  `,
}

export default function CommonDentalProblemsPost() {
  return (
    <div className="min-height-screen">
      <Header />
      <BlogPost post={postContent} />
      <Footer />
    </div>
  )
}
