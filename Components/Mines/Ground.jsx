import React, { useState } from "react";
import Part from "./Part";
import styles from "../../styles/Mines.module.css";

const Ground = (props) => {
  const { height, width, mines } = props;
  const [gameStatus, setGameStatus] = useState("😃");
  const [mineCount, setMineCount] = useState(mines);
  const [flag, setFlag] = useState(false);

  const getMines = (data) => {
    let mineArray = [];

    data.map((datarow) => {
      datarow.map((dataitem) => {
        if (dataitem.isMine) {
          mineArray.push(dataitem);
        }
      });
    });

    return mineArray;
  };

  const getFlags = (data) => {
    let mineArray = [];

    data.map((datarow) => {
      datarow.map((dataitem) => {
        if (dataitem.isFlagged) {
          mineArray.push(dataitem);
        }
      });
    });

    return mineArray;
  };

  const getHidden = (data) => {
    let mineArray = [];

    data.map((datarow) => {
      datarow.map((dataitem) => {
        if (!dataitem.isRevealed) {
          mineArray.push(dataitem);
        }
      });
    });

    return mineArray;
  };

  const getRandomNumber = (dimension) => {
    return Math.floor(Math.random() * 1000 + 1) % dimension;
  };

  const createEmptyArray = (height, width) => {
    let data = [];

    for (let i = 0; i < height; i++) {
      data.push([]);
      for (let j = 0; j < width; j++) {
        data[i][j] = {
          x: i,
          y: j,
          isMine: false,
          neighbour: 0,
          isRevealed: false,
          isEmpty: false,
          isFlagged: false,
        };
      }
    }
    return data;
  };

  const plantMines = (data, height, width, mines) => {
    let randomx,
      randomy,
      minesPlanted = 0;

    while (minesPlanted < mines) {
      randomx = getRandomNumber(width);
      randomy = getRandomNumber(height);
      if (!data[randomx][randomy].isMine) {
        data[randomx][randomy].isMine = true;
        minesPlanted++;
      }
    }

    return data;
  };

  const traverseBoard = (x, y, data) => {
    const el = [];

    //up
    if (x > 0) {
      el.push(data[x - 1][y]);
    }

    //down
    if (x < height - 1) {
      el.push(data[x + 1][y]);
    }

    //left
    if (y > 0) {
      el.push(data[x][y - 1]);
    }

    //right
    if (y < width - 1) {
      el.push(data[x][y + 1]);
    }

    // top left
    if (x > 0 && y > 0) {
      el.push(data[x - 1][y - 1]);
    }

    // top right
    if (x > 0 && y < width - 1) {
      el.push(data[x - 1][y + 1]);
    }

    // bottom right
    if (x < height - 1 && y < width - 1) {
      el.push(data[x + 1][y + 1]);
    }

    // bottom left
    if (x < height - 1 && y > 0) {
      el.push(data[x + 1][y - 1]);
    }

    return el;
  };
  const getNeighbours = (data, height, width) => {
    let updatedData = data,
      index = 0;

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (data[i][j].isMine !== true) {
          let mine = 0;
          const area = traverseBoard(data[i][j].x, data[i][j].y, data);
          area.map((value) => {
            if (value.isMine) {
              mine++;
            }
          });
          if (mine === 0) {
            updatedData[i][j].isEmpty = true;
          }
          updatedData[i][j].neighbour = mine;
        }
      }
    }

    return updatedData;
  };

  const initBoardData = (height, width, mines) => {
    let data = createEmptyArray(height, width);
    data = plantMines(data, height, width, mines);
    data = getNeighbours(data, height, width);
    console.log(data);

    return data;
  };
  const [boardData, setBoardData] = useState(
    initBoardData(height, width, mines)
  );

  const revealBoard = () => {
    let updatedData = boardData;
    updatedData.map((datarow) => {
      datarow.map((dataitem) => {
        dataitem.isRevealed = true;
      });
    });
    setBoardData(updatedData);
  };

  function revealEmpty(x, y, data) {
    let area = traverseBoard(x, y, data);
    area.map((value) => {
      if (
        !value.isFlagged &&
        !value.isRevealed &&
        (value.isEmpty || !value.isMine)
      ) {
        data[value.x][value.y].isRevealed = true;
        if (value.isEmpty) {
          revealEmpty(value.x, value.y, data);
        }
      }
    });
    return data;
  }

  const [check, setCheck] = useState(true);
  const handleCellClick = (x, y) => {
    if (boardData[x][y].isRevealed || boardData[x][y].isFlagged) {
      return null;
    }

    if (boardData[x][y].isMine) {
      setGameStatus("🥺");
      revealBoard();
      alert("Game over 🥺");
    }

    let updatedData = boardData;
    updatedData[x][y].isFlagged = false;
    updatedData[x][y].isRevealed = true;

    if (updatedData[x][y].isEmpty) {
      updatedData = revealEmpty(x, y, updatedData);
    }

    if (getHidden(updatedData).length === props.mines) {
      setMineCount(0);
      setGameStatus("🤩");
      revealBoard();
      alert("You Win 🤩");
    }
    setBoardData(updatedData);
    setMineCount(props.mines - getFlags(updatedData).length);
    setCheck(!check);
  };

  const handleContextMenu = (e, x, y) => {
    e.preventDefault();
    let updatedData = boardData;
    let mines = mineCount;

    // check if already revealed
    if (updatedData[x][y].isRevealed) return;

    if (updatedData[x][y].isFlagged) {
      updatedData[x][y].isFlagged = false;
      mines++;
    } else {
      updatedData[x][y].isFlagged = true;
      mines--;
    }

    if (mines === 0) {
      const mineArray = getMines(updatedData);
      const FlagArray = getFlags(updatedData);
      if (JSON.stringify(mineArray) === JSON.stringify(FlagArray)) {
        setMineCount(0);
        setGameStatus("You Win 🤩");
        revealBoard();
        alert("You Win 🤩");
      }
    }
    setMineCount(mines);
    setBoardData(updatedData);
  };

  const renderBoard = (data) => {
    return data.map((datarow) => {
      return datarow.map((dataitem) => {
        return (
          <div
            className={styles.gameGround}
            key={dataitem.x * datarow.length + dataitem.y}
          >
            <Part
              onClick={(e) =>
                !flag
                  ? handleCellClick(dataitem.x, dataitem.y)
                  : handleContextMenu(e, dataitem.x, dataitem.y)
              }
              cMenu={(e) => handleContextMenu(e, dataitem.x, dataitem.y)}
              value={dataitem}
            />
            {datarow[datarow.length - 1] === dataitem ? (
              <div className="clear" />
            ) : (
              ""
            )}
          </div>
        );
      });
    });
  };

  return (
    <div className="d-flex justify-content-center">
      <div className={styles.board}>
        <div className={styles.gameInfo}>
          <h3 className={styles.info}>{!flag ? gameStatus : "🤔"}</h3>
          <div className="d-flex flex-row justify-content-around align-items-center mt-3">
            <button className="btn" onClick={() => setFlag(!flag)}>
              🚩
            </button>
            <span className={styles.info}>Mines: {mineCount}</span>
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              reset
            </button>
          </div>
        </div>
        {renderBoard(boardData)}
      </div>
    </div>
  );
};

export default Ground;
