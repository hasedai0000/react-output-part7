import { NAVIGATION_PATH } from "../../../constants/navigation";
import { NavigationLink } from "../../atoms/NavigationLink/NavigationLink";
import styles from "./style.module.css";

export const Navigation = () => {
  return (
    <nav>
      <ul className={styles.ul}>
        <NavigationLink title={"Top"} linkPath={NAVIGATION_PATH.TOP} />
        <NavigationLink title={"Create"} linkPath={NAVIGATION_PATH.DETAIL} />
      </ul>
    </nav>
  );
};
