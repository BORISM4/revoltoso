import { useEffect } from "react";
import Products from "./Products";
import Slider from "../components/Slider";

function Home() {
  const slides = [
    {
      imageUrl:
        "https://scontent.fsal2-2.fna.fbcdn.net/v/t39.30808-6/484555519_544672971983497_7093548915085959256_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF25e6ajK7ZBxUGfrfBr6qQVllUyUgdEhVWWVTJSB0SFYo79cHd4TWRr7O5jvrl6VIKku2O-DY1xCVRhIi7cVtw&_nc_ohc=izEjr47juooQ7kNvgELRZ_a&_nc_oc=AdhA6TnBmVA4zimIgo_KNT-XpO4O5JPixEmGWwT8dQc2v67o1K4N-qA_k-wLkRWdVq-QTOx-I3bADJU6bWU5qSsm&_nc_zt=23&_nc_ht=scontent.fsal2-2.fna&_nc_gid=j-NmK2XlQZm1JsIm73TtBw&oh=00_AYHk-1GKsEil5bVsHxVURVmPCxde8dhOV7OYdM82PKdS-A&oe=67DCFFD1",
      text: (
        <>
          <div style={{ fontFamily: "serif", fontSize: "4em" }}>Restaurant</div>
          <div style={{ fontSize: "1.5em", marginTop: "10px" }}>
            A taste of local ingredients & seasonal flavours
          </div>
          <div style={{ fontSize: "0.8em", marginTop: "20px" }}>
            WE ARE READY
          </div>
          <button
            style={{
              marginTop: "30px",
              padding: "10px 20px",
              backgroundColor: "#d2b48c", // Un color similar al de la imagen
              border: "none",
              borderRadius: "5px",
              color: "white",
              fontSize: "1em",
              cursor: "pointer",
            }}
          >
            Chef's Menu
          </button>
        </>
      ),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");

      if (header) {
        if (window.scrollY > 100) {
          header.classList.add("sticky-active");
        } else {
          header.classList.remove("sticky-active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <header className="sticky-header main-header sticky-header-elements-headeronly mainmenu-position-menu_in_header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="header-left">
                <a className="logo-link" href="index.html">
                  <img
                    src="upload/Barrel-restaurant-logo-black.png"
                    alt="Barrel"
                    className="regular-logo"
                  />
                  <img
                    src="upload/Barrel-restaurant-logo-white.png"
                    alt="Barrel"
                    className="light-logo"
                  />
                </a>
                <div
                  className="mobile-main-menu-toggle"
                  data-toggle="collapse"
                  data-target=".collapse"
                >
                  <i className="fa fa-bars"></i>
                </div>
              </div>

              <div className="header-center">
                <div
                  id="navbar"
                  className="navbar navbar-default clearfix mgt-mega-menu menu-right menu-uppercase menu-style-shadow"
                >
                  <div className="navbar-inner">
                    <div className="navbar-collapse collapse">
                      <ul id="menu-main-menu-restaurant-2" className="nav">
                        <li className="menu-item menu-item-has-children">
                          <a href="#">
                            <span>Menus</span>
                          </a>
                          <ul className="sub-menu megamenu-column-1 level-0">
                            <li className="menu-item">
                              <a href="the-menu.html">The Menu</a>
                            </li>
                            <li className="menu-item">
                              <a href="the-menu-classic.html">
                                The Menu Classic
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a href="about-us-restaurant.html">
                            <span>About</span>
                          </a>
                        </li>
                        <li className="menu-item menu-item-has-children">
                          <a href="portfolio.html">
                            <span>Gallery</span>
                          </a>
                          <ul className="sub-menu megamenu-column-1 level-0">
                            <li className="menu-item">
                              <a href="portfolio.html">Portfolio</a>
                            </li>
                            <li className="menu-item">
                              <a href="gallery.html">Gallery</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-has-children">
                          <a href="#">
                            <span>Pages</span>
                          </a>
                          <ul className="sub-menu megamenu-column-1 level-0">
                            <li className="menu-item">
                              <a href="reservation.html">Reservation</a>
                            </li>
                            <li className="menu-item">
                              <a href="reservation-opentable.html">
                                Reservation OpenTable
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="blog-posts-2.html">News</a>
                            </li>
                            <li className="menu-item">
                              <a href="single-post.html">Single Post</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a href="contact-us-restaurant.html">
                            <span>Contact us</span>
                          </a>
                        </li>
                        <li className="mgt-highlight menu-item">
                          <a href="reservation.html">
                            <span>Reservation</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="header-right">
                <ul className="header-nav"></ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Slider slides={slides} />
      <div style={{ textAlign: "center", padding: "3rem" }}>
        {" "}
        {/* Aumentamos el padding del contenedor */}
        <h1
          className="section-title"
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "1rem",
            textTransform: "uppercase",
            letterSpacing: "2px",
            borderBottom: "2px solid #e0e0e0",
            paddingBottom: "0.5rem",
            display: "inline-block",
            padding: "0.5rem 1rem", // Añadimos padding al h1
          }}
        >
          <span>Our Menu</span>
        </h1>
        <Products />
      </div>
      <section className="section-padding-top-100"></section>
      <div className="container-fluid footer-wrapper">
        <div
          className="footer-sidebar-wrapper footer-sidebar-style-dark"
          data-style=""
        >
          <div className="footer-sidebar sidebar container footer-sidebar-col-4">
            <ul id="footer-sidebar" className="clearfix">
              <li id="text-3" className="widget widget_text">
                <h2 className="widgettitle">Working TIme</h2>
                <div className="textwidget">
                  <p>Monday 11:30 am - 10:00 pm</p>
                  <p>Tuesday 11:30 am - 11:00 pm</p>
                  <p>Wednesday 11:30 am - 11:00 pm</p>
                  <p>Thursday 11:30 am - 11:00 pm</p>
                  <p>Friday 11:30 am - 11:00 pm</p>
                  <p>
                    <span className="text-color-theme">
                      Saturday 10:00 am - 9:00 pm
                    </span>
                  </p>
                  <p>
                    <span className="text-color-theme">
                      Sunday 10:00 am - 9:00 pm
                    </span>
                  </p>
                </div>
              </li>
              <li id="nav_menu-2" className="widget widget_nav_menu">
                <h2 className="widgettitle">About us</h2>
                <div className="menu-footermenu-1-container">
                  <ul id="menu-footermenu-1" className="menu">
                    <li className="menu-item">
                      <a href="#">Our story</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Blog</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Offers</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Weddings</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Gift Vouchers</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                id="barrel-recent-posts-3"
                className="widget widget_barrel_recent_entries"
              >
                <h2 className="widgettitle">Recent posts</h2>
                <ul>
                  <li className="clearfix">
                    <div className="widget-post-details-wrapper">
                      <div className="post-title">
                        <a href="single-post.html">Burger Night</a>
                      </div>
                      <div className="post-date">March 3, 2017</div>
                    </div>
                  </li>
                  <li className="clearfix">
                    <div className="widget-post-details-wrapper">
                      <div className="post-title">
                        <a href="single-post.html">Gin Club</a>
                      </div>
                      <div className="post-date">March 3, 2017</div>
                    </div>
                  </li>
                  <li className="clearfix">
                    <div className="widget-post-details-wrapper">
                      <div className="post-title">
                        <a href="single-post.html">Our Anniversary</a>
                      </div>
                      <div className="post-date">March 3, 2017</div>
                    </div>
                  </li>
                </ul>
              </li>
              <li
                id="custom_html-2"
                className="widget_text widget widget_custom_html"
              >
                <h2 className="widgettitle">Reseravations</h2>
                <div className="textwidget custom-html-widget">
                  <p>
                    Our support available to help you 24 hours a day, seven days
                    a week.
                  </p>
                  <p>
                    Please Call: + 1 703 4959 3452
                    <br />
                    For more information
                    <span className="text-color-theme">
                      <a href="#" className="__cf_email__">
                        test@gmail.com
                      </a>
                    </span>
                  </p>
                  <p>
                    <a href="https://www.opentable.com/start/home">
                      Book A Table
                    </a>
                  </p>
                  <div className="widget_barrel_social_icons shortcode_barrel_social_icons">
                    <div className="social-icons-wrapper">
                      <ul>
                        <li>
                          <a
                            href="https://facebook.com/"
                            target="_blank"
                            className="a-facebook"
                          >
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/"
                            target="_blank"
                            className="a-twitter"
                          >
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://behance.net/"
                            target="_blank"
                            className="a-behance"
                          >
                            <i className="fa fa-behance"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://dribbble.com/"
                            target="_blank"
                            className="a-dribbble"
                          >
                            <i className="fa fa-dribbble"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://pinterest.com/"
                            target="_blank"
                            className="a-pinterest"
                          >
                            <i className="fa fa-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <footer className="footer-style-dark footer-col-2">
          <div className="container">
            <div className="row">
              <div className="col-md-6 footer-copyright">
                Powered by{" "}
                <a
                  href="https://themeforest.net/user/max-themes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  B-Chef - Restaurant HTML Template
                </a>
              </div>
              <div className="col-md-6 footer-menu">
                <div className="menu-footermenu-simple-container">
                  <ul id="menu-footermenu-simple" className="footer-menu">
                    <li className="menu-item">
                      <a href="#">PERMISSIONS AND COPYRIGHT</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">CONTACT THE TEAM</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <a className="scroll-to-top" href="#top"></a>
        </footer>
      </div>
    </>
  );
}

export default Home;
