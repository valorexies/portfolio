
/*
sends clicks to app.jsx so when you click on icon it opens it and app.jsx reacts to open the correct draggable window
*/

export default function IconGrid({ setOpenTab }) {
  const icons = [
    { label: "about", id: "about"},
    { label: "links", id: "links"},
    { label: "work", id: "work"},
    { label: "faq", id: "faq",},
    { label: "contact", id: "contact"}
  ];

  return (
    <div className="icon-grid">
      {icons.map(icon => (
        <div
          key={icon.id}
          className="icon-item"
           onClick={() => console.log(`Open ${icon.id} window`)}
        >
          <div className="icon-pixel-box"></div>
          <span>{icon.label}</span>
        </div>
      ))}
    </div>
  );
}

