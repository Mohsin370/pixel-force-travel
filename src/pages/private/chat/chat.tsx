import Tab from "../../../components/tab/tab";
import Text from "../../../components/text/text";
import searchSVG from "../../../assets/icons/search.svg";
import Thread from "../../../components/thread/thread";
import img1 from "../../../assets/sessions/chat1.png";
import img2 from "../../../assets/sessions/chat2.png";
import img3 from "../../../assets/sessions/chat3.png";
import img4 from "../../../assets/sessions/chat4.png";
import img5 from "../../../assets/sessions/chat5.png";
import dticksSVG from "../../../assets/sessions/dticks.svg";
import tickSVG from "../../../assets/sessions/tick.svg";

function Chat() {
  const sessions = [
    {
      profilePic: img1,
      name: "Kari Rasmussen",
      lastMsg: "Thanks for contacting me",
      dateTime: "15:23",
      msgCount: 2,
    },
    {
      profilePic: img2,
      name: "Anita Cruz",
      lastMsg: "Your payment was accepted.",
      dateTime: "Yesterday",
    },
    {
      profilePic: img3,
      name: "Noah Pierre",
      lastMsg: "It was great experience!",
      dateTime: "11/10/2021",
    },
    {
      profilePic: img4,
      name: "LucyBond",
      lastMsg: "How much does it cost?",
      dateTime: "11/10/2021",
      status: dticksSVG,
    },
    {
      profilePic: img5,
      name: "Kari Rasmussen",
      lastMsg: "Thanks for contacting me",
      dateTime: "15:23",
      status: tickSVG,
    },
  ];

  return (
    <>
      <div>
        <div className="flex justify-center mt-5 mb-5">
          <Text icon={searchSVG} placeholder="Search messages"></Text>
        </div>
        {sessions?.map((session) => {
          return (
            <Thread
              profilePic={session.profilePic}
              name={session.name}
              lastMsg={session.lastMsg}
              dateTime={session.dateTime}
              status={session.status}
              msgCount={session.msgCount ? session.msgCount : undefined}
            />
          );
        })}
      </div>
      <Tab active={2} />
    </>
  );
}

export default Chat;
