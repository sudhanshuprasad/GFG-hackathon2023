import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css";
// import "./script.js"
const Appointment = () => {
    return (
        <>
            <header className="header" id="header">
                <nav className="navbar container">
                    {/* <Link to={}"#" className="brand"> */}
                    Logo
                    {/* </a> */}
                    <div className="menu" id="menu">
                        <ul className="menu-list">
                            <li className="menu-item">
                                <Link to={"#"} className="menu-link is-active">
                                    <i className="menu-icon ion-md-home" />
                                    <span className="menu-name">
                                        <i style={{ fontSize: 25 }} className="fas fa-home" />
                                    </span>
                                </Link>
                            </li>
                            <li className="menu-item">
                                <Link to={"#"} className="menu-link">
                                <i className="menu-icon ion-md-search" />
                                <span className="menu-name">
                                    <i style={{ fontSize: 25 }} className="fas fa-truck" />
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to={"#"} className="menu-link">
                            <i className="menu-icon ion-md-cart" />
                            <span className="menu-name">
                                <i
                                    style={{ fontSize: 25 }}
                                    className="fas fa-cart-arrow-down"
                                />
                            </span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to={"#"} className="menu-link">
                            <i className="menu-icon ion-md-heart" />
                            <span className="menu-name">
                                <i style={{ fontSize: 25 }} className="fas fa-heart" />
                            </span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to={"#"} className="menu-link">
                            <i className="menu-icon ion-md-contact" />
                            <span className="menu-name">
                                <i style={{ fontSize: 25 }} className="fas fa-user-circle" />
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
                </header >
                <section className="section_1">
                    <div className="section_1-left_1">
                        <div className="header_text">
                            <h1>
                                join us forever <br /> to get help From <br /> Anywhere
                            </h1>
                        </div>
                        <div className="para_text">
                            <p style={{ textAlign: "start" }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry.
                                <br /> Lorem Ipsum has been the industry's standard dummand scrambled
                                <br />
                                Lorem Ipsum has been the industry's standard dummand scramble it to
                                make a type specimen book
                            </p>
                        </div>
                        <div className="btns">
                            <button input="button" className="find_btn">
                                <strong>Find Out More </strong>
                            </button>
                            <button input="button" className="service_btn">
                                <strong>Our Service</strong>
                            </button>
                        </div>
                    </div>
                    <div className="section_1-right_1"></div>
                    <div className="outer_container">
                        <div className="support">
                            <div className="support_icon">
                                <img src="icons\24-7.png" />
                            </div>
                            <h1 style={{ marginTop: "2.8rem" }}>24X7</h1>
                            <p>industry's standard dummand scrambled</p>
                        </div>
                        <div className="doc_con">
                            <div className="doctor_icon">
                                <img src="icons\doctor -color.png" />
                            </div>
                            <h1 style={{ marginTop: "2.8rem" }}>Qualified Doctor</h1>
                            <p>industry's standard dummand scrambled</p>
                        </div>
                    </div>
                </section>
                <section className="section_2">
                    <div className="sec_2-column_1 section_2_columns">
                        <img className="icon-img" src="icons\project.png" />
                        <h1 style={{ marginLeft: "1rem" }}>
                            100+
                            <br /> Project
                        </h1>
                    </div>
                    <div className="sec_2-column_2 section_2_columns">
                        <img className="icon-img" src="icons\doctor-visit.png" />
                        <h1 style={{ marginLeft: "1rem" }}>
                            90%
                            <br />
                            Satisfied
                        </h1>
                    </div>
                    <div className="sec_2-column_3 section_2_columns">
                        <img className="icon-img" src="icons\syringe.png" />
                        <h1 style={{ marginLeft: "1rem" }}>
                            700+
                            <br />
                            Store's
                        </h1>
                    </div>
                    <div className="sec_2-column_4 section_2_columns">
                        <img className="icon-img" src="icons\test-tube.png" />
                        <h1 style={{ marginLeft: "1rem" }}>
                            70+
                            <br /> Lab Expert
                        </h1>
                    </div>
                </section>
                <section className="section_3">
                    <div className="sec_3_Dentist container_box-sec-3">
                        <img className="icon-img" src="icons\dental-checkup.png" />
                        <div className="sec_3_container">
                            <h1>Dentristy Care</h1>
                            <p>There are many variations of passages of words are valid.</p>
                        </div>
                    </div>
                    <div className="sec_3_ortho container_box-sec-3">
                        <img className="icon-img" src="icons\broken-leg.png" />
                        <div className="sec_3_container">
                            <h1>Orthopedic Care</h1>
                            <p>There are many variations of passages of words are valid.</p>
                        </div>
                    </div>
                    <div className="sec_3_cosmo container_box-sec-3">
                        <img className="icon-img" src="icons\skincare.png" />
                        <div className="sec_3_container">
                            <h1>Cosmetic Dentist</h1>
                            <p>There are many variations of passages of words are valid.</p>
                        </div>
                    </div>
                </section>
                <section className="section_4">
                    <h1
                        style={{
                            fontSize: "2.5rem",
                            textAlign: "center",
                            color: "rgb(27, 160, 255)",
                            margin: "1rem"
                        }}
                    >
                        We're Providing Best Services
                    </h1>
                    <div className="slider">
                        <div className="slide">
                            <div className="sec_4-slide-1 slide_outer-column">
                                <div className="slide_advice slide_inner-column">
                                    <div className="advice_img "></div>
                                    <div className="advice_text slide_text-column">
                                        <h1
                                            style={{
                                                marginBottom: "1rem",
                                                color: "white",
                                                fontSize: "2rem"
                                            }}
                                        >
                                            SPECIALITY ADVICE
                                        </h1>
                                        <p>
                                            Quisquam itaque deserunt ullam, quia ea repellendus provident,
                                            ducimus neque ipsam modi voluptatibus doloremque, corrupti
                                            laborum.
                                        </p>
                                    </div>
                                </div>
                                <div className="slide_child slide_inner-column">
                                    <div className="child_img "></div>
                                    <div className="child_text slide_text-column">
                                        <h1
                                            style={{
                                                marginBottom: "1rem",
                                                color: "white",
                                                fontSize: "2rem"
                                            }}
                                        >
                                            CHILD CARE
                                        </h1>
                                        <p>
                                            Quisquam itaque deserunt ullam, quia ea repellendus provident,
                                            ducimus neque ipsam modi voluptatibus doloremque, corrupti
                                            laborum.
                                        </p>
                                    </div>
                                </div>
                                <div className="slide_pathology slide_inner-column">
                                    <div className="pathology_img "></div>
                                    <div className="pathology_text slide_text-column">
                                        <h1
                                            style={{
                                                marginBottom: "1rem",
                                                color: "white",
                                                fontSize: "2rem"
                                            }}
                                        >
                                            PATHOLOGY TEST
                                        </h1>
                                        <p>
                                            Quisquam itaque deserunt ullam, quia ea repellendus provident,
                                            ducimus neque ipsam modi voluptatibus doloremque, corrupti
                                            laborum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="sec_4-slide-2 slide_outer-column">
                                <div className="slide_ortho slide_inner-column">
                                    <div className="ortho_img "></div>
                                    <div className="ortho_text slide_text-column">
                                        <h1
                                            style={{
                                                marginBottom: "1rem",
                                                color: "white",
                                                fontSize: "2rem"
                                            }}
                                        >
                                            ORTHOPEDIC SOLUTION
                                        </h1>
                                        <p>
                                            Quisquam itaque deserunt ullam, quia ea repellendus provident,
                                            ducimus neque ipsam modi voluptatibus doloremque, corrupti
                                            laborum.
                                        </p>
                                    </div>
                                </div>
                                <div className="slide_cardio slide_inner-column">
                                    <div className="cardio_img "></div>
                                    <div className="cardio_text slide_text-column">
                                        <h1
                                            style={{
                                                marginBottom: "1rem",
                                                color: "white",
                                                fontSize: "2rem"
                                            }}
                                        >
                                            CARDIO SOLUTION
                                        </h1>
                                        <p>
                                            Quisquam itaque deserunt ullam, quia ea repellendus provident,
                                            ducimus neque ipsam modi voluptatibus doloremque, corrupti
                                            laborum.
                                        </p>
                                    </div>
                                </div>
                                <div className="slide_yoga slide_inner-column">
                                    <div className="yoga_img "></div>
                                    <div className="yoga_text slide_text-column">
                                        <h1
                                            style={{
                                                marginBottom: "1rem",
                                                color: "white",
                                                fontSize: "2rem"
                                            }}
                                        >
                                            YOGA SPECIALIST
                                        </h1>
                                        <p>
                                            Quisquam itaque deserunt ullam, quia ea repellendus provident,
                                            ducimus neque ipsam modi voluptatibus doloremque, corrupti
                                            laborum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="slider__btn slider__btn--left"
                            style={{ alignItems: "center" }}
                        >
                            <i className="fas fa-angle-left" />
                        </button>
                        <button className="slider__btn slider__btn--right">
                            <i className="fas fa-angle-right" />
                        </button>
                    </div>
                </section>
                <section className="section_5">
                    <div className="sec_5_left">
                        <h1 style={{ fontSize: "3.5rem" }}>
                            Awesome Smart Health Can Make Your Life Easier
                        </h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
                            cupiditate sit debitis, aut, perferendis praesentium alias, asperiores
                            similique veniam vitae veritatis.
                        </p>
                        <div className="sec_5_inner_container">
                            <div className="sec_5_inner_left">
                                <div className="inner_left">
                                    <i id="check_icon" className="fas fa-circle-check" />
                                    <h3>Top Professional Team</h3>
                                </div>
                                <div className="inner_left">
                                    <i id="check_icon" className="fas fa-circle-check" />
                                    <h3>world Class Service</h3>
                                </div>
                                <div className="inner_left">
                                    <i id="check_icon" className="fas fa-circle-check" />
                                    <h3>Less Treatment Fees</h3>
                                </div>
                            </div>
                            <div className="sec_5_inner_right">
                                <div className="inner_left">
                                    <i id="check_icon" className="fa fa-circle-check" />
                                    <h3>Top Professional Specialist</h3>
                                </div>
                                <div className="inner_left">
                                    <i id="check_icon" className="fas fa-circle-check" />
                                    <h3>14X7 Available</h3>
                                </div>
                                <div className="inner_left">
                                    <i id="check_icon" className="fas fa-circle-check" />
                                    <h3>Customer Satisfication</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sec_5_right">
                        <div className="sec_5_right_img"></div>
                        <div className="book_appointment">
                            <h1>Book Appointment</h1>
                            <input className="book_input" type="text" placeholder="Full Name" />
                            <input
                                className="book_input"
                                type="number"
                                placeholder="Phone Number"
                            />
                            <select className="book_input" name="doctors" id="doc">
                                <option className="opt_val" value="Dr.raunak kumar">
                                    Dr.Raunak Raj
                                </option>
                                <option value="Dr.Rajesh Kumar">Dr. Rajesh Barik</option>
                                <option value="Dr.Ananya swain">Dr. Ananya Barik</option>
                                <option value="Dr.Deepak Kumar">Dr.Deepak Kumar</option>
                            </select>
                            <button type="button" className="book_btn">
                                Book Now
                            </button>
                        </div>
                    </div>
                </section>
                <section className="section_6">
                    <div className="sec_6-left">
                        <p>Why Choose us</p>
                        <h1>
                            Owr Best Services &amp; Quite
                            <br />
                            Popular Online Treatment
                        </h1>
                        <div className="sec_6-img1"></div>
                        <div className="sec_6-img2"></div>
                    </div>
                    <div className="sec_6-right">
                        <div className="sec_6-right-container-1">
                            <h4>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ex
                                maxime itaque corporis ipsam dolores non explicabo, ipsa temporibus
                                impedit, quos architecto ad pariatur! Itaque fugit nesciunt doloremque
                                quos! Nam?
                            </h4>
                        </div>
                        <div className="sec_6-right-container-2 section-right-6">
                            <div className="container_2 container-icon">
                                <i className="fas fa-check" />
                            </div>
                            <div className="container_2 container-text">
                                <h1>Mental health Solutions</h1>
                                <p>
                                    Vestibulum ac diam sit amet quam vehicula elemen tum sed sit amet
                                    dui{" "}
                                </p>
                            </div>
                        </div>
                        <div className="sec_6-right-container-3 section-right-6">
                            <div className="container_3 container-icon">
                                <i className="fas fa-check" />
                            </div>
                            <div className="container_3 container-text">
                                <h1>Rapid Patient Improvement</h1>
                                <p>
                                    Vestibulum ac diam sit amet quam vehicula elemen tum sed sit amet
                                    dui{" "}
                                </p>
                            </div>
                        </div>
                        <div className="sec_7-right-container-4 section-right-6">
                            <div className="container_4 container-icon">
                                <i className="fas fa-check" />
                            </div>
                            <div className="container_4 container-text">
                                <h1>World Class Treatment</h1>
                                <p>
                                    Vestibulum ac diam sit amet quam vehicula elemen tum sed sit amet
                                    dui{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_7">
                    <div className="sec-7_div1">
                        <h1>LOGO</h1>
                    </div>
                    <div className="sec-7_div2">
                        <h1>Don't Hesitate To Contact us</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                            inventore voluptatem possimus quibusdam veritatis. Accusamus ipsum saepe
                            quas.
                        </p>
                    </div>
                    <div className="sec-7_div3">
                        <button type="button" className="Appointment_btn">
                            Make Appointment
                        </button>
                        <button type="button" className="contact_us">
                            Contact Us
                        </button>
                    </div>
                </section>
        </>
    )
}

export default Appointment