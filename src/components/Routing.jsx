import React from "react";
import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Context from "./Context";
import GuestRouting from "./GuestRouting";
import LoggedInRoute from "./LoggedInRouting";


function Routing() {
  const context = useContext(Context);

  return (
    <BrowserRouter>
      
        {context.isLoggedIn ? <LoggedInRoute /> : <GuestRouting />}
        
    </BrowserRouter>
  );
}

export default Routing;
