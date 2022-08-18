import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";

const Games = () => {
  return (
    <div className="gameContainer">
      <div className="text-center pt-3">
        <h2 className="text-light">welcome to game room</h2>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-around mt-5 ">
        <div className="col-10 col-sm-5 pointer">
          <Link href={"/Games/Mines"} className="card shadow-sm">
            <div className="card shadow">
              <Image
                width={"600px"}
                height={"240px"}
                className="card-img-top"
                src="/images/mines.png"
              />
              <div className="card-body">
                <div className="card-title text-center">Mines game</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-10 col-sm-5 mt-4 mt-sm-0 pointer">
          <Link
            href={"https://taha-gouyandeh.github.io/Snake-Game/"}
            className="card shadow-sm"
          >
            <div className="card shadow">
              <Image
                width={"600px"}
                height={"240px"}
                className="card-img-top"
                src="/images/snakegame.jpg"
              />
              <div className="card-body">
                <div className="card-title text-center">Snake Game</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .gameContainer {
            background: url("/images/gameback.png") no-repeat center fixed;
            width: 100%;
            height: 100vh;
            min-height: 600px;
            background-size: cover;
            display: table;
            position: relative;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default Games;
