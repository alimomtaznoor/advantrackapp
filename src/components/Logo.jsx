import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <p className={styles.logo}>
        Advan<span className={styles.span}>Track</span>
      </p>
    </Link>
  );
}

export default Logo;
