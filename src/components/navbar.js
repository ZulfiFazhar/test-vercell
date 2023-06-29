import "./css/navbar.css";

function Navbar() {
  return (
    <nav className="fixed">
      <div className="logo">
        <img src={require("../img/simple-logo.png")} alt="Logo" width="150px" />
      </div>

      <ul>
        <li>
          <a href="#" className="utama pilihan">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="utama pilihan">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="utama pilihan">
            Notion Page
          </a>
        </li>
        <li>
          <a href="#" className="utama pilihan">
            Projects
          </a>
        </li>
        <br />
        <li>
          <a href="#" className="pilihan">
            About
          </a>
        </li>
        <li>
          <a href="#" className="pilihan">
            Contact Me
          </a>
        </li>
        <li>
          <a href="#" className="pilihan">
            Bio Link
          </a>
        </li>
      </ul>

      <div className="menu-toggle">
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
