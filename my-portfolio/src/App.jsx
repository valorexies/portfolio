
/*
adds the tab state, renders draggable windows
openTab stores which tab is open, clicking an icon sets it, closing it sets it back to null
*/

import {useRef, useState} from "react";
import "./styles/stylesheet.css";
import MainWindow from "./components/MainWindow.jsx";
import DraggableTab from "./components/DraggableTab.jsx";
import FAQItem from "./components/FAQItem.jsx";
import ExperienceItem from "./components/ExperienceItem.jsx";



export default function App() {
  const [openTab, setOpenTab] = useState(null);
  
  /* music */
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };


  return (
    <>
      <audio ref={audioRef} src="/WarmCupofCoffee.mp3" loop />

      <button onClick={toggleMusic} className="music-btn">
        {isPlaying ? "🔊" : "🔇"}
      </button>

      <MainWindow setOpenTab={setOpenTab}/>
      

      {openTab === "about" && (
        <DraggableTab title="About" onClose={() => setOpenTab(null)}>
          <h1>Alexia Lee</h1>
          <p>hi my name is alexia lee and i’m a 3rd year student at western university. i love designing websites and apps where i specialize in the frontend and 
            i am also interested in cybersecurity. aside from that, some of my favourite hobbies are gaming, crocheting, and reading. </p>
        </DraggableTab>
      )}

      {openTab === "projects" && (
        <DraggableTab title="Projects" onClose={() => setOpenTab(null)}>
          <h3>Stellar Agenda</h3>
          <ul>
            <li> to-do list website made for SheHacks12+ </li>
            <li> my first website and my introduction to website design</li>
          </ul>

          <h3> Lexibrynth </h3>
          <ul>
            <li> a typing game created for CS2212</li>
            <li> created using Java and JavaSwing</li>
            <li> made by Alexia Lee, Eric Zhang, Leon Li, Alan Lu, and Kevin Qi</li>
          </ul>
        </DraggableTab>
      )}

      {openTab === "experience" && (
        <DraggableTab title="Experience" onClose={() => setOpenTab(null)}>
          <ExperienceItem
            title="Code Ninjas"
            role="Code Sensei"
            location="Scarborough, ON"
            dates="June 2026 – August 2026"
            description="Taught coding and STEM concepts to children through interactive lessons focused on programming, robotics, and game development."
            contributions={[
              "Mentored 30+ students through coding camps and workshops.",
              "Taught Scratch, Roblox Studio, LEGO Robotics, and introductory Cybersecurity.",
              "Helped students debug programs while developing logical thinking and programming fundamentals.",
              "Adapted lessons for different learning levels to create an engaging classroom environment.",
              "Fostered teamwork, creativity, and confidence in technology."
            ]}
            skillsUsed="Scratch • Roblox Studio • LEGO Robotics • Teaching • Communication"
          />

          <ExperienceItem
            title="CEFS Centre"
            role="Camp Counsellor"
            location="Markham, ON"
            dates="June 2025 – August 2025"
            description="Led educational and recreational programs for children while supporting daily camp operations and community outreach."
            contributions={[
              "Supervised 120+ campers in academic and recreational programs.",
              "Tutored students in core subjects and supported individualized learning.",
              "Planned and led STEM, arts, and life skills activities.",
              "Produced promotional videos and helped market a new camp location.",
              "Assisted with logistics, event coordination, and daily camp operations."
            ]}
            skillsUsed="Leadership • Organization • STEM Education • Video Editing • Teamwork"
          />

          <ExperienceItem
            title="Golden Joy Hakka Restaurant"
            role="Server"
            location="Etobicoke, ON"
            dates="June 2025 – July 2025"
            description="Provided customer service in a fast-paced restaurant while supporting front-of-house and kitchen operations."
            contributions={[
              "Served customers and processed orders using a POS system.",
              "Prepared takeout orders accurately and efficiently.",
              "Maintained cleanliness and food safety standards.",
              "Assisted kitchen staff with inventory and daily operations."
            ]}
            skillsUsed="Customer Service • POS Systems • Teamwork • Time Management"
          />

          <ExperienceItem
            title="Ontario Science Centre"
            role="Co-op – Retail & Onsite Sales"
            location="North York, ON"
            dates="February 2023 – May 2023"
            description="Supported retail operations through inventory management, customer service, and merchandising projects."
            contributions={[
              "Maintained inventory records using Microsoft Excel.",
              "Assisted with annual inventory audits.",
              "Helped transition retail operations to Shopify.",
              "Designed promotional materials and supported visitors."
            ]}
            skillsUsed="Shopify • Microsoft Excel • Inventory Management • Customer Service"
          />

        <div className="skills-section">
          <div className="skills-group">
            <h4>Languages</h4>
            <div className="skills-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">C</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
            </div>
          </div>

          <div className="skills-group">
            <h4>Frameworks & Libraries</h4>
            <div className="skills-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Java Swing</span>
            </div>
          </div>

          <div className="skills-group">
            <h4>Developer Tools</h4>
            <div className="skills-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">Linux</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Vercel</span>
            </div>
          </div>

          <div className="skills-group">
            <h4>Soft Skills</h4>
            <div className="skills-tags">
              <span className="skill-tag">Problem Solving</span>
              <span className="skill-tag">Team Collaboration</span>
              <span className="skill-tag">Communication</span>
              <span className="skill-tag">Leadership</span>
              <span className="skill-tag">Adaptability</span>
              <span className="skill-tag">Time Management</span>
            </div>
          </div>

          <div className="skills-group">
            <h4>Relevant Coursework</h4>
            <div className="skills-tags">
              <span className="skill-tag">Data Structuure and Algorithm</span>
              <span className="skill-tag">Software Engineering</span>
              <span className="skill-tag">Operating Systems</span>
              <span className="skill-tag">Computer Organization and Architecture</span>
              <span className="skill-tag">Discrete Math</span>
              <span className="skill-tag">Statistics</span>
              <span className="skill-tag">Linear Algebra</span>

            </div>
          </div>

        </div>  
        </DraggableTab>
      )}

      {openTab === "faq" && (
          <DraggableTab title="FAQ" onClose={() => setOpenTab(null)}>
            <FAQItem
              question="Why did you decide to pursue computer science?"
              answer="growing up i always thought i'd become a doctor, unfortunately in grade 11 is where i realized that perhaps the medical field wasn’t for me as i was failing chemistry 
              and physics. one day when i was playing valorant, i met a player who studied software engineering. he explained the content he learned and real life experience 
              and i quickly became interested. after much research and discussion with parents and teachers, i dropped chemistry and physics and took up computer science where i 
              quickly fell in love with coding and the satisfaction of seeing my projects come to life through much effort."
            />

            <FAQItem
              question="What are your favourite games?"
              answer="valorant, minecraft, peak, repo, meccha chameleon, deadlock"
            />

            <FAQItem
              question="What have you crocheted?"
              answer="i specialize in amigurumi designs. i love gifting them! i have previously made some bunnies, a turtle, a bear, 
              a frog, a whale, beret hat, flowers, rat, snorlax, and more."
            />
          </DraggableTab>
      )}

      {openTab === "contact" && (
        <DraggableTab title="Contact" onClose={() => setOpenTab(null)}>
          <p>email: lee.alexia10@gmail.com</p>
          <p> linkedin: <a href="https://www.linkedin.com/in/alexia-lee26/" target="_blank" rel="noopener noreferrer">linkedin.com/in/alexia-lee26</a> </p>
          <p> github: <a href="https://github.com/valorexies" target="_blank" rel="noopener noreferrer">github.com/valorexies</a> </p>
          <p> phone number: 647-510-3889</p>
        </DraggableTab>
      )}
  
    </>
  );
}


