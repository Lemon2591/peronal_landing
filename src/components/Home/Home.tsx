import React, { useState, useEffect, FC } from "react";
import { Header } from "../Header";
import Particles from "react-particles";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { settingPar } from "../../ultill/settingPar";
import Slider from "react-slick";
import Slide_one from "./Slide_one";
import * as Yup from "yup";
import { useFormik } from "formik";
import MetaSeo from "../MetaSeo";

import { FcNext } from "react-icons/fc";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const dataSubmit = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Wrong email format"),
  phone: Yup.string()
    .required("Phone number name is required")
    .matches(/\d/g, "Is not in correct format")
    .max(12, "Maximum 12 symbols"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function Home() {
  const formik = useFormik<{
    name: string;
    email: string;
    phone: string;
    message: string;
  }>({
    initialValues,
    validationSchema: dataSubmit,
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => <ul className="dot_slick">{dots}</ul>,
    nextArrow: <></>,
    prevArrow: <></>,
  };

  // console.log(data);
  return (
    <>
      <MetaSeo />
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
                    style={{
                      padding: "25px 25px 50px 25px",
                      backgroundColor: "#fff",
                    }}
                  >
                    <div className="project-carousel-flex">
                      <div className="project-carousel-img">
                        <img src="./assets/img/home/project_a.png" alt="ing" />
                      </div>
                      <div className="project-carousel-details">
                        <div>
                          <div>
                            <h6>Alo Doctor</h6>
                          </div>
                          <div>
                            <span>Mô tả</span>
                            <p>
                              Một nền tảng chăm sóc sức khoẻ, người dùng có thể
                              đặt bác sĩ tại nhà, đặt lịch khám bệnh tại cơ sở y
                              tế và mua bảo hiểm. Ngoài ra, người dùng dùng có
                              thể trò chuyện trực tiếp qua hệ thống nhắn tin
                              Real-time của ứng dụng.
                            </p>
                          </div>
                          <div>
                            <span>Thời gian - Nền tảng</span>
                            <p>2022 - Web Application</p>
                          </div>
                        </div>
                        <div className="project-carousel-btn">
                          <a
                            href="https://alodoctor.vercel.app"
                            target="_blank"
                          >
                            Visit now
                          </a>
                          <a href="">View souce</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      padding: "25px 25px 50px 25px",
                      backgroundColor: "#fff",
                    }}
                  >
                    <div className="project-carousel-flex">
                      <div className="project-carousel-img">
                        <img src="./assets/img/home/project_b.png" alt="ing" />
                      </div>
                      <div className="project-carousel-details">
                        <div>
                          <div>
                            <h6>Edubin</h6>
                          </div>
                          <div>
                            <span>Mô tả</span>
                            <p>
                              Một landing page bán khoá học, nhận diện thương
                              hiệu.
                            </p>
                          </div>
                          <div>
                            <span>Thời gian - Nền tảng</span>
                            <p>2022 - Website</p>
                          </div>
                        </div>
                        <div className="project-carousel-btn">
                          <a href="https://edubin.vercel.app" target="_blank">
                            Visit now
                          </a>
                          <a href="">View souce</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      padding: "25px 25px 50px 25px",
                      backgroundColor: "#fff",
                    }}
                  >
                    <div className="project-carousel-flex">
                      <div className="project-carousel-img">
                        <img src="./assets/img/home/project_c.png" alt="ing" />
                      </div>
                      <div className="project-carousel-details">
                        <div>
                          <div>
                            <h6>Tịnh Tâm An</h6>
                          </div>
                          <div>
                            <span>Mô tả</span>
                            <p>Website Ecommerce về sản phẩm làm đẹp và spa.</p>
                          </div>
                          <div>
                            <span>Thời gian - Nền tảng</span>
                            <p>2022 - Website</p>
                          </div>
                        </div>
                        <div className="project-carousel-btn">
                          <a href="" target="_blank">
                            Visit now
                          </a>
                          <a href="">View souce</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      padding: "25px 25px 50px 25px",
                      backgroundColor: "#fff",
                    }}
                  >
                    <div className="project-carousel-flex">
                      <div className="project-carousel-img">
                        <img src="./assets/img/home/project_d.png" alt="ing" />
                      </div>
                      <div className="project-carousel-details">
                        <div>
                          <div>
                            <h6>Slim</h6>
                          </div>
                          <div>
                            <span>Mô tả</span>
                            <p>Website Ecommerce về thực phẩm và healthy.</p>
                          </div>
                          <div>
                            <span>Thời gian - Nền tảng</span>
                            <p>2022 - Website</p>
                          </div>
                        </div>
                        <div className="project-carousel-btn">
                          <a href="" target="_blank">
                            Visit now
                          </a>
                          <a href="">View souce</a>
                        </div>
                      </div>
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
                <img src="./assets/img/home/IMG_0451.JPG" alt="" />
                <span>Anh Tuan</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="project-title  contact_title">
          <h1>Contact</h1>
          <div className="contact-container">
            <div>
              <div className="form_left">
                <h1>Keep In Touch !</h1>
                <div>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    // name="name"
                    placeholder="Fill your full name, please !"
                    {...formik.getFieldProps("name")}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <span className="error_input">{formik.errors.name}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    // name="email"
                    placeholder="Fill your email, please !"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <span className="error_input">{formik.errors.email}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    // name="phone"
                    placeholder="Fill your phone number, please !"
                    {...formik.getFieldProps("phone")}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <span className="error_input">{formik.errors.phone}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    // type="text"
                    // name="message"
                    placeholder="Type some message !"
                    {...formik.getFieldProps("message")}
                  />
                </div>
                <div>
                  <a onClick={formik.submitForm}>Send contact</a>
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
