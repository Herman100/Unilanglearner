import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { auth } from "../../firebase/firebase";
import Logout from "../Authentication/Logout";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <Link to="" className={styles.logo}>
          <p>Unilanglearner</p>
        </Link>
        <div className={styles.headerRight}>
          <Link to="" className={styles.flashcards}>
            <p> Home</p>
          </Link>
          <Link to="/create" className={styles.flashcards}>
            <p> Create</p>
          </Link>
          <Link to="/cardsets" className={styles.flashcards}>
            <p> Flashcards</p>
          </Link>
          <Logout />
        </div>
      </div>
    </>
  );
}

export default Header;
