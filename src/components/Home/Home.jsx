import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import anywhere from "./assets/anywhere.svg";
import flashcards from "./assets/flashcards.svg";
import learn from "./assets/learn.svg";
import landingbg from "./assets/landingbg.jpg";
import { useAuth } from "../../contexts/AuthContextProvider";

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <>
      <div className={styles.home}>
        <div className={styles.landing}>
          <img src={landingbg} alt="" />
          <div className={styles.landtext}>
            <h1>
              Learn Any Language <br />
              Anytime, Anywhere
            </h1>
            <p>
              Unilanglearner is a flashcard app that helps you learn a new
              language. You can use flashcards created by others or create your
              own flashcards to learn a new language.
            </p>
            {currentUser === null ? (
              <Link to="/login" className={styles.signup}>
                Get Started
              </Link>
            ) : (
              <Link to="/Unilanglearner/cardsets" className={styles.signup}>
                Create Flashcards Now
              </Link>
            )}
          </div>
        </div>
        <h2>What you Get from Unilanglearner</h2>
        <div className={styles.services}>
          <div className={styles.service}>
            <div className={styles.servicetext}>
              <h3>Learn a New Language</h3>
              <p>
                You can use flashcards to learn a new language. You can also use
                flashcards created by others to learn a new language.
              </p>
            </div>
            <img
              src={learn}
              alt="learn a new language"
              className={styles.serviceimg}
            />
          </div>
          <div className={styles.service}>
            <div className={styles.servicetext}>
              <h3>Learn Anywhere</h3>
              <p>
                You can use personal flashcards to learn a new language anytime,
                anywhere. You can also use flashcards created by others to learn
                a new language.
              </p>
            </div>
            <img
              src={anywhere}
              alt="read anywhere"
              className={styles.serviceimg}
            />
          </div>
          <div className={styles.service}>
            <div className={styles.servicetext}>
              <h3>Benefits</h3>
              <p>
                Personal flashcards are a proven way to improve your learning.
                You can use flashcards to learn new words, phrases, and
                sentences in a new language.
              </p>
            </div>
            <img
              src={flashcards}
              alt="flashcards"
              className={styles.serviceimg}
            />
          </div>
        </div>
        {currentUser === null ? (
          <Link to="/login" className={styles.signupsecondary}>
            Start Learning Now
          </Link>
        ) : (
          <Link
            to="/Unilanglearner/cardsets"
            className={styles.signupsecondary}
          >
            Start Learning Now
          </Link>
        )}
      </div>
    </>
  );
}
