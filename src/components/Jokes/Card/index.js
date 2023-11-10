import React from "react";
import styles from "./card.module.css";


const JokesCard = () => {
  return (
    <div className={styles.card}>
        <div className={styles.vote}>
            <button >-</button>
            <span>22</span>
            <button>+</button>

        </div>
      <p>Lorem ipsum</p>

      <div className={styles.emoji}>🤣</div>
    </div>
  );
};

export default JokesCard;
