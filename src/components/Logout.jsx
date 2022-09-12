import { useContext } from "react";
import Context from "./Context";

function Logout() {
  const context = useContext(Context);
  context.setLoggedIn(false);
  context.setUser(null);
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("user");
  window.location.href = "/";
  return <h1>Logout</h1>;
}

export default Logout;
