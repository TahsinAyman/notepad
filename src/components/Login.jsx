import { useState } from "react";
import { useForm } from "react-hook-form";
import ResponseMessage from "./ResponseMessage";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./LoginValidation";
import axios from "axios";
import config from "../resources/backend";
import { useContext } from "react";
import Context from "./Context";

function Login() {
  const [message, setMessage] = useState("");
  const [tag, setTag] = useState("");
  const context = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onLogin = (data) => {
    axios
      .post(`${config.url}/login/`, data)
      .then((response) => {
        setMessage(response.data.message);
        if (response.data.result) {
          setTag("success");
          context.setLoggedIn(true);
          context.setUser(data.user);
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("user", data.user);
          window.location.href = "/";
        } else {
          setTag("danger");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className="row g-3" onSubmit={handleSubmit(onLogin)}>
      <div className="row">
        <h1 className="text-center">Login</h1>
      </div>
      <div className="d-flex flex-row align-items-center mb-4">
        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
        <div className="form-outline flex-fill mb-0">
          <input
            type="text"
            id="user"
            className="form-control"
            placeholder="Username"
            {...register("user")}
          />
          <label className="form-label" for="user">
            User
          </label>
        </div>
        {errors.user?.message && (
          <ResponseMessage message={errors.user?.message} tag="danger" />
        )}
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
        <div className="form-outline flex-fill mb-0">
          <input
            type="password"
            id="password"
            className="form-control"
            name="password"
            placeholder="••••••••"
            {...register("password")}
          />
          <label className="form-label" for="password">
            Password
          </label>
        </div>
        {errors.password?.message && (
          <ResponseMessage message={errors.password?.message} tag="danger" />
        )}
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <div className="form-outline flex-fill mb-0">
          <label className="form-label">
            <a href="/login/">Already Have An Account?</a>
          </label>
        </div>
      </div>

      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
        <input type="submit" className="btn btn-primary btn-lg" value="Login" />
      </div>
      <ResponseMessage message={message} tag={tag} />
    </form>
  );
}

export default Login;
