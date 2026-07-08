
/*
adds the tab state, renders draggable windows
openTab stores which tab is open, clicking an icon sets it, closing it sets it back to null
*/

import {useState} from "react";
import "./styles/stylesheet.css";
import MainWindow from "./components/MainWindow.jsx";
import DraggableTab from "./components/DraggableTab.jsx";
import FAQItem from "./components/FAQItem.jsx";



export default function App() {
  const [openTab, setOpenTab] = useState(null);


  return (
    <>

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
          <p>Work content here</p>
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


