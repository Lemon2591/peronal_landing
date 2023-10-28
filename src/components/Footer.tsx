import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container small border-top">
          <div className="row py-5 d-flex justify-content-between">
            <div className="col-12 col-lg-6 col-xl-4 border-end p-5">
              <h1 className="logo_t">Anhhh.</h1>
              <address className="text-secondary mt-3">
                <strong>Lemon Dev.</strong>
                <br />
                Số 40, Ngõ 79
                <br />
                Cầu Giấy, Hà Nội
                <br />
                <abbr title="Phone">Phone: </abbr>
                0868 158 218
              </address>
            </div>
            <div className="col-12 col-lg-6 col-xl-4 border-end p-5">
              <h3 className="h6 mb-3">Thông tin</h3>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link href="/#services">
                    <a
                      className="nav-link link-secondary ps-0"
                      aria-current="page"
                    >
                      Dịch vụ
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/#aboutus">
                    <a className="nav-link link-secondary ps-0">Về tôi</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/#experience">
                    <a className="nav-link link-secondary ps-0">Kinh Nghiệm</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/#project">
                    <a className="nav-link link-secondary ps-0">Dự án</a>
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div className="col-12 col-lg-6 col-xl-3 border-end p-5">
              <h3 className="h6 mb-3">Products</h3>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link link-secondary ps-0"
                    aria-current="page"
                    href="#"
                  >
                    Fusce dapibus est
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-secondary ps-0" href="#">
                    Donec sed dui
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-secondary ps-0" href="#">
                    Tortor mauris
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-secondary ps-0" href="#">
                    Ut fermentum massa
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link link-secondary ps-0" href="#">
                    Magna mollis
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="col-12 col-lg-6 col-xl-4 p-5">
              <h3 className="h6 mb-3">Liên hệ</h3>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link link-secondary ps-0"
                    aria-current="page"
                    href="mailto:cnnhok6262@gmail.com"
                  >
                    Email: cnnhok6262@gmail.com
                  </a>
                  <a
                    className="nav-link link-secondary ps-0"
                    aria-current="page"
                    href="tel:0868158218"
                  >
                    Phone: 0868 158 218
                  </a>
                  <Link href="/contact">
                    <a
                      className="nav-link link-secondary ps-0"
                      aria-current="page"
                    >
                      Gửi liên hệ
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container text-center py-3 small">
          Made by{" "}
          <a href="/" className="link-fancy">
            LemonDev
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
