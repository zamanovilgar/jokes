import React from "react";
import styles from "./jcontent.module.css";
import JokesCard from "../Card";
import { smiles } from "../../../constant/smiles";

const JokesContent = ({ data, onAzalt, onArtir }) => {
  const handleEmoji = (i) => {
    let emoji;

    if (i <= 3) {
      emoji = smiles.smile1;
    }
    if (i <= 6 && i >= 3) {
      emoji = smiles.smile3;
    }
    if (i <= 8 && i >= 6) {
      emoji = smiles.smile2;
    }
    if (i == 8) {
      emoji = smiles.smile4;
    }
    if (i == 9) {
      emoji = smiles.smile5;
    }
    return emoji;
  };

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
          {data?.map((item, index) => {
            const emoji = handleEmoji(index);
            return (
              <JokesCard
                vote={item.vote}
                text={item.joke}
                emoji={emoji}
                onDecrement={() => onAzalt(index)}
                onIncrement={() => onArtir(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JokesContent;
