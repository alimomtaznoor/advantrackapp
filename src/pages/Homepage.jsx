import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          Are you lost in the world?
          <br />
          AdvanTrack keeps track of your adventures.
        </h1>
        <h2>
          A simple, advantures tracker that helps you keep track of your
          good moments.
        </h2>

        <Link to="/login" className="cta">
          Start Now
        </Link>
      </section>
    </main>
  );
}
