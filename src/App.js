import React from "react";
import avatarImage from "./assets/img/avatar-2.svg";
import telkomImage from "./assets/img/telkom.webp";
// import itenasImage from "../assets/img/itenas.webp";
// import almasoemImage from "../assets/img/almasoem2.webp";
// import astranautsImage from "../assets/img/Astranauts-2023.webp";
import "./App.css";
import "./stars.css";

const Home = () => {
  return (
    <section
      id="Home"
      className="menu animate-top"
      style={{ display: "block" }}
    >
      {/* Hero Section */}
      <section className="hero">
        <article className="hero-left">
          <h1 data-content="Hi, I'm Zulfi Fadilah Azhar">
            Hi, I'm Zulfi Fadilah Azhar
          </h1>
          <p>Informatics Engineering, Cloud and Data Enthusiast.</p>
          <p>
            I'm a second-semester Undergraduate Student at Universitas Komputer
            Indonesia.
          </p>
          <a href="mailto:zulfi.fazhar12@gmail.com">Contact Me!</a>
        </article>
        <article className="hero-right">
          <img src={avatarImage} alt="hero-section-avatar" width="80%" />
        </article>
      </section>

      {/* About Section */}
      <section className="about">
        <article>
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
          <div className="about-typo">
            <h1>About Me</h1>
            <p>
              Currently, I'm part of a division called{" "}
              <a href="https://codelabs.unikom.ac.id/">UNIKOM CodeLabs</a> as a
              Data and Cloud Researcher. I'm also a member of the{" "}
              <a href="https://gdsc.community.dev/universitas-komputer-indonesia/">
                Google Developer Student Clubs UNIKOM
              </a>{" "}
              Web Development division specializing in Front-End Developer. I'm
              interested in the world of technology and always follow the
              developments of technology, whether it's a Smartphone, PC, and
              also the development of the world of IoT.
            </p>
          </div>
        </article>
      </section>

      {/* Education Section */}
      <section className="education">
        <div className="education-title">
          <h1>Education and Experience</h1>
          <p>My timeline since High School</p>
        </div>

        <section className="timeline-section">
          <div className="timeline-items">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">June 2016 - May 2019</div>
              <div className="timeline-content">
                <h3>SMK Negeri 2 Cimahi</h3>
                <p>Mechatronics, Robotics, and Automation Engineering</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Sep 2016 - Apr 2019</div>
              <div className="timeline-content">
                <h3>Robotic Community SMKN 2 Cimahi</h3>
                <p>
                  Sep 2016 - Apr 2019 <br />
                  Member <br />
                  <br />
                  Sep 2017 - Aug 2018 <br />
                  Leader
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Awards Section */}
      <section className="awards">
        <h1>Honors and Awards</h1>
        <p>My Achievements since High School</p>
        <div className="cards-container">
          {/* Card 1 */}
          <div className="cards">
            <div className="card-img">
              <img
                src="assets/img/telkom.webp"
                alt="Telkom Competition"
                width="100%"
              />
            </div>
            <div className="card-title">
              1st Place Winner of Innovation Competition
            </div>
            <div className="card-subtitle">
              Issued by Telkom University <br />
              Feb 2018
            </div>
          </div>
          {/* End Card 1 */}

          {/* Card 1 */}
          <div className="cards">
            <div className="card-img">
              <img src={telkomImage} alt="Telkom Competition" width="100%" />
            </div>
            <div className="card-title">
              1st Place Winner of Innovation Competition
            </div>
            <div className="card-subtitle">
              Issued by Telkom University <br />
              Feb 2018
            </div>
          </div>
          {/* End Card 1 */}

          {/* Card 1 */}
          <div className="cards">
            <div className="card-img">
              <img
                src="assets/img/telkom.webp"
                alt="Telkom Competition"
                width="100%"
              />
            </div>
            <div className="card-title">
              1st Place Winner of Innovation Competition
            </div>
            <div className="card-subtitle">
              Issued by Telkom University <br />
              Feb 2018
            </div>
          </div>
          {/* End Card 1 */}

          {/* Card 1 */}
          <div className="cards">
            <div className="card-img">
              <img
                src="assets/img/telkom.webp"
                alt="Telkom Competition"
                width="100%"
              />
            </div>
            <div className="card-title">
              1st Place Winner of Innovation Competition
            </div>
            <div className="card-subtitle">
              Issued by Telkom University <br />
              Feb 2018
            </div>
          </div>
          {/* End Card 1 */}
        </div>
      </section>
    </section>
  );
};

export default Home;
