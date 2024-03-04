import React from "react";
import styles from "./styles/card.module.css";
import { MdDelete } from "react-icons/md";

export default function Card({ card_number, handleInputChange, deleteCard }) {
  return (
    <>
      <div className={styles.single_card}>
        <div className={styles.get_card_info}>
          <div className={styles.card_detail}>
            <h2>Card {card_number}</h2>
            <MdDelete className={styles.delete_icon} onClick={deleteCard} />
          </div>
          <div className={styles.card_front}>
            <input
              type="text"
              placeholder="Enter the language Term. Example: English: Good Morning"
              onChange={(e) =>
                handleInputChange(card_number - 1, "term", e.target.value)
              }
            />
          </div>
          <div className={styles.card_back}>
            <input
              type="text"
              placeholder="Enter the language Definition. Example: Spanish: Buenos días"
              onChange={(e) =>
                handleInputChange(card_number - 1, "definition", e.target.value)
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
