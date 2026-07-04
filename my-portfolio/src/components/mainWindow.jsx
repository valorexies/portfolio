export default function MainWindow() {
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
        <div className="icon-row">
          <div className="icon-item" onClick={() => console.log("about")}>about</div>
          <div className="icon-item" onClick={() => console.log("links")}>links</div>
          <div className="icon-item" onClick={() => console.log("work")}>work</div>
          <div className="icon-item" onClick={() => console.log("faq")}>faq</div>
          <div className="icon-item" onClick={() => console.log("contact")}>contact</div>
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
