import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context";
import { UserAction } from "../../userAction";

function LoginPage() {
  const { state, dispatch } = useContext(UserContext);
  const [localData, setLocalData] = useState([]);
  const [newData, setNewData] = useState({
    name: "",
    password: "",
  });
  const [inValid, setInValid] = useState(false);
  const history = useNavigate();

  const loginHandler = () => {
    const isUserValid = localData.some(
      (user) =>
        user.name === newData.email && user.password === newData.password
    );
    if (isUserValid) {
      console.log("hello");
      dispatch({ type: UserAction.LOGINHOME });
      history("/");
    } else {
      setInValid(true);
    }
  };

  useEffect(() => {
    // Retrieve the serialized value from localStorage
    console.log("jj");
    const storedValue = localStorage.getItem("myValue");
    // Parse the stored JSON string back into an array
    const storedValue1 = localStorage.getItem("registerData");
    console.log("storedValue1", storedValue1);
    if (storedValue || storedValue1) {
      const parseVal = JSON.parse(storedValue);
      const parseValue = JSON.parse(storedValue1);
      parseVal.push(parseValue);
      setLocalData(parseVal);
    }
  }, []);

  const inputHandler = (item, e) => {
    console.log("dd", item);

    if (item == "email") {
      setNewData((prevUserDetail) => ({
        ...prevUserDetail,
        [item]: e.target.value,
      }));
    } else {
      setNewData((prevUserDetail) => ({
        ...prevUserDetail,
        [item]: e.target.value,
      }));
    }
    console.log("newData", newData);
  };
  const registerPage = () => {
    history("/register");
  };

  return (
    <div className="login-app">
      <div className="login-container">
        <h4>LOGIN</h4>

        <div className="email">
          {/* <label className="label" for="username">
            Email
          </label> */}
          <input
            placeholder="Enter Email"
            className="email-input"
            type="text"
            id="email"
            name="email"
            required
            onChange={(e) => inputHandler("userName", e)}
          />
        </div>
        {inValid && <p className="valid-msg">Invalid Username</p>}

        <div className="email">
          {/* <label className="label" for="username">
            Password
          </label> */}
          <input
            placeholder="Enter Password"
            className="email-input"
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => inputHandler("password", e)}
          />
        </div>
        {inValid && <p className="valid-msg">Invalid Password</p>}
        <div className="remember-container">
          <div className="remember-sub">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <div>
            <p className="forget-btn">Forget password?</p>
          </div>
        </div>
        <button className="login-btn" onClick={loginHandler}>
          LOGIN
        </button>
        <div className="register">
          <p className="forget-btn">
            Dont have an account?
            <a className="register-btn" onClick={registerPage}>
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
