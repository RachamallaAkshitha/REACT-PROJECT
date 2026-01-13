import "./Auth.css";

const Login = ({ switchToSignup }) => {
  return (
    <>
    <div className="auth-container">
      <h2>Login</h2>

      <p className="switch-text">
        New to Tech-Shop?
        <span onClick={switchToSignup}> Create an account</span>
      </p>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button className="primary-btn">Login</button>
    </div>
    <p className="login"><p>__________</p><p className="login-txt">or login with</p><p>__________</p></p>
    <div className="social-btns">
      <button className="fb">Facebook</button>
      <button className="google">Google</button>
      <button className="tweet">Twitter</button>
    </div>
    </>
  );
};

export default Login;


