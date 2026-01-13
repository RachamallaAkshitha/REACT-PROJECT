import "./Auth.css";

const Signup = ({ switchToLogin }) => {
  return (
    <>
    <div className="auth-container">
      <h2>Signup</h2>

      <p className="switch-text">
        Already have an account?
        <span onClick={switchToLogin}> Login</span>
      </p>

      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />

      <button className="primary-btn">Signup</button>
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

export default Signup;


