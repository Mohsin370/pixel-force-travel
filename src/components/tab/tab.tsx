import HomeSvg from "../../assets/icons/navIcons/home.svg";
import ChatSvg from "../../assets/icons/navIcons/chat.svg";
import ActiveChat from "../../assets/icons/navIcons/active_chat.svg";
import ProfileSvg from "../../assets/icons/navIcons/profile.svg";
import ActiveProfile from "../../assets/icons/navIcons/active_profile.svg";
import ActiveExplore from "../../assets/icons/navIcons/active_explore.svg";
import SavedSvg from "../../assets/icons/navIcons/saved.svg";
import ExploreSvg from "../../assets/icons/navIcons/explore.svg";
import { Link } from "react-router-dom";

type TabPropsType = {
  active: number;
};

function Tab(props: TabPropsType) {
  const navList: {
    icon: string;
    name: string;
    url: string;
    active: boolean;
    activeIcon?: string;
  }[] = [
    {
      icon: HomeSvg,
      name: "Home",
      url: "/",
      active: false,
    },
    {
      icon: ExploreSvg,
      name: "Explore",
      url: "explore",
      active: false,
      activeIcon: ActiveExplore,
    },
    {
      icon: ChatSvg,
      name: "Chat",
      url: "chat",
      active: false,
      activeIcon: ActiveChat,
    },
    {
      icon: SavedSvg,
      name: "Saved",
      url: "/",
      active: false,
    },
    {
      icon: ProfileSvg,
      name: "Profile",
      url: "profile",
      active: false,
      activeIcon: ActiveProfile
    },
  ];
  return (
    <>
      <div className="w-screen fixed bottom-0 pt-5 pb-5 bg-white">
        <div className="">
          <div className=" ">
            <ul className="flex flex-wrap justify-around text-sm  text-gray-500 dark:text-gray-400">
              {navList.map((navItem, index) => (
                <li className="me-2" key={index}>
                  <Link
                    to={`/${navItem.url}`}
                    className={`inline-flex flex-col items-center p-3 border-b-2 border-transparent  ${
                      props.active === index ? "primary" : ""
                    }`}
                  >
                    <img
                      src={
                        props.active === index && navItem.activeIcon
                          ? navItem.activeIcon
                          : navItem.icon
                      }
                      alt={navItem.name}
                    />
                    <p className="pt-1">{navItem.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tab;
