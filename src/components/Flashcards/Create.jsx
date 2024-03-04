import React, { useCallback, useState } from "react";
import styles from "./styles/create.module.css";
import { Link } from "react-router-dom";
import Card from "./Card";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { handleFlashcardSubmit } from "../../firebase/firebase_crud";

export default function Create() {
  const [numofCards, setNumofCards] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cards, setCards] = useState([]);

  const addCard = () => {
    setNumofCards(numofCards + 1);
    setCards([...cards, { term: "", definition: "" }]);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const cardsWithHeader = [{ title, description }, ...cards];
      handleFlashcardSubmit(e, cardsWithHeader);
    },
    [title, description, cards]
  );

  const handleInputChange = (index, field, value) => {
    const newCards = [...cards];
    newCards[index][field] = value;
    setCards(newCards);
  };

  const deleteCard = (index) => {
    const newCards = [...cards];
    newCards.splice(index, 1);
    setCards(newCards);
    setNumofCards(numofCards - 1);
  };

  return (
    <>
      <ProtectedRoute>
        <div className={styles.create}>
          <div className={styles.heading}>
            <h1>Create a set of flashcards</h1>
            <Link to="/review">
              <button
                className={styles.createButton}
                onClick={(e) => handleSubmit(e, cards)}
              >
                Create
              </button>
            </Link>
          </div>
          <form className={styles.card_form}>
            <div className={styles.card_title}>
              <input
                type="text"
                placeholder="Enter the title for this flashcard set"
                value={title}
                onInput={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={styles.card_description}>
              <textarea
                type="text"
                placeholder="Provide description for this Flashcard set"
                value={description}
                onInput={(e) => setDescription(e.target.value)}
              />
            </div>

            {cards.map((_, index) => (
              <Card
                key={index}
                card_number={index + 1}
                deleteCard={deleteCard}
                handleInputChange={handleInputChange}
              />
            ))}
          </form>
        </div>
        <div className={styles.addCard}>
          <button className={styles.addCardButton} onClick={addCard}>
            Add Card
          </button>
        </div>
      </ProtectedRoute>
    </>
  );
}
