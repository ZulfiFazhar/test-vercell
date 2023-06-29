// import "./navbar.css";

function Home() {
  return (
    <div>
      <div className="container">
        <h1>Welcome!</h1>
        <a href="#" className="main-link">
          My Blog
        </a>
      </div>

      <div className="project-typo">
        <h2>FEATURED POSTS</h2>
        <a href="#">See All Posts</a>
      </div>

      <div className="card-container main-gallery">
        <div className="card gallery-cell">
          <span className="img1"></span>
          <p>Card 1</p>
        </div>
        <div className="card gallery-cell">
          <span className="img2"></span>
          <p>Card 2</p>
        </div>
        <div className="card gallery-cell">
          <span className="img3"></span>
          <p>Card 3</p>
        </div>
      </div>

      <div className="container second">
        <h1>About Me</h1>
      </div>

      <div className="blank"></div>
    </div>
  );
}

export default Home;
