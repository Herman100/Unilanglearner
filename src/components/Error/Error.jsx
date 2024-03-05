import React from "react";
import { Link } from "react-router-dom";
import styles from "./error.module.css";
import svg from "./assets/error.svg";

function Error() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.error_text}>
          <h1>Ooops 404 🤖</h1>
          <h1>Page Not Found</h1>
          <p className={styles.error_p}>
            The page you are looking for does not exist. Please check the URL
            and try again.
          </p>

          <Link className={styles.error_link} to="Unilanglearner">
            Home
          </Link>
        </div>
        <div className={styles.error_image}>
          <img src={svg} alt="404 Not Found" />
        </div>
      </div>
    </>
  );
}

export default Error;
