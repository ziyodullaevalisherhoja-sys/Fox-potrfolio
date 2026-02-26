import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MdOutlineEdit, MdOutlineArchitecture, MdOutlineSell, MdOutlineComputer } from 'react-icons/md';

function Home() {
    // const location = useLocation();

    // useEffect(() => {
    //     if (location.hash) {
    //         const id = location.hash.replace('#', '');
    //         const element = document.getElementById(id);
    //         if (element) {
    //             element.scrollIntoView({ behavior: 'smooth' });
    //         }
    //     }
    // }, [location]);

    return (
        <main>
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-grid">
                    <div className="hero-content">
                        <p className="hello">Hello, I'm</p>
                        <h1>ROBERT FOX</h1>
                        <p className="subtitle">Professional Product Designer</p>
                        <button className="btn">Let's Talk</button>
                    </div>
                    <div className="hero-image">
                        {/* <div className="image-wrapper">
                            <img src="/imgs/Image.png" alt="Robert Fox" />
                        </div> */}
                        <div className="social-sidebar">
                            <a href="#"><i className="fa-brands fa-behance"></i></a>
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>

                </div>
            </section>

            {/* 01 ABOUT ME SUMMARY */}
            <section className="about-summary" id="about">
                <div className="container">
                    <div className="section-title">
                        <span className="section-number">01</span>
                        <h2>ABOUT ME</h2>
                    </div>
                    <div className="about-grid">
                        <div className="about-images">
                            <div className="img-main">
                                <img src="/public/imgs/Image789.png" alt="About" />
                                {/* <div className="stat-card customers">
                                    <h3>25</h3>
                                    <p>Satisfied<br />Customers</p>
                                </div> */}
                            </div>
                            <div className="img-sub">
                                {/* <div className="stat-card experience">
                                    <h3>8</h3>
                                    <p>Years<br />of experience</p>
                                </div> */}
                                <img src="/public/imgs/Image (1).png" alt="Work" />
                            </div>
                        </div>
                        <div className="about-text">
                            <p className="description">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                            <p className="description">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Strip */}
            <div className="brand-strip">
                <div className="container brand-container">
                    <div className="brand-item">Behance</div>
                    <div className="brand-item">Slack</div>
                    <div className="brand-item">Dribbble</div>
                    <div className="brand-item">Twilio</div>
                    <div className="brand-item">GitHub</div>
                </div>
            </div>

            {/* 02 MY SERVICE */}
            <section className="services" id="services">
                <div className="container">
                    <div className="section-title">
                        <span className="section-number">02</span>
                        <h2>MY SERVICE</h2>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="icon"><MdOutlineEdit /></div>
                            <h3>UI/UX Design</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</p>
                        </div>
                        <div className="service-card">
                            <div className="icon"><MdOutlineArchitecture /></div>
                            <h3>Product Design</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</p>
                        </div>
                        <div className="service-card">
                            <div className="icon"><MdOutlineSell /></div>
                            <h3>Brand Identity</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</p>
                        </div>
                        <div className="service-card active">
                            <div className="icon"><MdOutlineComputer /></div>
                            <h3>Website Design</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 03 PORTFOLIO */}
            <section className="portfolio" id="portfolio">
                <div className="container">
                    <div className="section-title portfolio-header">
                        <div className="title-left">
                            <span className="section-number">03</span>
                            <h2>PORTFOLIO</h2>
                        </div>
                        <div className="filter-tabs">
                            <span className="active">ALL</span>
                            <span>UI/UX DESIGN</span>
                            <span>PRODUCT DESIGN</span>
                            <span>BRANDING</span>
                            <span>WEB DESIGN</span>
                        </div>
                        <div className="nav-arrows">
                            <button><i className="fas fa-arrow-left"></i></button>
                            <button ><i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="portfolio-grid">
                        <div className="portfolio-card">
                            <img src="/public/imgs/Rectangle 9.jpg" alt="MOBILE DESIGN" />
                            <div className="overlay">
                                <h3>MOBILE DESIGN</h3>
                                <p>UI/UX Design</p>
                            </div>
                        </div>
                        <div className="portfolio-card">
                            <img src="/public/imgs/Image.jpg" alt="WEB DESIGN" />
                            <div className="overlay">
                                <h3>WEB DESIGN</h3>
                                <p>Web Design</p>
                            </div>
                        </div>
                        <div className="portfolio-card">
                            <img src="/public/imgs/Image (1).jpg" alt="PRODUCT DESIGN" />
                            <div className="overlay">
                                <h3>PRODUCT DESIGN</h3>
                                <p>Product Design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 04 TESTIMONIAL */}
            <section className="testimonial">
                <div className="container">
                    <div className="testimonial-grid">
                        <div className="testimonial-image">
                            <img src="/public/imgs/Image (2).jpg" alt="Testimonial User" />
                        </div>
                        <div className="testimonial-content">
                            <div className="section-title">
                                <span className="section-number">04</span>
                                <h2>TESTIMONIAL</h2>
                            </div>
                            <div className="quote-icon">"</div>
                            <p className="testimonial-text">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                            <div className="user-info">
                                <h4>Esther Howard</h4>
                                <p>CEO OF ADOBE</p>
                            </div>
                            <div className="nav-arrows">
                                <button><i className="fas fa-arrow-left"></i></button>
                                <button><i className="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Box */}
            <section className="cta">
                <div className="container">
                    <div className="cta-box">
                        <h2>Let's Work Together On Your Next Project</h2>
                        <button className="btn">Hire Me Now</button>
                        <a href="#" className="download-cv">
                            <i className="fas fa-download"></i> Download CV
                        </a>
                    </div>
                </div>
            </section>

            {/* 05 CONTACT */}
            <section className="contact" id="contact">
                <div className="container">
                    <div className="section-title">
                        <span className="section-number">05</span>
                        <h2>CONTACT</h2>
                    </div>
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h3>I'm always open to discussing <span className="highlight">product design work</span> or partnership</h3>
                            <div className="info-item">
                                <i className="fas fa-phone"></i>
                                <div>
                                    <p className="label">Phone</p>
                                    <p className="value">123 456 0714</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <p className="label">Email</p>
                                    <p className="value">robertfox@example.com</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <p className="label">Address</p>
                                    <p className="value">2118 Washington Ave. Manchester, Kentucky 39495</p>
                                </div>
                            </div>
                        </div>
                        <form className="contact-form">
                            <div className="form-group">
                                <label>Your name*</label>
                                <input type="text" placeholder="Enter your name here" required />
                            </div>
                            <div className="form-group">
                                <label>Email Address*</label>
                                <input type="email" placeholder="Enter your email address" required />
                            </div>
                            <div className="form-group">
                                <label>Message*</label>
                                <textarea placeholder="Enter your message here" required></textarea>
                            </div>
                            <button type="submit" className="btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
