/* eslint-disable jsx-quotes */
import Router, { useRouter } from "next/router";
import MetaSeo from "@/components/MetaSeo";
import Link from "next/link";

const Custom404 = () => {
  const router = useRouter();
  return (
    <>
      <MetaSeo title="Lemondev - 404" />
      <div className="page_error">
        <div
          className="d-flex h-100 w-100"
          data-bs-spy="scroll"
          data-bs-target="#navScroll"
        >
          <div className="h-100 container-fluid">
            <div className="h-100 row d-flex align-items-stretch">
              <div className="col-12 d-flex align-items-start flex-column px-vw-5">
                <header className="mb-auto py-vh-2 col-12">
                  <a className="navbar-brand pe-4 fs-4" href="/">
                    {/* <span className="ms-1 fw-bolder">Stride</span> */}
                  </a>
                </header>
                <main className="mb-auto col-12">
                  <h1>404</h1>

                  <h1 className="display-1 fw-bold">
                    Uuuups, something is broken...
                  </h1>
                  <p className="lead">
                    The page you are looking for doesn't exist or has been
                    moved.
                  </p>
                  <Link href="/">
                    <a className="link-fancy">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                      </svg>
                      {"    "}
                      Go back to home
                    </a>
                  </Link>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom404;
