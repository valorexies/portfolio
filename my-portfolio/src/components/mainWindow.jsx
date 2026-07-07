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
        </div>

        <div className="icon-item" onClick={() => setOpenTab("links")}>
          <img src="/link.png" className="icon-image" alt="link" />
        </div>

        <div className="icon-item" onClick={() => setOpenTab("work")}>
          <img src="/work.png" className="icon-image" alt="work" />
        </div>

        <div className="icon-item" onClick={() => setOpenTab("faq")}>
          <img src="/faq.png" className="icon-image" alt="faq" />
        </div>

        <div className="icon-item" onClick={() => setOpenTab("contact")}>
          <img src="/contact.png" className="icon-image" alt="contact" />
        </div>
      </div>

       
      

      {/* Decorations */}
      <div className="decorations">
        <img src="/bubble.png" className="bubble" alt="" />
        <img src="/bubble.png" className="bubble" alt="" />
      </div>
    </div>
  );
}