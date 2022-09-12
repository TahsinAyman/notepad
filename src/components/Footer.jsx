import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a href="/" class="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="/notes/" class="nav-link px-2 text-muted">
                Notes
              </a>
            </li>
            <li class="nav-item">
              <a href="/login/" class="nav-link px-2 text-muted">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a href="/register/" class="nav-link px-2 text-muted">
                Register
              </a>
            </li>
            <li class="nav-item">
              <a href="/logout/" class="nav-link px-2 text-muted">
                Logout
              </a>
            </li>
          </ul>
          <p class="text-center text-muted">© 2022 Company, Inc</p>
        </footer>
      </div>
    );
  }
}

export default Footer;
