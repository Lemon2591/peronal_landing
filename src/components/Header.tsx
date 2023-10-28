import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface IRoute {
  text: string;
  href: string;
}

const route_container: IRoute[] = [
  {
    text: "Home",
    href: "/",
  },
];

const Header: FC = () => {
  const route = useRouter();

  const [show_header, setShowHeader] = useState("");
  const [showHeaderMobile, setShowHeaderMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);
  }, []);

  const stickyHeader = () => {
    if (window.pageYOffset < 2) {
      setShowHeader("");
    } else if (window.scrollY > window.pageYOffset) {
      setShowHeader("sticky");
    } else if (window.scrollY < window.pageYOffset) {
      setShowHeader("hide-l-header");
    }
    window.scrollY = window.pageYOffset;
  };

  return (
    <>
      <nav
        id="navScroll"
        className="navbar navbar-expand-lg navbar-light fixed-top"
        tabIndex={0}
      >
        <div className="container">
          <a className="navbar-brand pe-4 fs-4" href="/">
            <h1 className="logo_t">Anhhh.</h1>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/#services">
                  <a
                    className="nav-link"
                    aria-label="Brings you to the frontpage"
                  >
                    Dịch vụ
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#aboutus">
                  <a className="nav-link">Về tôi</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#experience">
                  <a className="nav-link">Kinh nghiệm</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#project">
                  <a className="nav-link">Dự án</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">Liên hệ</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div className={`header-container ${show_header}`}>
        <div className="header-content header_desktop">
          <div className="header-left">
            <p>Anhh.</p>
          </div>

          <div className="header-right">
            <ul>
              {route_container.map((data: IRoute, index: number) => {
                return (
                  <Link href={data.href} key={index}>
                    <a className={route.pathname === data.href ? "active" : ""}>
                      <li>{data.text}</li>
                    </a>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="header_mobile">
          <div className="header-left">
            <p>Anhh.</p>
          </div>
          <div
            className="header_mobile_icon"
            onClick={() => setShowHeaderMobile(!showHeaderMobile)}
          >
            <i>
              <AiOutlineMenu />
            </i>
          </div>
        </div>
      </div>
      <div
        className={
          showHeaderMobile
            ? "header_mobile_list show_header_mb"
            : "header_mobile_list"
        }
      >
        <div>
          <i onClick={() => setShowHeaderMobile(!showHeaderMobile)}>
            <AiOutlineClose />
          </i>
          <ul>
            {route_container.map((data: IRoute, index: number) => {
              return (
                <Link href={data.href} key={index}>
                  <a className={route.pathname === data.href ? "active" : ""}>
                    <li>{data.text}</li>
                  </a>
                </Link>
              );
            })}
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default Header;
