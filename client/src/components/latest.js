import React from "react";

import marquinhos from "../assets/images/marquinhos.webp";
import mbappe from "../assets/images/mbappe.webp";
import neuer from "../assets/images/neuer.webp";
import neymar from "../assets/images/neymar.webp";
import alaba from "../assets/images/alaba.webp";
import davies from "../assets/images/davies.jpg";
import lewandowski from "../assets/images/lewandowski.webp";
import gnabry from "../assets/images/gnabry.webp";
import muller from "../assets/images/muller.webp";
import oblak from "../assets/images/oblak.webp";
import angelino from "../assets/images/angelino.webp";
import kimmich from "../assets/images/kimmich.jpg";
import sabitzer from "../assets/images/sabitzer.jpg";
import upamecano from "../assets/images/upamecano.webp";
import messi from "../assets/images/messi.webp";
import sterling from "../assets/images/sterling.webp";
import debruyne from "../assets/images/debruyne.webp";
import lopes from "../assets/images/lopes.webp";
import aouar from "../assets/images/aouar.webp";
import vandijk from "../assets/images/vandijk.webp";
import goretzka from "../assets/images/goretzka.webp";
import thiago from "../assets/images/thiago.webp";
import gomez from "../assets/images/gomez.webp";

const goalkeepers = [
  { name: "Manuel Neuer (Bayern)", image: neuer },
  { name: "Jan Oblak (Atlético)", image: oblak },
  { name: "Anthony Lopes (Lyon)", image: lopes },
];
const defenders = [
  { name: "Alphonso Davies (Bayern)", image: davies },
  { name: "Joshua Kimmich (Bayern)", image: kimmich },
  { name: "Virgil van Dijk (Liverpool)", image: vandijk },
  { name: "Dayot Upamecano (Leipzig)", image: upamecano },
  { name: "Angeliño (Leipzig)", image: angelino },
  { name: "David Alaba (Bayern)", image: alaba },
];

const midfielders = [
  { name: "Thiago (Bayern)", image: thiago },
  { name: "Kevin De Bruyne (Man. City)", image: debruyne },
  { name: "Houssem Aouar (Lyon)", image: aouar },
  { name: "Leon Goretzka (Bayern)", image: goretzka },
  { name: "Marcel Sabitzer (Leipzig)", image: sabitzer },
  { name: "Marquinhos (Paris)", image: marquinhos },
  { name: "Alejandro Gómez (Atalanta)", image: gomez },
  { name: "Thomas Müller (Bayern)", image: muller },
];
const forwards = [
  { name: "Serge Gnabry (Bayern)", image: gnabry },
  { name: "Robert Lewandowski (Bayern)", image: lewandowski },
  { name: "Kylian Mbappé (Paris)", image: mbappe },
  { name: "Neymar (Paris)", image: neymar },
  { name: "Lionel Messi (Barcelona)", image: messi },
  { name: "Raheem Sterling (Man. City)", image: sterling },
];

const Latest = () => {
  return (
    <section className="latest">
      <div className="section-heading">
        <h2>Latest</h2>
      </div>
      <div className="squad-container">
        <div className="field">
          <h4>Squad of the Season</h4>
          <p>
            UEFA's Technical Observers have chosen their 23-man squad <br />
            from the 2019/20 UEFA Champions League.
          </p>
          <div className="grid players">
            <h4 className="g-label-1">goalkeepers</h4>
            <div className="inner-grid goalkeepers">
              {goalkeepers.map((el) => (
                <div
                  className="player goalkeeper"
                  // key={el.name}
                  // onMouseEnter={() => handleCity(el.image)}
                  // onMouseOut={handleCityReturn}
                >
                  <img src={el.image} alt="" />
                  <span>{el.name}</span>
                </div>
              ))}
            </div>
            <h4 className="g-label-2">defenders</h4>
            <div className="inner-grid defenders">
              {defenders.map((el) => (
                <div
                  className="player defender"
                  // key={el.name}
                  // onMouseEnter={() => handleCity(el.image)}
                  // onMouseOut={handleCityReturn}
                >
                  <img src={el.image} alt="" />
                  <span>{el.name}</span>
                </div>
              ))}
            </div>
            <h4 className="g-label-3">midfielders</h4>
            <div className="inner-grid midfielders">
              {midfielders.map((el) => (
                <div
                  className="player midfielder"
                  // key={el.name}
                  // onMouseEnter={() => handleCity(el.image)}
                  // onMouseOut={handleCityReturn}
                >
                  <img src={el.image} alt="" />
                  <span>{el.name}</span>
                </div>
              ))}
            </div>
            <h4 className="g-label-4">forwards</h4>
            <div className="inner-grid forwards">
              {forwards.map((el) => (
                <div
                  className="player forward"
                  // key={el.name}
                  // onMouseEnter={() => handleCity(el.image)}
                  // onMouseOut={handleCityReturn}
                >
                  <img src={el.image} alt="" />
                  <span>{el.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latest;
