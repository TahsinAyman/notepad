import { Route, Routes } from "react-router-dom";
import React from "react";
const Login = React.lazy(() => import("./Login"));
const Register = React.lazy(() => import("./Register"));
const UrlError = React.lazy(() => import("./UrlError"));
const Home = React.lazy(() => import("./Home"));

function GuestRouting() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense
            fallback={
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            }
          >
            <Home />
          </React.Suspense>
        }
      />
      <Route
        path="/login/"
        element={
          <React.Suspense
            fallback={
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            }
          >
            <Login />
          </React.Suspense>
        }
      />
      <Route
        path="/register/"
        element={
          <React.Suspense
            fallback={
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            }
          >
            <Register />
          </React.Suspense>
        }
      />
      <Route
        path="/*"
        element={
          <React.Suspense
            fallback={
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            }
          >
            <UrlError />
          </React.Suspense>
        }
      />
    </Routes>
  );
}

export default GuestRouting;
