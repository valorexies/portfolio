
/* 
makes the window draggable, shows a title, shows a close button
*/

import { Rnd } from "react-rnd";

export default function DraggableTab({ title, children, onClose }) {
  return (
    <Rnd
      default={{ x: 120, y: 120, width: 320, height: 240 }}
      dragHandleClassName="tab-title"
      enableResizing={{
        top: false,
        right: true,
        bottom: true,
        left: false,
        topRight: false,
        bottomRight: true,
        bottomLeft: false,
        topLeft: false,
      }}
      className="draggable-tab"
    >
      <div className="tab-title">
        <span>{title}</span>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>

      <div className="tab-content">
        {children}
      </div>
    </Rnd>
  );
}

