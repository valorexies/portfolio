
/*
sends clicks to app.jsx so when you click on icon it opens it and app.jsx reacts to open the correct draggable window
*/

export default function IconGrid({ setOpenTab }) {
  const icons = [
    { label: "about", id: "about", img: "/about.png" },
    { label: "links", id: "links", img: "/link.png" },
    { label: "work", id: "work", img: "/work.png" },
    { label: "faq", id: "faq", img: "/faq.png" },
    { label: "contact", id: "contact", img: "/contact.png" }
  ];

  return (
    <div className="icon-grid">
      {icons.map(icon => (
        <div
          key={icon.id}
          className="icon-item"
          onClick={() => setOpenTab(icon.id)}
        >
          <img src={icon.img} className="icon-image" alt={icon.label} />
          <span>{icon.label}</span>
        </div>
      ))}
    </div>
  );
}

