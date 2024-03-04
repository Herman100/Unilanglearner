import React, { useEffect, useState } from "react";
import styles from "./styles/flashcardsets.module.css";
import { subscribeToFlashcardSets } from "../../firebase/firebase_crud";
import { useNavigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

export default function FlashcardSets() {
  const [flashcardSets, setFlashcardSets] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribeToFlashcardSets(setFlashcardSets);
    return () => unsubscribe();
  }, []);

  const navigate = useNavigate();

  const handleSetClick = (setId) => {
    // navigate to set dynamically
    navigate(`/sets/${setId}`);
  };

  return (
    <ProtectedRoute>
      <div className={styles.flashcardsets}>
        <h1>Your Flashcard Sets</h1>
        {flashcardSets.map((set) => (
          <div
            key={set.id}
            className={styles.set}
            onClick={() => handleSetClick(set.id)}
          >
            <h2 className={styles.heading}>{set.title}</h2>
            <p className={styles.totalCards}>{set.description}</p>
            <p className={styles.totalCards}>{set.number} cards</p>
          </div>
        ))}
      </div>
    </ProtectedRoute>
  );
}
