import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className={styles.footer}>
        <Link to="" className={styles.about}>
          Unilanglearner
        </Link>
        <p>Copyright © {year} taskify. All rights reserved.</p>
      </div>
    </>
  );
}
