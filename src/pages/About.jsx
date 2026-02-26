import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <main>
            {/* PAGE HEADER */}
            <section className="page-header">
                <div className="container">
                    <div className="page-header-content">
                        {/* <h1 className="bg-text">ABOUT ME</h1> */}
                        <h2 className="page-title">ABOUT</h2>
                        <div className="breadcrumbs">
                            <Link to="/">Home</Link> / <span>About</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 01 ABOUT ME */}
            <section className="about-hero">
                <div className="container about-hero-grid">
                    <div className="about-hero-image">
                        <img src="/public/imgs/Image (2).png" alt="Robert Fox" />
                    </div>
                    <div className="about-hero-content">
                        <div className="section-title">
                            <span className="section-number">01</span>
                            <h2>ABOUT ME</h2>
                        </div>
                        <h2>I'm Professional Designer And Front-End Web Developer That Solve Your Problems</h2>
                        <p className="description">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <p className="description">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                        </p>
                        <div className="stats-row">
                            <div className="stat-item">
                                <span className="stat-number">8</span>
                                <span className="stat-label">Years<br />of experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">25</span>
                                <span className="stat-label">Satisfied<br />Customers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 02 MY SKILLS */}
            <section className="skills">
                <div className="container">
                    <div className="section-title">
                        <span className="section-number">02</span>
                        <h2>MY SKILLS</h2>
                    </div>
                    <div className="skills-grid">
                        <div className="skills-text">
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit. Exercitation veniam
                                consequat sunt nostrud amet.
                            </p>
                            <button className="btn">Download CV</button>
                        </div>
                        <div className="skills-bars">
                            <div className="skill-item">
                                <div className="skill-info">
                                    <span>UI/UX Design</span>
                                    <span>90%</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info">
                                    <span>Front End Developer</span>
                                    <span>95%</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info">
                                    <span>Graphic Design</span>
                                    <span>80%</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info">
                                    <span>Product Design</span>
                                    <span>85%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 03 MY EXPERIENCES */}
            <section className="experiences">
                <div className="container">
                    <div className="section-title">
                        <span className="section-number">03</span>
                        <h2>MY EXPERIENCES</h2>
                    </div>
                    <div className="experience-timeline">
                        <div className="exp-item">
                            <div className="company-logo">LinkedIn</div>
                            <div className="exp-info">
                                <span className="exp-number">01</span>
                                <h3>Lead Web Developer</h3>
                                <span className="exp-year">2018-2020</span>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</p>
                            </div>
                        </div>
                        <div className="exp-item">
                            <div className="company-logo">Yahoo!</div>
                            <div className="exp-info">
                                <span className="exp-number">02</span>
                                <h3>Lead Web Developer</h3>
                                <span className="exp-year">2018-2020</span>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</p>
                            </div>
                        </div>
                        <div className="exp-item">
                            <div className="company-logo">Zendesk</div>
                            <div className="exp-info">
                                <span className="exp-number">03</span>
                                <h3>Lead Web Developer</h3>
                                <span className="exp-year">2018-2020</span>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</p>
                            </div>
                        </div>
                        <div className="exp-item">
                            <div className="company-logo">Webflow</div>
                            <div className="exp-info">
                                <span className="exp-number">04</span>
                                <h3>Lead Web Developer</h3>
                                <span className="exp-year">2018-2020</span>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 04 MY PARTNERS */}
            <section className="partners">
                <div className="container">
                    <div className="section-title centered">
                        <span className="section-number">04</span>
                        <h2>MY PARTNERS</h2>
                    </div>
                    <div className="partners-grid">
                        <div className="partner-item">Behance</div>
                        <div className="partner-item">Slack</div>
                        <div className="partner-item">Dribbble</div>
                        <div className="partner-item">Twilio</div>
                        <div className="partner-item">GitHub</div>
                        <div className="partner-item">Chargebee</div>
                        <div className="partner-item">Udemy</div>
                        <div className="partner-item">Instagram</div>
                        <div className="partner-item">Mapbox</div>
                    </div>
                </div>
            </section>

            {/* CTA */}
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
        </main>
    );
}

export default About;
