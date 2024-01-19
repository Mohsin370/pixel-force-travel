import Tab from "../../../components/tab/tab";
import ProfileImg from "../../../assets/sessions/profile.png";
import rArrowIcon from "../../../assets/icons/rightArrow.svg";
import profileIcon from "../../../assets/icons/profile/frame.svg";
import settingsIcon from "../../../assets/icons/profile/settings.svg";
import switchIcon from "../../../assets/icons/profile/switch.svg";
import cardIcon from "../../../assets/icons/profile/card.svg";
import styles from "./profile.module.css";

function Profile() {
  return (
    <>
      <div className="w-100  min-h-svh bg-slate-50">
        <div className="text-center pt-16">
          <div className="w-100">
            <img
              className="m-auto rounded-full"
              src={ProfileImg}
              alt="profile"
            />
          </div>

          <h1 className="text-2xl mt-3 mb-2 font-semibold">Lucy Bond</h1>
          <p className="font-extralight text-gray-500   mb-14">
            lucybond08@gmail.com
          </p>
          <div
            style={{
              width: "95%",
              height: "0.6px",
              backgroundColor: "#D6D6D6",
              margin: "auto",
            }}
          ></div>

          {/* profile items list */}
          <div className="flex p-6 items-center">
            <div className={styles.profileCard}>
              <img src={profileIcon} />
            </div>
            <div className="w-100 flex-grow flex justify-between">
              <h3 className="pl-3">Peronal details </h3>
              <div className="cursor-pointer">
                <img src={rArrowIcon} />
              </div>
            </div>
          </div>

          <div className="flex pl-6 pr-6 items-center">
            <div className={styles.profileCard}>
              <img src={settingsIcon} />
            </div>
            <div className="w-100 flex-grow flex justify-between">
              <h3 className="pl-3">Settings </h3>
              <div className="cursor-pointer">
                <img src={rArrowIcon} />
              </div>
            </div>
          </div>

          <div className="flex p-6 items-center">
            <div className={styles.profileCard}>
              <img src={cardIcon} />
            </div>
            <div className="w-100 flex-grow flex justify-between">
              <h3 className="pl-3">Payment details </h3>
              <div className="cursor-pointer">
                <img src={rArrowIcon} />
              </div>
            </div>
          </div>

          <div className="flex pr-6 pl-6 pb-6 items-center">
            <div className={styles.profileCard}>
              <img src={profileIcon} />
            </div>
            <div className="w-100 flex-grow flex justify-between">
              <h3 className="pl-3">FAQ</h3>
              <div className="cursor-pointer">
                <img src={rArrowIcon} />
              </div>
            </div>
          </div>

          <div
            style={{
              width: "95%",
              height: "0.6px",
              backgroundColor: "#D6D6D6",
              margin: "auto",
            }}
          ></div>

          <div className="flex m-6 items-center">
            <div className={styles.profileCard}>
              <img src={switchIcon} />
            </div>
            <div className="w-100 flex-grow flex justify-between">
              <h3 className="pl-3">Switch to hosting </h3>
              <div className="cursor-pointer">
                <img src={rArrowIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tab active={4}></Tab>
    </>
  );
}

export default Profile;
