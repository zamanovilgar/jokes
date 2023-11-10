import React from "react";
import styles from "./jcontent.module.css";
import JokesCard from "../Card";

const JokesContent = () => {
  return (
    <div className={styles.content}>
      <div className={styles.box}>
        <div className={styles.leftSide}>
          <p className={styles.leftTitle}>Jokes</p>
          <img
            className={styles.image}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUciSaDabts0J1YEegAAJxiqeB1gpJRDSU6g&usqp=CAU"
          />
        </div>
        <div className={styles.rightSide}>
          <JokesCard />
          <JokesCard />
          <JokesCard />
          <JokesCard />
          <JokesCard />

        </div>
      </div>
    </div>
  );
};

export default JokesContent;
