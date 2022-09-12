import Navbar from "./Header";
import Footer from "./Footer";
import Routing from "./Routing";
import Context from "./Context";
import { useState } from "react";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem("isLoggedIn"));
  const [user, setUser] = useState(localStorage.getItem("user"));

  return (
    <Context.Provider value={{ isLoggedIn, setLoggedIn, user, setUser }}>      
      <div className="container">
        <div className="row">
          <Navbar />
        </div>
        <div className="row">
          <Routing />
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
