import { tab } from "@testing-library/user-event/dist/tab";
import { useContext } from "react";
import icon from "../resources/asset/icon.png";
import Context from "./Context";

function Navbar() {
  const context = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={icon}
            style={{ width: 30 }}
            className="m-2"
            id="icon"
            alt="logo"
          />
          Notepad
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <a
              className={context.isLoggedIn ? "nav-link" : "nav-link disabled"}
              aria-current="page"
              href="/notes/"
            >
              Notes
            </a>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="-"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user-cog"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className={
                      "dropdown-item " + (context.isLoggedIn ? "disabled" : "")
                    }
                    href="/login/"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    className={
                      "dropdown-item " + (context.isLoggedIn ? "disabled" : "")
                    }
                    href="/register/"
                  >
                    Register
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className={
                      "dropdown-item " + (context.isLoggedIn ? "" : "disabled")
                    }
                    href="/logout/"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
