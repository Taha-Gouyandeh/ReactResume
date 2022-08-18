import styles from "../../styles/Mines.module.css";
import React from "react";

const Part = (props) => {
  const { value, onClick, cMenu } = props;
  const getValue = () => {
    const { value } = props;
    if (!value.isRevealed) {
      return value.isFlagged ? "🚩" : null;
    }
    if (value.isMine) {
      return "💣";
    }
    if (value.neighbour == 0) {
      return null;
    }
    return value.neighbour;
  };

  let className =
    styles.cell +
    (value.isRevealed ? "" : " "+styles.hidden) +
    (value.isMine ? " "+styles.isMine : "") +
    (value.isFlagged ? " "+styles.isFlag : "");
  console.log(className);
  return (
    <div onClick={onClick} className={className} onContextMenu={cMenu}>
      {getValue()}
    </div>
  );
};

export default Part;
