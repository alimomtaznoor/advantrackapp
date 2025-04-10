import styles from "./Product.module.css";
import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About AdvanTrack.</h2>
          <p>
            AdvanTrack is a web application that allows you to track your
            expenses and see your progress towards your financial goals.
          </p>
          <p>
           It is a simple and easy to use application that allows you to track places you have been, the places you have gone, and the expenses you have made. You can also set financial goals and track your progress towards them.
          </p>
        </div>
      </section>
    </main>
  );
}
