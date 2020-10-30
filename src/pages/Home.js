import React, {Component} from 'react';

class Home extends React.Component{
    render(){
        return(
            <div>
                {/* <!-- Preloader --> */}
                <div class="preloader">
                    <div class="center">
                        <div class="spinner">
                            <div class="blob top"></div>
                            <div class="blob bottom"></div>
                            <div class="blob left"></div>
                            <div class="blob move-blob"></div>
                        </div>
                    </div>
                </div>
                {/* <!-- Preloader End --> */}

                {/* <!--Header Start--> */}
                <header id="home" class="cursor-light">

                    <div class="inner-header nav-icon">
                        <div class="main-navigation">
                            <div class="container">
                                <div class="row">
                                    <div class="col-4 col-lg-3">
                                        <a class="navbar-brand link" href="index-seo-agency.html">
                                            <img src="seo-agency/img/logo.png" class="logo-simple" alt="logo" />
                                            <img src="seo-agency/img/logo-white-small.png" class="logo-fixed" alt="logo" />
                                        </a>
                                    </div>
                                    <div class="col-8 col-lg-9 simple-navbar d-flex align-items-center justify-content-end">
                                        <nav class="navbar navbar-expand-lg">
                                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                                <div class="navbar-nav ml-auto">
                                                    <a class="nav-link home active link" href="#">HOME</a>
                                                    <a class="nav-link scroll link" href="#stats-sec">ABOUT</a>
                                                    <a class="nav-link scroll link" href="#portfolio-sec">WORK</a>
                                                    <a class="nav-link scroll link" href="#pricing-sec">PRICING</a>
                                                    <a class="nav-link scroll link" href="#contact-sec">CONTACT</a>
                                                    <span class="menu-line"><i aria-hidden="true" class="fa fa-angle-down"></i></span>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--toggle btn--> */}
                        <a href="javascript:void(0)" class="sidemenu_btn link" id="sidemenu_toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                    </div>
                    {/* <!--Side Nav--> */}
                    <div class="side-menu hidden side-menu-opacity">
                        <div class="bg-overlay"></div>
                        <div class="inner-wrapper">
                            <span class="btn-close" id="btn_sideNavClose"><i></i><i></i></span>
                            <div class="container">
                                <div class="row w-100 side-menu-inner-content">
                                <div class="col-12 d-flex justify-content-center align-items-center">
                                    <a href="index-seo-agency.html" class="navbar-brand"><img src="seo-agency/img/logo-white.png" alt="logo" /></a>
                                </div>
                                <div class="col-12 col-lg-8">
                                    <nav class="side-nav w-100">
                                        <ul class="navbar-nav">
                                            <li class="nav-item">
                                                <a class="nav-link scroll" href="#home">HOME</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link scroll" href="#stats-sec">ABOUT</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link scroll" href="#portfolio-sec">WORK</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link scroll" href="#pricing-sec">PRICING</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link scroll" href="#contact-sec">CONTACT</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div class="col-12 col-lg-4 d-flex align-items-center">
                                    <div class="side-footer text-white w-100">
                                        <div class="menu-company-details">
                                            <span>+1 631 123 4567</span>
                                            <span>email@website.com</span>
                                        </div>
                                        <ul class="social-icons-simple">
                                            <li><a class="facebook-text-hvr" href="javascript:void(0)"><i class="fab fa-facebook-f"></i> </a> </li>
                                            <li><a class="instagram-text-hvr" href="javascript:void(0)"><i class="fab fa-twitter"></i> </a> </li>
                                            <li><a class="instagram-text-hvr" href="javascript:void(0)"><i class="fab fa-youtube"></i> </a> </li>
                                            <li><a class="instagram-text-hvr" href="javascript:void(0)"><i class="fab fa-instagram"></i> </a> </li>
                                        </ul>
                                        <p class="text-white">&copy; 2020 MegaOne. Made With Love by Themesindustry</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <a id="close_side_menu" href="javascript:void(0);"></a>

                </header>
                {/* <!--Header End-->

                <!--Banner start--> */}
                <section class="banner-slider padding-bottom position-relative cursor-light" id="banner-slider">
                    <div class="container">
                        <div class="row banner-slider-row">
                            <div class="col-12 col-lg-6 d-flex align-items-center text-center text-lg-left">
                                <div class="slider-banner-content wow slideInLeft" data-wow-delay=".8s">
                                    <h4 class="heading">DIGITAL & SEO <span>AGENCY</span></h4>
                                    <p class="text">
                                        Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy.  Lorem Ipsum has been the industry’s standard dummy.
                                    </p>
                                    <a class="btn pink-btn rounded-pill">LEARN MORE
                                    <span></span><span></span><span></span><span></span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 d-flex align-items-center">
                                <div class="slider-img-area wow slideInRight" data-wow-delay=".8s" data-depth="0.1">
                                    <img src="seo-agency/img/slider-img.png" alt="plant" id="slider-inner-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    <div class="svg-div svg-anim">
                    <svg data-depth="0.05" id="banner-main-svg" viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(120)">
                                <stop offset="0%" style={{stopColor:"rgb(98,37,181)", stopOpacity:1}} />
                                <stop offset="40%" style={{stopColor:"rgb(128,33,181)", stopOpacity:1}} />
                                {/* <stop offset="0%" styles="stop-color:rgb(98,37,181);stop-opacity:1" />
                                <stop offset="40%" styles="stop-color:rgb(128,33,181);stop-opacity:1" /> */}
                            </linearGradient>
                        </defs>
                        <rect width="100" height="100" rx="8" fill="url(#grad1)"/>
                    </svg>
                    </div>

                    <div class="slider-icons">
                        <ul class="slider-social banner-social">
                            <li class="animated-wrap"><a class="animated-element" href="javascript:void(0);"><i class="fab fa-facebook-f"></i> </a></li>
                            <li class="animated-wrap"><a class="animated-element" href="javascript:void(0);"><i class="fab fa-twitter"></i>  </a></li>
                            <li class="animated-wrap"><a class="animated-element" href="javascript:void(0);"><i class="fab fa-linkedin-in"></i> </a></li>
                            <li class="animated-wrap"><a class="animated-element" href="javascript:void(0);"><i class="lab la-instagram"></i> </a></li>
                        </ul>
                    </div>
                </section>
                {/* <!--Banner End-->

                <!--Stats sec start--> */}
                <section class="stats-sec padding-top padding-bottom" id="stats-sec">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 stats-heading-area text-center">
                                <span class="sub-heading">Lorem ipsum is simply dummy text </span>
                                <h4 class="heading">DIGITAL MARKETING <span> & <span class="color">SEO EXPERTS</span></span></h4>
                                <p class="text">
                                    Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy.  Lorem Ipsum has been the industry’s standard dummy.
                                </p>
                            </div>
                        </div>
                        <div class="row circular-wrap text-center">
                            <div class="col-12 col-lg-4 wow bounceIn">
                                <div id="circle" class="circle" data-value="0.77">
                                    <h6 class="counter-num">257%</h6>
                                </div>
                                <h4 class="darkcolor">Increase in Sales year on year</h4>
                            </div>
                            <div class="col-12 col-lg-4 wow bounceIn">
                                <div id="circletwo" class="circle" data-value="0.96">
                                    <h6 class="counter-num">96%</h6>
                                </div>
                                <h4 class="darkcolor">Recommendation rate over the year</h4>
                            </div>
                            <div class="col-12 col-lg-4 wow bounceIn">
                                <div id="circlethree" class="circle" data-value="0.75">
                                    <h6 class="counter-num">317%</h6>
                                </div>
                                <h4 class="darkcolor">New ventures we became part of</h4>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--Stats sec End-->

                <!--Portfolio section start--> */}
                <section class="portfolio-sec padding-top padding-bottom" id="portfolio-sec">
                    <div class="container">
                        <div class="row portfolio-heading-area text-center text-lg-left">
                            <div class="col-12 col-lg-6">
                                <h4 class="heading wow fadeInLeft">OUR RECENT WORK <span>& <span class="color">PROJECTS</span></span></h4>
                            </div>
                            <div class="col-12 col-lg-5 offset-lg-1">
                                <p class="text wow fadeInRight">
                                    Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy.  Lorem Ipsum has been the industry’s standard dummy.
                                </p>
                            </div>
                        </div>
                        <div class="row position-relative">
                            <div class="col-12">
                                <div class="portfolio-carousel owl-carousel owl-item">
                                    <div class="item">
                                        <div class="portfolio-image">
                                            <img src="seo-agency/img/p1.jpg" />
                                        </div>
                                        <div class="row no-gutters portfolio-footer padding-top">
                                            <div class="col-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
                                                <div class="portfolio-mini-detail">
                                                    <h4 class="portfolio-mini-heading">Coco Oil</h4>
                                                    <p class="text">Client</p>
                                                </div>
                                            </div>
                                            <div class="col-4 col-lg-4 d-flex justify-content-center">
                                                <div class="portfolio-mini-detail">
                                                    <h4 class="portfolio-mini-heading">June 2020</h4>
                                                    <p class="text">Date</p>
                                                </div>
                                            </div>
                                            <div class="col-4 col-lg-4 d-flex justify-content-center justify-content-lg-start">
                                                <div class="portfolio-mini-detail">
                                                    <h4 class="portfolio-mini-heading">Website SEO</h4>
                                                    <p class="text">Services</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="portfolio-image">
                                            <img src="seo-agency/img/p2.jpg" />
                                        </div>
                                        <div class="row no-gutters portfolio-footer padding-top">
                                            <div class="col-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
                                                <div class="portfolio-mini-detail">
                                                    <h4 class="portfolio-mini-heading">Wax Beans</h4>
                                                    <p class="text">Client</p>
                                                </div>
                                            </div>
                                            <div class="col-4 col-lg-4 d-flex justify-content-center">
                                                <div class="portfolio-mini-detail">
                                                    <h4 class="portfolio-mini-heading">June 2020</h4>
                                                    <p class="text">Date</p>
                                                </div>
                                            </div>
                                            <div class="col-4 col-lg-4 d-flex justify-content-center justify-content-lg-start">
                                                <div class="portfolio-mini-detail">
                                                    <h4 class="portfolio-mini-heading">Website SEO</h4>
                                                    <p class="text">Services</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="portfolio-image">
                                            <img src="seo-agency/img/p3.jpg" />
                                        </div>
                                        <div class="row no-gutters portfolio-footer padding-top">
                                            <div class="col-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
                                                <div class="portfolio-mini-detail">
                                                    <h4 class="portfolio-mini-heading">Coco Tans</h4>
                                                    <p class="text">Client</p>
                                                </div>
                                            </div>
                                            <div class="col-4 col-lg-4 d-flex justify-content-center">
                                                <div class="portfolio-mini-detail">
                                                    <h4 class="portfolio-mini-heading">June 2020</h4>
                                                    <p class="text">Date</p>
                                                </div>
                                            </div>
                                            <div class="col-4 col-lg-4 d-flex justify-content-center justify-content-lg-start">
                                                <div class="portfolio-mini-detail">
                                                    <h4 class="portfolio-mini-heading">Website SEO</h4>
                                                    <p class="text">Services</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a class="portfolio-links" id="portfolio-arr-left"><i class="fas fa-angle-left"></i> </a>
                            <a class="portfolio-links" id="portfolio-arr-right"><i class="fas fa-angle-right"></i> </a>
                        </div>
                    </div>
                </section>
                {/* <!--Portfolio section end-->

                <!--Pricing section start--> */}
                <section class="pricing-sec padding-top padding-bottom" id="pricing-sec">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 pricing-heading-area text-center">
                                <span class="sub-heading">Lorem ipsum is simply dummy text </span>
                                <h4 class="heading">CHOOSE YOUR <span class="color">PLAN</span></h4>
                                <p class="text">
                                    Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy.  Lorem Ipsum has been the industry’s standard dummy.
                                </p>
                            </div>
                        </div>
                        <div class="row pricing-cards">
                            <div class="col-12 col-md-6 col-lg-3 pricing-card">
                                <div class="pricing-box wow fadeInUp">
                                    <div class="pricing-box-header position-relative">
                                        <div class="pricing-header-overlay"></div>
                                        <div class="header-content">
                                            <h4 class="pricing-price">4.99</h4>
                                            <i class="lni lni-dollar dollar"></i>
                                            <p class="sub-text">Monthly Billing</p>
                                        </div>
                                    </div>
                                    <div class="pricing-box-detail position-relative">
                                        <div class="pricing-detail-overlay"></div>
                                        <ul>
                                            <li>Full access</li>
                                            <li>Unlimited Bandwidth</li>
                                            <li>Email Accounts</li>
                                            <li>4 Free Forks Every Months</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3 pricing-card active">
                                <div class="pricing-box wow fadeInUp" data-wow-delay=".3s">
                                    <div class="pricing-box-header position-relative">
                                        <div class="pricing-header-overlay"></div>
                                        <div class="header-content">
                                            <h4 class="pricing-price">11.95</h4>
                                            <i class="lni lni-dollar dollar"></i>
                                            <p class="sub-text">Quarterly Billing</p>
                                        </div>
                                    </div>
                                    <div class="pricing-box-detail position-relative">
                                        <div class="pricing-detail-overlay"></div>
                                        <ul>
                                            <li>Full access</li>
                                            <li>Unlimited Bandwidth</li>
                                            <li>Email Accounts</li>
                                            <li>4 Free Forks Every Months</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3 pricing-card">
                                <div class="pricing-box wow fadeInUp" data-wow-delay=".5s">
                                    <div class="pricing-box-header position-relative">
                                        <div class="pricing-header-overlay"></div>
                                        <div class="header-content">
                                            <h4 class="pricing-price">25.99</h4>
                                            <i class="lni lni-dollar dollar"></i>
                                            <p class="sub-text">Biannual Billing</p>
                                        </div>
                                    </div>
                                    <div class="pricing-box-detail position-relative">
                                        <div class="pricing-detail-overlay"></div>
                                        <ul>
                                            <li>Full access</li>
                                            <li>Unlimited Bandwidth</li>
                                            <li>Email Accounts</li>
                                            <li>4 Free Forks Every Months</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3 pricing-card">
                                <div class="pricing-box wow fadeInUp" data-wow-delay=".7s">
                                    <div class="pricing-box-header position-relative">
                                        <div class="pricing-header-overlay"></div>
                                        <div class="header-content">
                                            <h4 class="pricing-price">45.95</h4>
                                            <i class="lni lni-dollar dollar"></i>
                                            <p class="sub-text">Yearly Billing</p>
                                        </div>
                                    </div>
                                    <div class="pricing-box-detail position-relative">
                                        <div class="pricing-detail-overlay"></div>
                                        <ul>
                                            <li>Full access</li>
                                            <li>Unlimited Bandwidth</li>
                                            <li>Email Accounts</li>
                                            <li>4 Free Forks Every Months</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--Pricing section end-->

                <!--testimonial section start--> */}
                <div class="testimonial-sec padding-top position-relative" id="testimonial-sec">
                    <div class="container">
                        <div class="testimonial-area">
                            <div class="row">
                                    <div class="col-12 col-lg-5 d-flex justify-content-center align-items-center text-center text-lg-left">
                                        <div class="testimonial-details wow fadeInLeft">
                                            <h4 class="heading">SATISFIED <span class="color">CUSTOMERS</span></h4>
                                            <p class="text">
                                                Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6 offset-lg-1">
                                        <div class="testimonial-carousel wow fadeInRight">
                                            <div class="testimonial-box owl-carousel owl-theme">
                                                <div class="item text-center">
                                                    <div class="icon-holder">
                                                        <i class="fas fa-quote-right"></i>
                                                    </div>
                                                    <p class="text">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor purus.
                                                    </p>
                                                    <div class="img-holder">
                                                        <img src="seo-agency/img/test1.jpg" />
                                                    </div>
                                                    <h4 class="user-name">Sara Williams</h4>
                                                </div>
                                                <div class="item text-center">
                                                    <div class="icon-holder">
                                                        <i class="fas fa-quote-right"></i>
                                                    </div>
                                                    <p class="text">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor purus.
                                                    </p>
                                                    <div class="img-holder">
                                                        <img src="seo-agency/img/test2.jpg" />
                                                    </div>
                                                    <h4 class="user-name">Julia Miltese</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                {/* <!--testimonial section end-->

                <!--sponsers section start--> */}
                <div class="sponser-sec padding-top padding-bottom" id="sponser-sec">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="sponser-tags owl-carousel owl-theme">
                                    <div class="item">
                                        <img src="seo-agency/img/brand4.png" />
                                    </div>
                                    <div class="item">
                                        <img src="seo-agency/img/brand4.png" />
                                    </div>
                                    <div class="item">
                                        <img src="seo-agency/img/brand4.png" />
                                    </div>
                                    <div class="item">
                                        <img src="seo-agency/img/brand4.png" />
                                    </div>
                                    <div class="item">
                                        <img src="seo-agency/img/brand4.png" />
                                    </div>
                                    <div class="item">
                                        <img src="seo-agency/img/brand4.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--sponsers section end-->

                <!--Blog section start--> */}
                <section id="blog-sec" class="blog-sec padding-top padding-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-lg-6">
                                <div class="blog-img wow fadeInLeft">
                                    <img src="seo-agency/img/blog-mokeup.png" />
                                    <img src="seo-agency/img/blog-mokup-img.png" id="mokeup-img" />
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 text-center text-lg-left">
                                <div class="blog-detail wow fadeInRight">
                                    <h4 class="heading">SEO NEWS & BLOGS</h4>
                                    <p class="text">Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry.</p>
                                    <a class="btn pink-btn rounded-pill" href="seo-agency/standard-blog.html">LEARN MORE
                                    <span></span><span></span><span></span><span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               {/*  <!--Blog section end-->


                <!--Contact section start--> */}
                <section class="contact-sec padding-top padding-bottom" id="contact-sec">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-lg-7 wow fadeInLeft">
                                <h4 class="heading text-center text-lg-left">GET IN TOUCH</h4>
                                <form class="row contact-form" id="contact-form-data">
                                    <div class="col-sm-12" id="result"></div>
                                    <div class="col-12 col-md-5">
                                        <input type="text" placeholder="Your Name" required="" name="userName"  class="form-control" />
                                        <input type="email" placeholder="Email Address *" required="" name="userEmail" class="form-control" />
                                        <input type="text" placeholder="Subject" required="" name="userSubject" class="form-control" />
                                    </div>
                                    <div class="col-12 col-md-7">
                                        <textarea class="form-control" placeholder="Your Message" name="userMessage" rows="6"></textarea>
                                    </div>
                                    <div class="col-12">
                                        <a href="javascript:void(0);" class="btn contact_btn pink-btn rounded-pill w-100">Send Message
                                            <span></span><span></span><span></span><span></span><span></span>
                                        </a>
                                    </div>
                                </form>
                            </div>
                            <div class="col-12 col-lg-5 text-center text-lg-left position-relative">
                                <div class="contact-details wow fadeInRight">
                                    <h4 class="heading">OUR LOCATION</h4>
                                    <p class="text">
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered .
                                    </p>
                                    <ul>
                                        <li><i class="las la-map-marker addr"></i>123 Park Avenue, New York, United States </li>
                                        <li><i class="las la-phone-volume phone"></i>
                                        <span>+1 631 1234 5678</span>
                                        <span>+1 631 1234 5678</span>
                                        </li>
                                        <li><i class="las la-paper-plane email"></i>email@website.com</li>
                                    </ul>
                                </div>
                                <img src="seo-agency/img/contact-background.png" class="contact-background" alt="contact" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--Contact section end-->

                <!--Footer Start--> */}
                <footer class="footer-style-1">

                    <div class="container">
                        <div class="row align-items-center">
                            {/* <!--Social--> */}
                            <div class="col-lg-6">
                                <div class="footer-social text-center text-lg-left ">
                                    <ul class="list-unstyled">
                                        <li><a class="wow fadeInUp" href="javascript:void(0);"><i aria-hidden="true" class="fab fa-facebook-f"></i></a></li>
                                        <li><a class="wow fadeInDown" href="javascript:void(0);"><i aria-hidden="true" class="fab fa-twitter"></i></a></li>
                                        <li><a class="wow fadeInUp" href="javascript:void(0);"><i aria-hidden="true" class="fab fa-google-plus-g"></i></a></li>
                                        <li><a class="wow fadeInDown" href="javascript:void(0);"><i aria-hidden="true" class="fab fa-linkedin-in"></i></a></li>
                                        <li><a class="wow fadeInUp" href="javascript:void(0);"><i aria-hidden="true" class="fab fa-instagram"></i></a></li>
                                        <li><a class="wow fadeInDown" href="javascript:void(0);"><i aria-hidden="true" class="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!--Text--> */}
                            <div class="col-lg-6 text-center text-lg-right">
                                <p class="company-about fadeIn">© 2020 MegaOne. Made With Love By <a href="javascript:void(0);">Themesindustry</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!--Footer End-->

                <!--Animated Cursor--> */}
                <div class="aimated-cursor">
                    <div class="cursor">
                        <div class="cursor-loader"></div>
                    </div>
                </div>
                {/* <!--Animated Cursor End-->

                <!--Scroll Top Start--> */}
                <span class="scroll-top-arrow"><i class="fas fa-angle-up"></i></span>
                {/* <!--Scroll Top End--> */}
            </div>
        )
    }
}
export default Home