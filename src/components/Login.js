import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("home");
  };
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div>
            <h1 className="company-name">The 11'z</h1>
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter Username"
              className="username"
            />
          </div>

          <div className="input-box2">
            <input
              type="text"
              placeholder="Enter Password"
              className="username"
            />
          </div>
          <div className="button-div">
            <button className="login-button" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
