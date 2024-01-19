import styles from "./text.module.css";

type textProps = {
  icon: string;
  filterIcon?: string;
  placeholder?: string;
};

export default function Text(props: textProps) {
  return (
    <div className={styles.container}>
      <div className="flex p-3">
        <img src={props.icon} alt="img" />
        <input
          placeholder={props.placeholder}
          className="w-full outline-none pl-2 bg-transparent"
        />
        {props.filterIcon?<img src={props.filterIcon} alt="img" />:""}
      </div>
    </div>
  );
}
