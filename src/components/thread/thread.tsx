type chatProps = {
  profilePic: string;
  name: string;
  lastMsg: string;
  dateTime: string;
  status?: string;
  msgCount?: number;
};

export default function Thread(props: chatProps) {
  return (
    <div className="m-5 cursor-pointer">
      <div className="flex">
        {/* display picture */}
        <img className="rounded-full" src={props.profilePic} alt="dp" />
        {/* Name and message */}
        <div className="flex-grow  pl-3">
          <h3 className="text-lg">{props.name}</h3>
          <p className="text-sm font-thin text-gray-700 dark:text-gray-400">
            {props.lastMsg}
          </p>
        </div>
        {/* Message details section */}
        <div className="text-right">
          <p className="text-sm font-thin text-gray-700 dark:text-gray-400">
            {props.dateTime}
          </p>

          {props.msgCount ? (
            <div className="w-6 ml-auto bg-violet-700  text-white text-right rounded-full">
              <p className="text-center">{props.msgCount}</p>
            </div>
          ) : null}

          {props.status ? (
            <img className="ml-auto" src={props.status} alt="status" />
          ) : null}
        </div>
      </div>
    </div>
  );
}
