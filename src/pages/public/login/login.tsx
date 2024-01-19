import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import Text from "../../../components/text/text";
import userIcon from "../../../assets/icons/user.svg";
import passwordIcon from "../../../assets/icons/password.svg";
import backIcon from "../../../assets/icons/back.svg";
import appleIcon from "../../../assets/icons/apple.svg";
import googleIcon from "../../../assets/icons/google.svg";

function Login() {
  let navigate = useNavigate();
  const onLogin = () => {
    let path = `/explore`;
    navigate(path);
  };
  return (
    <div className={styles.main}>
      <div
        className="absolute top-10 left-10 cursor-pointer"
        onClick={() => navigate(`/`)}
      >
        <img src={backIcon} alt="Back" />
      </div>
      <div className="container m-auto p-5">
        <div className={styles.subContainer}>
          <div className="grid justify-center pl-5">
            <h1 className="text-3xl font-semibold">Welcome Back</h1>
            <p className={styles.subtext}>
              Log In to your Placoo account to explore your dream place to live
              across the whole world!
            </p>
          </div>
          <div className="mt-5">
            <div className="grid justify-items-center p-3">
              <div className="grid">
                <label className="mb-2">Username</label>
                <Text icon={userIcon} />
              </div>
              <div className="grid m-5">
                <label className="mb-2">Password</label>
                <Text icon={passwordIcon} />
              </div>

              <div>
                <button className="l-btn p-btn m-1" onClick={onLogin}>
                  Login
                </button>
                <p className="font-hairline m-3 nav-gray text-center cursor-pointer">
                  Forgot Password
                </p>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.appleLogin}>
                <img src={appleIcon} alt="icon" />
                <p style={{color:'white'}}>Sign in with Apple</p>
              </div>
              <div className={styles.googleLogin}>
                <img src={googleIcon} alt="icon" />
                <p>Sign in with Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
