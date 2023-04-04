import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
const Home = () => {
    return (
        <>
            <header className="header" id="header">
                <nav className="navbar container">
                    <Link to={''} className="brand">
                        Logo
                    </Link>
                    <div className="menu" id="menu">
                        <ul className="menu-list">
                            <li className="menu-item">
                                <Link to={''} className="menu-link is-active">
                                    <i className="menu-icon ion-md-home" />
                                    <span className="menu-name">
                                        <i style={{ fontSize: 25 }} className="fas fa-home" />
                                    </span>
                                </Link>
                            </li>
                            <li className="menu-item">
                                <Link to={''} className="menu-link">
                                    <i className="menu-icon ion-md-search" />
                                    <span className="menu-name">
                                        <i style={{ fontSize: 25 }} className="fas fa-truck" />
                                    </span>
                                </Link>
                            </li>
                            <li className="menu-item">
                                <Link to={''} className="menu-link">
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
                                <Link to={''} className="menu-link">
                                    <i className="menu-icon ion-md-heart" />
                                    <span className="menu-name">
                                        <i style={{ fontSize: 25 }} className="fas fa-heart" />
                                    </span>
                                </Link>
                            </li>
                            <li className="menu-item">
                                <Link to={''} className="menu-link">
                                    <i className="menu-icon ion-md-contact" />
                                    <span className="menu-name">
                                        <i style={{ fontSize: 25 }} className="fas fa-user-circle" />
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            {/*nav bar end*/}
            {/* section-1 */}
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
                            <img src="icon\24-7.png" />
                        </div>
                        <h4 style={{ marginTop: "2.8rem" }}>24X7 Support</h4>
                        <p>industry's standard dummand scrambled</p>
                    </div>
                    <div className="doc_con">
                        <div className="doctor_icon">
                            <img src="icon\doctor -color.png" />
                        </div>
                        <h4 style={{ marginTop: "2rem" }}>Qualified Doctor</h4>
                        <p>industry's standard dummand scrambled</p>
                    </div>
                </div>
                {/* <div class="prev_btn">
      <button input="button" class="previous_btn">P</button>
  </div>
  <div class="next_btn">
      <button input="button" class="next_button">N</button>
  </div> */}
            </section>
            <hr className="sec-1_line" />
            {/*section-2 for doctor consult*/}
            <section className="sections section-2">
                <div className="sec-2_left">
                    <img src="image\doc_pat.jpg" />
                </div>
                <div className="sec-2_right">
                    <div className="sec-2 doc_logo">
                        <img src="icon\medical-team.png" />
                    </div>
                    <div className="sec-2 doc_heading">
                        <h1>Qualified Doctor</h1>
                    </div>
                    <div className="sec-2 doc_content">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only
                            five centuries,
                        </p>
                    </div>
                    <button className="sec-2 doc-button">Make Apponintment</button>
                </div>
            </section>
            {/*section-3 for medication*/}
            <section className="sections section-3">
                <div className="sec-3_left">
                    <div className="sec-3 med_logo">
                        <img src="icon\pills_icon.png" />
                    </div>
                    <div className="sec-3 med_heading">
                        <h1>Best Medicine-Best Rate </h1>
                    </div>
                    <div className="sec-3 med_content">
                        <p>
                            {" "}
                            orem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type
                        </p>
                    </div>
                    <button className="sec-3 med-button">Shope Now</button>
                </div>
                <div className="sec-3_right">
                    <img src="image\med-hand.jpg" />
                </div>
            </section>
            {/*section-4 for life style*/}
            <section className="sections section-4">
                <div className="sec-4_left">
                    <img src="image\lifestyle.jpg" />
                </div>
                <div className="sec-4_right">
                    <div className="sec-4 lifestyle_logo">
                        <img src="icon\yoga-pose.png" />
                    </div>
                    <div className="sec-4 lifestyle_heading">
                        <h1>Prevention Is Better Than Cure</h1>
                    </div>
                    <div className="sec-4 lifestyle_content">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only
                            five centuries,
                        </p>
                    </div>
                    <button className="sec-4 lifestyle-button">Learn More</button>
                </div>
            </section>
            <hr className="sec-4_line" />
            <section className="sections section-5">
                <div className="sec-5_left">
                    <div className="sec-5_heading">
                        <h1>Shop by Categories</h1>
                    </div>
                    <div className="sec-5_content">
                        <p>
                            And collaborate; game-changer game-changer efficient strategy. We must
                            stand up contextualize,
                        </p>
                    </div>
                    <div className="sec-5_search">
                        <input
                            type="search"
                            className="search5"
                            placeholder="Search Producr..."
                        />
                        <button type="button" className="search5_btn">
                            search
                        </button>
                    </div>
                </div>
                <div className="sec-5_right">
                    <div className="sec-5_item item-1">
                        <div className="sec-5_item_style">
                            <button type="button" className="style_btn">
                                Toothbrush
                            </button>
                        </div>
                    </div>
                    <div className="sec-5_item item-2">
                        <div className="sec-5_item_style">
                            <button type="button" className="style_btn">
                                Nutrition
                            </button>
                        </div>
                    </div>
                    <div className="sec-5_item item-3">
                        <div className="sec-5_item_style">
                            <button type="button" className="style_btn">
                                Diet
                            </button>
                        </div>
                    </div>
                    <div className="sec-5_item item-4">
                        <div className="sec-5_item_style">
                            <button type="button" className="style_btn">
                                Handcare
                            </button>
                        </div>
                    </div>
                    <div className="sec-5_item item-5">
                        <div className="sec-5_item_style">
                            <button type="button" className="style_btn">
                                Shop
                            </button>
                        </div>
                    </div>
                    <div className="sec-5_item item-6">
                        <div className="sec-5_item_style">
                            <button type="button" className="style_btn">
                                Shop
                            </button>
                        </div>
                    </div>
                    <div className="sec-5_item item-7">
                        <div className="sec-5_item_style">
                            <button type="button" className="style_btn">
                                Shop
                            </button>
                        </div>
                    </div>
                    <div className="sec-5_item item-8">
                        <div className="sec-5_item_style">
                            <button type="button" className="style_btn">
                                Shop
                            </button>
                        </div>
                    </div>
                    <div className="sec-5_item item-9">
                        <div className="sec-5_item_style">
                            <button type="button" className="style_btn">
                                Shop
                            </button>
                        </div>
                    </div>
                    <div className="sec-5_item item-10">
                        <div className="sec-5_item_style">
                            <button type="button" className="style_btn">
                                Shop
                            </button>
                        </div>
                    </div>
                    <div className="sec-5_item item-11">
                        <div className="sec-5_item_style">
                            <button type="button" className="style_btn">
                                Shop
                            </button>
                        </div>
                    </div>
                    <div className="sec-5_item item-12">
                        <div className="sec-5_item_style">
                            <button type="button" className="style_btn">
                                Shop
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="sec-1_line" />
            <section className="sections section-6">
                <div className="dr">
                    <img className="drone_icon" src="icon\drone.png" />
                </div>
                <div className="sec-6_content">
                    <h1 style={{ margin: "1rem" }}>FAST DELIVERY</h1>
                    <h3 style={{ margin: "1rem" }}>Drone Delivery</h3>
                    <p style={{ margin: "1rem" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five
                        centuries, Ipsum has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not only five
                        centuries, Ipsum has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not only five
                        centuries,
                    </p>
                </div>
            </section>
            {/*section 6 end*/}
            {/* section 7*/}
            <hr className="sec-1_line" />
            <section className="sections section-7">
                <h2>Exclusive Online</h2>
                <h2>All Sales Up to 60% OFF*</h2>
                <h5>*Online only.Select.Price reflects discount</h5>
            </section>
            {/*section-7 end */}
            <section className=" section-8">
                <div className="sec-8_logo footer">
                    <h1>LOGO</h1>
                </div>
                <div className="sec-8_about footer">
                    <h1>About Us</h1>
                    <p>
                        <Link to={''}> Gift Card</Link>
                    </p>
                    <p>
                        <Link to={''}> Our Story</Link>
                    </p>
                    <p>
                        <Link to={''}> Partners</Link>
                    </p>
                    <p>
                        <Link to={''}> Carrers</Link>
                    </p>
                    <p>
                        <Link to={''}> Affiliate Program</Link>
                    </p>
                </div>
                <div className="sec-8_help footer">
                    <h1> Help</h1>
                    <p>
                        <Link to={''}> FAQ</Link>
                    </p>
                    <p>
                        <Link to={''}> Delivery</Link>
                    </p>
                    <p>
                        <Link to={''}> Payment</Link>
                    </p>
                    <p>
                        <Link to={''}> Return</Link>
                    </p>
                    <p>
                        <Link to={''}> contact Us</Link>
                    </p>
                </div>
                <div className="sec-8_link footer">
                    <h1> Quick Link</h1>
                    <p>
                        <Link to={''}> Delivery </Link>
                    </p>
                    <p>
                        <Link to={''}> Gift Receipt</Link>
                    </p>
                    <p>
                        <Link to={''}>  Recalled Items</Link>
                    </p>
                    <p>
                        <Link to={''}> payment</Link>
                    </p>
                    <p>
                        <Link to={''}>  My Account</Link>
                    </p>
                </div>
                <div className="sec-8_follow">
                    <p className="insta">
                        <Link to={''}>
                            <i className="fab fa-facebook fac" />
                        </Link>
                    </p>
                    <p className="facebook">
                        <Link to={''}>
                            <i className="fab fa-instagram" />
                        </Link>
                    </p>
                    <p className="tweet">
                        <Link to={''}>
                            <i className="fab fa-twitter" />
                        </Link>
                    </p>
                </div>
            </section>

        </>
    )
}

export default Home