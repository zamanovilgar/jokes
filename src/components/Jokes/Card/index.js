import React from "react";
import styles from "./card.module.css";

const JokesCard = ({
  text = "Lorem ipsum",
  emoji = "🤣",
  vote = 0,
  onDecrement,
  onIncrement,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.vote}>
        <button onClick={onDecrement}>-</button>
        <span>{vote}</span>
        <button onClick={onIncrement}>+</button>
      </div>
      <p>{text}</p>

      <div className={styles.emoji}>{emoji}</div>
    </div>
  );
};

export default JokesCard;
