import React, { useEffect, useState } from "react";
import styles from "../../../styles/Mines.module.css";
import Ground from "../../../Components/Mines/Ground";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Mines = () => {
  const [height, setHeight] = useState(12);
  const [width, setWidth] = useState(12);
  const [mines, setMines] = useState(10);
  const [show, setShow] = useState(true);

  const setLevel = (number) => {
    setMines(number);
    setShow(false);
  };
  useEffect(() => {}, []);

  return (
    <div className={styles.main}>
      {!show ? (
        <div className={styles.games}>
          <div className={styles.board}></div>
          <Ground height={height} width={width} mines={mines} />
        </div>
      ) : (
        <div className="d-flex flex-column h-100 justify-content-center align-items-center">
          <h3>welcome to mines game 😃</h3>
          <span>Select the game level</span>
          <div className="mt-3">
            <Button  className=" mx-2 bg-danger" onClick={() => setLevel(50)}>
              hard
            </Button>
            <Button  className=" mx-2 bg-warning" onClick={() => setLevel(30)}>
              medium
            </Button>
            <Button  className=" mx-2 bg-success" onClick={() => setLevel(10)}>
              easy
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mines;
