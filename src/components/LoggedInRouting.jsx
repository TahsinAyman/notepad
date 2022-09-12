import { Route, Routes } from "react-router-dom";
import React from "react";
const Notes = React.lazy(() => import("./Notes"));
const Logout = React.lazy(() => import("./Logout"));
const UrlError = React.lazy(() => import("./UrlError"));
const Home = React.lazy(() => import("./Home"));

function LoggedInRoute() {
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
        path="/notes/"
        element={
          <React.Suspense
            fallback={
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            }
          >
            <Notes />
          </React.Suspense>
        }
      />
      <Route
        path="/logout/"
        element={
          <React.Suspense
            fallback={
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            }
          >
            <Logout />
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

export default LoggedInRoute;
