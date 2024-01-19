import { useNavigate } from "react-router-dom";
import styles from "./onboarding.module.css";

function Onboarding() {
  let navigate = useNavigate();
  const navToLogin = () => {
    let path = `/login`;
    navigate(path);
  };

  return (
    <>
      <div className={styles.container}>
        <div className="m-auto p-3 text-center">
          <h1 className="text-3xl font-semibold">New Place, New Home!</h1>
          <p className="font-hairline m-3 nav-gray">
            Are you ready to uproot and start over in a new area? Placoo will
            help you on your journey!
          </p>
          <div className="grid justify-items-center p-3">
            <button className="l-btn p-btn m-1" onClick={navToLogin}>
              Login
            </button>
            <button className="l-btn s-btn m-1">Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Onboarding;
