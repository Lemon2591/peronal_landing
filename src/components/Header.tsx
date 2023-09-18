import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface IRoute {
  text: string;
  href: string;
}

const route_container: IRoute[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Products",
    href: "/products",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];

export const Header: FC = () => {
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
      <div className={`header-container ${show_header}`}>
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
      </div>
    </>
  );
};
