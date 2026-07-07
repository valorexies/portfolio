
/*
adds the tab state, renders draggable windows
openTab stores which tab is open, clicking an icon sets it, closing it sets it back to null
*/

import {useState} from "react";
import "./styles/stylesheet.css";
import MainWindow from "./components/MainWindow.jsx";
import DraggableTab from "./components/DraggableTab.jsx";


export default function App() {
  const [openTab, setOpenTab] = useState(null);


  return (
    <>

      <MainWindow setOpenTab={setOpenTab}/>
      

      {openTab === "about" && (
        <DraggableTab title="About" onClose={() => setOpenTab(null)}>
          <p>About content here</p>
        </DraggableTab>
      )}

      {openTab === "links" && (
        <DraggableTab title="Links" onClose={() => setOpenTab(null)}>
          <p>Links content here</p>
        </DraggableTab>
      )}

      {openTab === "work" && (
        <DraggableTab title="Work" onClose={() => setOpenTab(null)}>
          <p>Work content here</p>
        </DraggableTab>
      )}

      {openTab === "faq" && (
        <DraggableTab title="FAQ" onClose={() => setOpenTab(null)}>
          <p>FAQ content here</p>
        </DraggableTab>
      )}

      {openTab === "contact" && (
        <DraggableTab title="Contact" onClose={() => setOpenTab(null)}>
          <p>Contact content here</p>
        </DraggableTab>
      )}
  
    </>
  );
}


