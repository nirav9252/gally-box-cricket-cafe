import React from "react";
import "./dashboard.css";
import { Helmet } from "react-helmet";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

const HomePage = () => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  React.useEffect(() => {
    // Set the tab title directly here
    document.title = "Gally Box Cricket and Cafe";
  }, []); // Empty dependency array ensures it runs only once when the component is mounted

  return (
    <>
      <Helmet>
        <title>Gally Box Cricket and Cafe</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./dashboard.css" />
      </Helmet>

      <header>
        <div className="hamburger">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            {isSidebarOpen ? <IoCloseSharp /> : <RxHamburgerMenu />}
          </button>
        </div>
        <div className="logo-container">
          <div className="title">
            <h1>Gally Box Cricket & Cafe</h1>
            <p>Box Cricket | Cafe | Pickleball</p>
          </div>
        </div>
      </header>

      {isSidebarOpen ? (
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <nav>
            <a href="#about" onClick={toggleSidebar}>
              About Us
            </a>
            <a href="#services" onClick={toggleSidebar}>
              Services
            </a>
            <a href="#booking" onClick={toggleSidebar}>
              Booking
            </a>
            <a href="#menu" onClick={toggleSidebar}>
              Menu
            </a>
            <a href="#gallery" onClick={toggleSidebar}>
              Gallery
            </a>
          </nav>
        </div>
      ) : (
        <nav className="nav-mob-none">
          <a href="#about" onClick={toggleSidebar}>
            About Us
          </a>
          <a href="#services" onClick={toggleSidebar}>
            Services
          </a>
          <a href="#booking">Booking</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
        </nav>
      )}

      <section id="about">
        <h2>About Us</h2>
        <p>
          Welcome to Gally Box Cricket & Cafe — your go-to destination for
          high-energy box cricket, relaxing cafe vibes, and thrilling pickleball
          matches. Whether you're here to play, chill, or compete, we’ve got
          something for everyone.
        </p>
      </section>

      <section id="services">
        <h2>Our Services</h2>
        <div className="services">
          <div className="card">
            <h3>Box Cricket</h3>
            <p>
              Premium turf, LED lighting, and score tracking for all-level
              players and tournaments.
            </p>
          </div>
          <div className="card">
            <h3>Cafe</h3>
            <p>
              Enjoy delicious snacks, beverages, and chill time with your squad
              post-match.
            </p>
          </div>
          <div className="card">
            <h3>Pickleball</h3>
            <p>
              Join the latest sports craze with our dedicated pickleball courts
              and gear.
            </p>
          </div>
          <div className="card">
            <h3>Birthday Event</h3>
            <p>Perfect space and services for fun birthday celebrations.</p>
          </div>
          <div className="card">
            <h3>Corporate Event</h3>
            <p>
              Unleash your competitive edge on our premium cricket turf and
              pickleball courts. Join the excitement now!
            </p>
          </div>
        </div>
      </section>

      <section id="booking">
        <h2>Booking</h2>
        <p>
          Call us{" "}
          <strong>
            <a href="tel:+919727022002">+91 9727022002</a>
          </strong>{" "}
          or{" "}
          <strong>
            <a href="tel:+919723885965">+91 9723885965</a>
          </strong>{" "}
          to book your slot!
        </p>
      </section>

      <section id="menu">
        <h2>Cafe Menu Highlights</h2>
        <ul className="horizontal-menu">
          <li>Masala Maggie</li>
          <li>Cold Coffee</li>
          <li>French Fries</li>
          <li>Grilled Sandwiches</li>
          <li>Energy Drinks</li>
        </ul>
      </section>

      <section id="gallery">
        <h2>Gallery</h2>
        <div className="gallery">
          <img
            src="https://content3.jdmagicbox.com/v2/comp/ahmedabad/d9/079pxx79.xx79.230518161332.q5d9/catalogue/gally-box-cricket-and-cafe-mumatpura-ahmedabad-u17kkbwjo4.jpg"
            alt="Cricket Turf"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzmVYAGGhQz99i3cTCPlDm6az-GHdZknCUw&s"
            alt="Cafe"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJYcEpOq6NYFYMo1zLSv6AkunxA5H-LyeuA&s"
            alt="Pickleball Court"
          />
        </div>
      </section>

      <footer>Gally Box Cricket & Cafe &copy;2025. All rights reserved.</footer>
    </>
  );
};

export default HomePage;
