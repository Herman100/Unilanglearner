import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { auth } from "../../firebase/firebase";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <Link to="/" className={styles.logo}>
          <p>Unilanglearner</p>
        </Link>
        <div className={styles.headerRight}>
          <Link to="/create" className={styles.flashcards}>
            <p> Create</p>
          </Link>
          <Link to="/cardsets" className={styles.flashcards}>
            <p> Flashcards</p>
          </Link>

          {auth.currentUser ? (
            <Link to="/" className={styles.logout}>
              <p>Logout</p>
            </Link>
          ) : (
            <Link to="/login" className={styles.login}>
              <p>Login</p>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
