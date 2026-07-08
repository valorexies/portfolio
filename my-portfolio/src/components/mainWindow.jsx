export default function MainWindow({setOpenTab}) {
  return (
    <div className="main-window">

      <div className="title-bar">
        <span>IMAGE</span>
        <img src="/cancel_icon.jpg" className="cancel_icon" alt="close" />
      </div>

      <div className="menu-bar">
        <span>FILE</span>
        <span>EDIT</span>
        <span>VIEW</span>
        <span>HELP</span>
      </div>

      
      {/* Main Content */}
      <div className="home-content">
        <h1>hi, i'm alexia</h1>
        <p>western university</p>
        <p>comp sci student</p>
      {/* Icon Row */}
      </div>

      <div className="icon-row">
        <div className="icon-item" onClick={() => setOpenTab("about")}>
          <img src="/about.png" className="icon-image" alt="about" />
          <span className="icon-label">about</span>
        </div>

        <div className="icon-item" onClick={() => setOpenTab("projects")}>
          <img src="/projects.png" className="icon-image" alt="projects" />
          <span className="icon-label">projects</span>
        </div>

        <div className="icon-item" onClick={() => setOpenTab("experience")}>
          <img src="/work.png" className="icon-image" alt="work" />
          <span className="icon-label">experience</span>
        </div>

        <div className="icon-item" onClick={() => setOpenTab("faq")}>
          <img src="/faq.png" className="icon-image" alt="faq" />
          <span className="icon-label">FAQ</span>
        </div>

        <div className="icon-item" onClick={() => setOpenTab("contact")}>
          <img src="/contact.png" className="icon-image" alt="contact" />
          <span className="icon-label">contact</span>
        </div>
      </div>

       
      
    </div>
  );
}