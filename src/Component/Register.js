import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const history = useNavigate();
  const [userDetail, setUserDetail] = useState({
    userName: "",
    password: "",
  });
  const signUpHandler = () => {
    const jsonData = JSON.stringify(userDetail);
    localStorage.setItem("registerData", jsonData);
    setUserDetail({
      userName: "",
      password: "",
    });
    history("/login");
  };

  const inputHandler = (field, e) => {
    if (field == "userName") {
      //   setUserDetail({ email: e.target.value });
      setUserDetail((prevUserDetail) => ({
        ...prevUserDetail,
        [field]: e.target.value,
      }));
    } else {
      setUserDetail((prevUserDetail) => ({
        ...prevUserDetail,
        [field]: e.target.value,
      }));
    }
    console.log("userDetail", userDetail);
  };
  //   useEffect(() => {

  //   }, [userDetail]);

  return (
    <div className="login-app">
      <div className="login-container">
        <h4>SignUp</h4>

        <div className="email">
          <label className="label" for="username">
            Email
          </label>
          <input
            placeholder="Enter Email"
            className="email-input"
            type="text"
            id="email"
            name="email"
            required
            value={userDetail.email}
            onChange={(e) => inputHandler("userName", e)}
          />
        </div>
        {/* {inValid && <p className="valid-msg">Invalid Username</p>} */}

        <div className="email">
          <label className="label" for="username">
            Password
          </label>
          <input
            placeholder="Enter Password"
            className="email-input"
            type="password"
            id="password"
            name="password"
            required
            value={userDetail.password}
            onChange={(e) => inputHandler("password", e)}
          />
        </div>
        {/* {inValid && <p className="valid-msg">Invalid Password</p>} */}

        <button className="login-btn" onClick={signUpHandler}>
          SignUp
        </button>
        <p className="forget-btn">Forget password?</p>
      </div>
    </div>
  );
}

export default Register;
