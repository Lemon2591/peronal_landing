import React, { useState, useEffect, FC } from "react";
import { Header } from "../Header";
import Particles from "react-particles";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { settingPar } from "../../ultill/settingPar";
import Slider from "react-slick";
import Slide_one from "./Slide_one";

import { FcNext } from "react-icons/fc";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

function Home() {
  const [currentSlide, setCurrentSlide] = useState<any>(0);
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // await console.log(container);
    },
    []
  );

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
  };

  const settings_two = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slide_one currentSlide={currentSlide} />

      <div className="second-body">
        <div className="second-body-container">
          <div className="second-body-content">
            <h5 data-aos="fade-up" data-aos-duration="1000">
              My story
            </h5>
            <h1 data-aos="fade-up" data-aos-delay="500">
              A little bit about me !
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="1000"
            >
              I was born and raised in Hung Yen, Vietnam. When I was a first
              year student at Ha Noi Open University, I started learning about
              website development. After about one year, the COVID-19 pandemic
              forced me to learning online. At that time, i had a lot of times
              to learn in-depth front-end programming.
            </p>
          </div>
        </div>
      </div>

      <div className="third-body">
        <div className="third-body-container">
          <div className="third-body-content">
            <div className="third-body-items">
              <div className="third-body-item">
                <div className="third-body-item-title" data-aos="fade-up">
                  <h1>FRONT-END</h1>
                  <p>
                    Writing easily understood, modular, fast, and type-safe code
                    with TypeScript and modern JavaScript syntax and publishing
                    packages to NPM.
                  </p>
                  <div className="third-body-item-more">
                    <a href="">See more</a>
                    <i>
                      {" "}
                      <FcNext />
                    </i>
                  </div>
                </div>
                <div className="third-body-item-content" data-aos="fade-down">
                  <div className="third-body-item-content-item">
                    <div>
                      <img src="./assets/img/home/javascript.svg" alt="" />
                      <p>Javascript</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/typescript.svg" alt="" />
                      <p>Typescript</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/react.svg" alt="" />
                      <p>ReactJS</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/next.svg" alt="" />
                      <p>NextJS</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/html.svg" alt="" />
                      <p>HTML</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/css.svg" alt="" />
                      <p>CSS</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/antd.svg" alt="" />
                      <p>Antd</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/redux.svg" alt="" />
                      <p>Redux</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="third-body-item two-item">
                <div className="third-body-item-content" data-aos="fade-up">
                  <div className="third-body-item-content-item">
                    <div>
                      <img src="./assets/img/home/npm.svg" alt="" />
                      <p>NPM</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/node.svg" alt="" />
                      <p>NodeJS</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/ex.svg" alt="" />
                      <p>Express</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/mongo.svg" alt="" />
                      <p>MongoDB</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/sql.svg" alt="" />
                      <p>MySQL</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/jwt.svg" alt="" />
                      <p>JWT</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/go.svg" alt="" />
                      <p>GoLang</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/socket.svg" alt="" />
                      <p>SocketIO</p>
                    </div>
                  </div>
                </div>
                <div className="third-body-item-title" data-aos="fade-down">
                  <h1>BACK-END</h1>
                  <p>
                    Writing easily understood, modular, fast, and type-safe code
                    with TypeScript and modern JavaScript syntax and publishing
                    packages to NPM.
                  </p>
                  <div className="third-body-item-more">
                    <a href="">See more</a>
                    <i>
                      {" "}
                      <FcNext />
                    </i>
                  </div>
                </div>
              </div>

              <div className="third-body-item two-item">
                <div className="third-body-item-content" data-aos="fade-up">
                  <div className="third-body-item-content-item">
                    <div>
                      <img src="./assets/img/home/npm.svg" alt="" />
                      <p>NPM</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/node.svg" alt="" />
                      <p>NodeJS</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/ex.svg" alt="" />
                      <p>Express</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/mongo.svg" alt="" />
                      <p>MongoDB</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/sql.svg" alt="" />
                      <p>MySQL</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/jwt.svg" alt="" />
                      <p>JWT</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/go.svg" alt="" />
                      <p>GoLang</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/socket.svg" alt="" />
                      <p>SocketIO</p>
                    </div>
                  </div>
                </div>
                <div className="third-body-item-title" data-aos="fade-down">
                  <h1>BACK-END</h1>
                  <p>
                    Writing easily understood, modular, fast, and type-safe code
                    with TypeScript and modern JavaScript syntax and publishing
                    packages to NPM.
                  </p>
                  <div className="third-body-item-more">
                    <a href="">See more</a>
                    <i>
                      {" "}
                      <FcNext />
                    </i>
                  </div>
                </div>
              </div>

              <div className="third-body-item">
                <div className="third-body-item-title" data-aos="fade-up">
                  <h1>FRONT-END</h1>
                  <p>
                    Writing easily understood, modular, fast, and type-safe code
                    with TypeScript and modern JavaScript syntax and publishing
                    packages to NPM.
                  </p>
                  <div className="third-body-item-more">
                    <a href="">See more</a>
                    <i>
                      {" "}
                      <FcNext />
                    </i>
                  </div>
                </div>
                <div className="third-body-item-content" data-aos="fade-down">
                  <div className="third-body-item-content-item">
                    <div>
                      <img src="./assets/img/home/javascript.svg" alt="" />
                      <p>Javascript</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/typescript.svg" alt="" />
                      <p>Typescript</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/react.svg" alt="" />
                      <p>ReactJS</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/next.svg" alt="" />
                      <p>NextJS</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/html.svg" alt="" />
                      <p>HTML</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/css.svg" alt="" />
                      <p>CSS</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/antd.svg" alt="" />
                      <p>Antd</p>
                    </div>
                    <div>
                      <img src="./assets/img/home/redux.svg" alt="" />
                      <p>Redux</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project" id="project">
        <div className="project-container">
          <div className="project-title">
            <h1>My Project</h1>
            <a href="">View all</a>
          </div>

          <div className="project-carousel">
            <div className="project-carousel-content">
              <Slider {...settings}>
                <div>
                  <div
                    className="project-carousel-img"
                    style={{
                      backgroundImage:
                        "url(https://is2-ssl.mzstatic.com/image/thumb/divxDY27bQOH7PPRX2wfJQ/2500x1406.jpg)",
                    }}
                  >
                    <div className="project-carousel-btn">
                      <a href="">Visit now</a>
                      <a href="">View souce</a>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="project-carousel-img"
                    style={{
                      backgroundImage:
                        "url(https://is2-ssl.mzstatic.com/image/thumb/divxDY27bQOH7PPRX2wfJQ/2500x1406.jpg)",
                    }}
                  >
                    <div className="project-carousel-btn">
                      <a href="">Visit now</a>
                      <a href="">View souce</a>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="my_testimonials">
        <div className="project-title testimonials_title">
          <h1 data-aos="fade-up">Testimonials</h1>
          <div>
            <div className="text_container">
              <p data-aos="fade-up">
                “I enjoy building software that makes peoples' lives easier by
                writing elegant, performant, and maintainable frontend code. I
                also enjoy petting every cat I see.”
              </p>
              <div data-aos="fade-up">
                <img
                  src="https://preview.colorlib.com/theme/create/images/person_4.jpg.webp"
                  alt=""
                />
                <span>Anh Tuan</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="project-title testimonials_title contact_title">
          <h1>Contact</h1>
          <div className="contact-container">
            <div>
              <div className="form_left">
                <h1>Keep In Touch !</h1>
                <div>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Fill your full name, please !"
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Fill your email, please !"
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Fill your phone number, please !"
                  />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    // type="text"
                    name="message"
                    placeholder="Type some message !"
                  />
                </div>
                <div>
                  <a>Send contact</a>
                </div>
              </div>
              <div className="add_right">
                <div>
                  <h6>Address</h6>
                  <a>79 Cau Giay, Yen Hoa, Cau Giay, Ha Noi</a>
                </div>

                <div>
                  <h6>Phone</h6>
                  <a>0868158218</a>
                </div>

                <div>
                  <h6>Email Address</h6>
                  <a>cnnhok6262@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-clean">
        <footer>
          <div className="footer_container">
            <div className="footer-left">
              <ul>
                <li>Follow me: </li>
                <li>
                  <a href="">
                    <i>
                      <AiOutlineFacebook />
                    </i>
                  </a>
                </li>

                <li>
                  <a href="">
                    <i>
                      <AiOutlineGithub />
                    </i>
                  </a>
                </li>

                <li>
                  <a href="">
                    <i>
                      <AiOutlineLinkedin />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-center">
              <p>
                Built and designed by Lemondev.
                <br />
                Copyright © 2023 All Rights Reserved.
              </p>
            </div>
            <div></div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
