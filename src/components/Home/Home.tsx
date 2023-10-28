import React, { useState, useEffect, FC } from "react";
import Particles from "react-particles";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { settingPar, setting_par_two } from "../../ultill/settingPar";
import Slider from "react-slick";
import Slide_one from "./Slide_one";
import * as Yup from "yup";
import { useFormik } from "formik";
import MetaSeo from "../MetaSeo";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";

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

  useEffect(() => {
    console.log("object");
  }, [currentSlide]);

  return (
    <>
      <MetaSeo />

      <div data-bs-spy="scroll" data-bs-target="#navScroll">
        <main>
          <div className="w-100 overflow-hidden h-100vh" id="top">
            <div className="container position-relative d-flex align-items-center h-100">
              <div className="row res_mb_new">
                <div
                  className="col-lg-5 py-vh-6 position-relative "
                  data-aos="fade-right"
                >
                  <h1 className="display-1 fw-bold mt-5">
                    Anh Tuan <br />
                    LemonDev
                  </h1>
                  <p className="lead">
                    Xin chào! <br /> Tôi tên là Tuấn Anh, tôi đang là nhà phát
                    triển website !
                  </p>
                  <Link href="/contact">
                    <a
                      className="btn btn-dark btn-xl shadow me-3 rounded-0 my-5 btn_type_stroke"
                      style={{ padding: "12px 35px" }}
                    >
                      Liên hệ
                    </a>
                  </Link>
                </div>
                <div className="col-lg-7" data-aos="fade-left">
                  <img
                    className="img_home"
                    src="/assets/img/page/item.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="py-vh-5 w-100 overflow-hidden" id="services">
            <div className="container">
              <div className="row d-flex justify-content-end">
                <div className="col-lg-8" data-aos="fade-down">
                  <h2 className="display-6">
                    Tôi chuyên lập trình website, desktop app, thiết kế hệ
                    thống, hỗ trợ đồ án với ngôn ngữ lập trình như JavaScript,
                    Golang và một sốt framework phổ biến như: ReactJS, NextJS,
                    Vue, Express và NestJS.
                  </h2>
                </div>
              </div>
              <div className="row d-flex align-items-center">
                <div
                  className="col-md-6 col-lg-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <span className="h5 fw-lighter">01.</span>
                  <h3 className="py-5 border-top border-dark">
                    Lập trình website quảng cáo, bán hàng, quảng quá thương
                    hiệu.
                  </h3>
                  <p>
                    Tối ưu hoá tìm kiếm trên Google (SEO) <br />- Thống kê lượng
                    truy cập, lượt click event, lượng chuyển đổi qua Google
                    Analytics <br />- Tối ưu hoá PageSpeed Insights <br /> - Tối
                    ưu tốt UX/UI
                  </p>
                  {/* <a href="#" className="link-fancy">
                    Learn more
                  </a> */}
                </div>

                <div
                  className="col-md-6 col-lg-4 py-vh-4 pb-0"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <span className="h5 fw-lighter">02.</span>
                  <h3 className="py-5 border-top border-dark">
                    Thiết kế và lập trình hệ thống quản lý CMS, CRM.
                  </h3>
                  <p>
                    - Sử dụng ngôn ngữ lập trình như Golang, JavaScript.
                    <br />- Sử dụng cơ ở dữ liệu như MySQL, MariaDB, MongoDB.{" "}
                    <br /> - Sử dụng các framework như ReactJS, NextJS.
                    <br />- Tối ưu hoá và dễ dàng mở rộng.
                  </p>
                  {/* <a href="#" className="link-fancy">
                    Learn more
                  </a> */}
                </div>

                <div
                  className="col-md-6 col-lg-4 py-vh-6 pb-0"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <span className="h5 fw-lighter">03.</span>
                  <h3 className="py-5 border-top border-dark">
                    Hỗ trợ đồ án, hỗ trợ học tập, vấn đề về lập trình website.
                  </h3>
                  <p>
                    - Hỗ trợ các ngôn ngữ như JavaScript, Golang.
                    <br />- Hỗ trợ lập trình back-end, RESTful API
                    <br />- Hỗ trợ sử dụng database như MySQL, MongoDB,
                    MariaDB,...v.v
                  </p>
                  <a href="#" className="link-fancy">
                    Tải mẫu đồ án miễn phí tại đây !
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="py-vh-4 w-100 overflow-hidden" id="aboutus">
            <div className="container">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-lg-6">
                  <div className="row gx-5 d-flex">
                    <div className="col-md-11">
                      <div
                        className="shadow ratio ratio-16x9 rounded bg-cover bp-center align-self-end"
                        data-aos="fade-right"
                        style={{
                          backgroundImage:
                            "url(/assets/img/page/webp/interior11.webp)",
                          aspectRatio: "50%",
                        }}
                      ></div>
                    </div>
                    <div className="col-md-5 offset-md-1">
                      <div
                        className="shadow ratio ratio-1x1 rounded bg-cover mt-5 bp-center float-end"
                        data-aos="fade-up"
                        style={{
                          backgroundImage:
                            "url(/assets/img/page/webp/people1.webp)",
                        }}
                      ></div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="col-12 shadow ratio rounded bg-cover mt-5 bp-center"
                        data-aos="fade-left"
                        style={{
                          backgroundImage: "url(img/webp/people4.webp)",
                          aspectRatio: "50%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h3
                    className="py-5 border-top border-dark"
                    data-aos="fade-left"
                  >
                    Một chút giới thiệu về tôi !
                  </h3>
                  <p data-aos="fade-left" data-aos-delay="200">
                    Tôi sinh ra và lớn lên tại mảnh đất Hưng Yên. Tôi tốt nghiệp
                    tại Trường Đại Học Mở Hà Nội. Tôi có một niềm đam mê với
                    công nghệ thông tin và đặc biệt là lĩnh vực phát triển nền
                    tảng website.
                  </p>
                  <p>
                    {/* <a
                      href="#"
                      className="link-fancy link-dark"
                      data-aos="fade-left"
                      data-aos-delay="400"
                    >
                      Learn more
                    </a> */}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-vh-5 w-100 overflow-hidden" id="experience">
            <div className="container">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-lg-5">
                  <h3
                    className="py-5 border-top border-dark"
                    data-aos="fade-right"
                  >
                    Kinh nghiệm làm việc !
                  </h3>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-12">
                      <h2 className="display-6 mb-5" data-aos="fade-down">
                        Hiện nay tôi đang là Junior Developer, tôi có thể lập
                        trình Front-End và Back-End.
                      </h2>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up">
                      <div className="display-6 fw-bold py-4">Front-End</div>
                      <p className="text-black-50">
                        - Framework: ReactJS, NextJS. <br />- HTML/CSS,
                        JavaScript, TypeScript, Webpack, SASS, Tailwind CSS,
                        Bootstrap.
                        <br />
                        - Library: Redux Saga, ReduxThunk, Antd, Mapbox, Axios,
                        Lodash, ...v.v
                        <br />- Tools: Figma, Postman, Jira, VSCode, WebStorm,
                        ...v.v
                        <br />- Testing: Jest
                      </p>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up">
                      <div className="display-6 fw-bold py-4">Back-End</div>
                      <p className="text-black-50">
                        - Foundation: NodeJS. <br /> - Framework: ExpressJS,
                        NestJS. <br />- Golang, JavaScript, Redis, SocketIO.{" "}
                        <br />- DataBase: MySQL, MongoDB, MariaDB, PostgreSQL.
                        <br />- CLI: MacOS, Linux, Windows.
                        <br />- Service: AWS, Google Service.
                        <br /> - Testing: Oha.
                        <br />- Serve: Pm2, Nginx, Docker.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 
          <div
            className="position-relative overflow-hidden w-100 bg-light"
            id="gallery"
          >
            <div className="container-fluid">
              <div className="row overflow-scroll">
                <div className="col-12">
                  <div className="row vw-100 px-0 py-vh-5 d-flex align-items-center scrollx">
                    <div className="col-md-2" data-aos="fade-up">
                      <img
                        src="img/webp/interior37.webp"
                        className="rounded shadow img-fluid"
                        alt="nice gallery image"
                        width="512"
                        height="341"
                      />
                    </div>

                    <div
                      className="col-md-2"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <img
                        src="img/webp/people1.webp"
                        className="img-fluid rounded shadow"
                        alt="nice gallery image"
                        width="1164"
                        height="776"
                      />
                    </div>

                    <div
                      className="col-md-3"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <img
                        src="img/webp/people2.webp"
                        className="img-fluid rounded shadow"
                        alt="nice gallery image"
                        width="844"
                        height="1054"
                      />
                    </div>

                    <div
                      className="col-md-3"
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
                      <img
                        src="img/webp/interior29.webp"
                        className="img-fluid rounded shadow"
                        alt="nice gallery image"
                        width="844"
                        height="562"
                      />
                    </div>

                    <div
                      className="col-md-2"
                      data-aos="fade-up"
                      data-aos-delay="800"
                    >
                      <img
                        src="img/webp/people23.webp"
                        className="rounded shadow img-fluid"
                        alt="nice gallery image"
                        width="512"
                        height="341"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="container py-vh-4 w-100 overflow-hidden">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-lg-5">
                <h3
                  className="py-5 border-top border-dark"
                  data-aos="fade-right"
                >
                  What our clients say
                </h3>
              </div>
              <div className="col-md-7" data-aos="fade-left">
                <blockquote>
                  <div className="fs-4 my-3 fw-light pt-4 border-bottom pb-3">
                    “I´am the CEO of this company. So maybe you think "he will
                    tell us something super awesome about it only". But no. Its
                    a really strange place to work with creepy people all
                    around. They do some computer stuff I don´t understand. But
                    I wear expensive Glasses and a Patagonia Hoodie. So I´am
                    fine with it.”
                  </div>
                  <img
                    src="img/webp/person11.webp"
                    width="64"
                    height="64"
                    className="img-fluid rounded-circle me-3"
                    alt=""
                    data-aos="fade"
                  />
                  <span>
                    <span className="fw-bold">John Doe,</span>
                    CEO of Stride Ltd.
                  </span>
                </blockquote>
              </div>
            </div>
          </div> */}

          <div className="bg-light w-100 overflow-hidden" id="project">
            <div className="container py-vh-6">
              <div className="row d-flex justify-content-center">
                <div className="col-12 col-lg-10 col-xl-8 text-center">
                  <h2 className="display-6">Dự án</h2>
                  {/* <p className="lead">
                    Một số dự án mà tôi đã thực hiện trước đó.
                  </p> */}
                </div>
                <div className="col-12 mt-4">
                  <div className="row row-cols-1 row-cols-md-2 g-5 d-flex align-items-center jdhqwhadgags">
                    <a
                      className="col-12 col-lg-6 col-xl-4"
                      data-aos="fade-right"
                      href="https://alodoctor.lemondev.id.vn"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="card p-4 mt-3 border-0">
                        <div className="card-body">
                          <div className="text-dark py-2 fs-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-half"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                            </svg>
                          </div>
                          <blockquote className="blockquote">
                            <p>
                              - Booking, thanh toán, theo dõi sức khoẻ.
                              <br />
                              - Quản lý lịch trình, quản lý bệnh nhân.
                              <br />- Nhắn tin, booking thời gian thực.
                            </p>
                          </blockquote>
                          <div className="img_home_project">
                            <img src="/assets/img/home/b.png" alt="" />
                          </div>
                          <div className="d-flex justify-content-between border-top pt-3">
                            <div>
                              <span className="h6 fw-5">Alo Doctor</span>
                              <br />
                              <small className="text-muted">
                                Web Application
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a
                      className="col-12 col-lg-6 col-xl-4"
                      data-aos="fade-right"
                      href="hhttps://edubin.lemondev.id.vn/"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="card p-4 mt-3 border-0">
                        <div className="card-body">
                          <div className="text-dark py-2 fs-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-half"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                            </svg>
                          </div>
                          <blockquote className="blockquote">
                            <p>
                              - Landing page.
                              <br />- Giới thiệu sản phẩm, khoá học.
                            </p>
                          </blockquote>
                          <div className="img_home_project">
                            <img src="/assets/img/home/a.png" alt="" />
                          </div>
                          <div className="d-flex justify-content-between border-top pt-3">
                            <div>
                              <span className="h6 fw-5">Edubin</span>
                              <br />
                              <small className="text-muted">Website</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a
                      className="col-12 col-lg-6 col-xl-4"
                      data-aos="fade-right"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="card p-4 mt-3 border-0">
                        <div className="card-body">
                          <div className="text-dark py-2 fs-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-half"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                            </svg>
                          </div>
                          <blockquote className="blockquote">
                            <p>
                              - Landing page.
                              <br />- Mua bán sản phẩm
                            </p>
                          </blockquote>
                          <div className="img_home_project">
                            <img src="/assets/img/home/project_c.png" alt="" />
                          </div>
                          <div className="d-flex justify-content-between border-top pt-3">
                            <div>
                              <span className="h6 fw-5">Tịnh Tâm An</span>
                              <br />
                              <small className="text-muted">Website</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="small py-vh-3 w-100 overflow-hidden">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-6 col-lg-4 border-end"
                  data-aos="fade-up"
                >
                  <div className="d-flex">
                    <div className="col-md-3 flex-fill pt-3 pe-3 pe-md-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        fill="currentColor"
                        className="bi bi-box-seam"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                      </svg>
                    </div>
                    <div className="col-md-9 flex-fill">
                      <h3 className="h5 my-2">Làm việc nhanh chóng</h3>
                      <p>
                        Làm việc một cách nhanh chóng, đảm bảo tiến độ và yêu
                        cầu của khách hàng.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-4 border-end"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="d-flex">
                    <div className="col-md-3 flex-fill pt-3 pt-3 pe-3 pe-md-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        fill="currentColor"
                        className="bi bi-card-checklist"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                        <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                      </svg>
                    </div>
                    <div className="col-md-9 flex-fill">
                      <h3 className="h5 my-2">Đảm bảo chất lượng</h3>
                      <p>
                        Chất lượng được đảm vào và luôn luôn có thể phát triển
                        mở rộng và lâu dài.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-md-6 col-lg-4"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="d-flex">
                    <div className="col-md-3 flex-fill pt-3 pt-3 pe-3 pe-md-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        fill="currentColor"
                        className="bi bi-window-sidebar"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1h12zM1 13V6h4v8H2a1 1 0 0 1-1-1zm5 1V6h9v7a1 1 0 0 1-1 1H6z" />
                      </svg>
                    </div>
                    <div className="col-md-9 flex-fill">
                      <h3 className="h5 my-2">Hỗ trợ</h3>
                      <p>
                        Luôn luôn hỗ trợ một cách tốt nhất, hiệu quả và chính
                        xác.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* <Swiper
        onSlideChange={(e) => setCurrentSlide(e?.realIndex)}
        direction={"vertical"}
        slidesPerView={1}
        speed={1500}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
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
                  year student at Ha Noi Open University, I started learning
                  about website development. After about one year, the COVID-19
                  pandemic forced me to learning online. At that time, i had a
                  lot of times to learn in-depth front-end programming.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Slide_one />
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img
              src="https://i.imgur.com/ysmHuYw.jpg"
              alt=""
              style={{ width: "100%", height: "100vh" }}
            />
          </div>
        </SwiperSlide>
      </Swiper> */}

      {/* <Slide_one currentSlide={currentSlide} />

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
      </div> */}
    </>
  );
}

export default Home;
