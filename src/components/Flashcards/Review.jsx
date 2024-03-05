import React, { useEffect, useState } from "react";
import styles from "./styles/review.module.css";
import { Link, useParams } from "react-router-dom";
import { fetchCardsFromSet } from "../../firebase/firebase_crud";
import { IoArrowBack } from "react-icons/io5";

export default function Review() {
  const [termDef, setTermDef] = useState(true);
  const [index, setIndex] = useState(0);
  const { setId } = useParams();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const fetchedCards = await fetchCardsFromSet(setId);
      setCards(fetchedCards);
    };

    fetchCards();
  }, [setId]);

  function handleClick(e) {
    setTermDef(!termDef);
  }

  function handleNext() {
    let i = index;
    if (i < cards.length - 1) {
      setIndex(i + 1);
      if (termDef === false) {
        setTermDef(!termDef);
      }
    }
  }
  function handlePrevious() {
    let i = index;
    if (i > 0) {
      setIndex(i - 1);
      if (termDef === false) {
        setTermDef(!termDef);
      }
    }
  }

  return (
    <>
      <div className={styles.review}>
        <h1>Reviewing {setId}</h1>
        <div className={styles.link}>
          <IoArrowBack />
          <Link to="cardsets">Back to Flashcard Sets</Link>
        </div>
        {cards.length > 0 && (
          <div>
            <button
              id="flashcard"
              onClick={handleClick}
              className={styles.flip_card}
            >
              {termDef ? (
                <div className={styles.question}>
                  <h2>{cards[index].term}</h2>
                  <p>Term</p>
                </div>
              ) : (
                <div className={styles.answer}>
                  <h2>{cards[index].definition}</h2>
                  <p>Definition</p>
                </div>
              )}
            </button>
            <div className={styles.next_previous}>
              <button
                id="previous"
                className={styles.previous}
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button id="next" className={styles.next} onClick={handleNext}>
                Next
              </button>
            </div>
            <p id={styles.instructions}>click card to show term/definition</p>
          </div>
        )}
      </div>
    </>
  );
}
