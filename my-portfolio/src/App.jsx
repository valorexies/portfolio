
/*
adds the tab state, renders draggable windows
openTab stores which tab is open, clicking an icon sets it, closing it sets it back to null
*/

import {useState} from "react";
import "./styles/stylesheet.css";
import MainWindow from "./components/MainWindow.jsx";
import BubbleLayer from "./components/BubbleLayer.jsx";
import IconGrid from "./components/IconGrid.jsx";

export default function App() {
  const [openTab, setOpenTab] = useState(null);


  return (
    <>
      <BubbleLayer />
      <MainWindow />
      <IconGrid setOpenTab={setOpenTab} />

      {openTab === "about" && (
      <DraggableTab title="About">
        <p>About content here</p>
      </DraggableTab>
      )}

      {openTab === "links" && (
      <DraggableTab title="Links">
        <p>Links content here</p>
      </DraggableTab>
      )}

      {openTab === "work" && (
      <DraggableTab title="Work">
        <p>Work content here</p>
      </DraggableTab>
      )}

      {openTab === "FAQ" && (
      <DraggableTab title="FAQ">
        <p>FAQ content here</p>
      </DraggableTab>
      )}

      {openTab === "Contact" && (
      <DraggableTab title="Contact">
        <p>Contact content here</p>
      </DraggableTab>
      )}

    </>
  );
}


