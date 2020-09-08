import React, { useState } from "react";
import Popover, { ArrowContainer } from "react-tiny-popover";

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
  {
    name: "Manuel Neuer",
    team: "Bayern",
    image: neuer,
    minutes: "990",
    matches: "28",
    saves: "25",
    height: "193cm",
  },
  {
    name: "Jan Oblak",
    team: "Atlético",
    image: oblak,
    minutes: "840",
    matches: "9",
    saves: "25",
    height: "186cm",
  },
  {
    name: "Anthony Lopes",
    team: "Lyon",
    image: lopes,
    minutes: "900",
    matches: "10",
    saves: "29",
    height: "184cm",
  },
];
const defenders = [
  {
    name: "Alphonso Davies",
    team: "Bayern",
    image: davies,
    minutes: "713",
    matches: "8",
    goals: "0",
    assists: "4",
    height: "-",
    dob: "02/11/2000",
    nat: "CAN",
  },
  {
    name: "Joshua Kimmich",
    team: "Bayern",
    image: kimmich,
    minutes: "903",
    matches: "11",
    goals: "2",
    assists: "3",
    height: "176cm",
    dob: "08/02/1995",
    nat: "GER",
  },
  {
    name: "Virgil van Dijk",
    team: "Liverpool",
    image: vandijk,
    minutes: "750",
    matches: "8",
    goals: "0",
    assists: "0",
    height: "193cm",
    dob: "08/07/1991",
    nat: "NED",
  },
  {
    name: "Dayot Upamecano",
    team: "Leipzig",
    image: upamecano,
    minutes: "661",
    matches: "8",
    goals: "0",
    assists: "0",
    height: "185cm",
    dob: "27/10/1998",
    nat: "FRA",
  },
  {
    name: "Angeliño",
    team: "Leipzig",
    image: angelino,
    minutes: "450",
    matches: "5",
    goals: "0",
    assists: "2",
    height: "-",
    dob: "04/01/1997",
    nat: "ESP",
  },
  {
    name: "David Alaba",
    team: "Bayern",
    image: alaba,
    minutes: "675",
    matches: "8",
    goals: "0",
    assists: "0",
    height: "180cm",
    dob: "24/06/1992",
    nat: "AUT",
  },
];

const midfielders = [
  {
    name: "Thiago",
    team: "Bayern",
    image: thiago,
    minutes: "824",
    matches: "10",
    goals: "0",
    assists: "2",
    height: "172cm",
    dob: "11/04/1991",
    nat: "ESP",
  },
  {
    name: "Kevin De Bruyne",
    team: "Man. City",
    image: debruyne,
    minutes: "574",
    matches: "7",
    goals: "2",
    assists: "2",
    height: "181cm",
    dob: "28/06/1991",
    nat: "BEL",
  },
  {
    name: "Houssem Aouar",
    team: "Lyon",
    image: aouar,
    minutes: "715",
    matches: "8",
    goals: "1",
    assists: "5",
    height: "-",
    dob: "30/06/1998",
    nat: "FRA",
  },
  {
    name: "Leon Goretzka",
    team: "Bayern",
    image: goretzka,
    minutes: "521",
    matches: "8",
    goals: "1",
    assists: "1",

    height: "189cm",
    dob: "06/02/1995",
    nat: "GER",
  },
  {
    name: "Marcel Sabitzer",
    team: "Leipzig",
    image: sabitzer,
    minutes: "807",
    matches: "9",
    goals: "4",
    assists: "3",
    height: "177cm",
    dob: "17/03/1994",
    nat: "AUT",
  },
  {
    name: "Marquinhos",
    team: "Paris",
    image: marquinhos,
    minutes: "970",
    matches: "11",
    goals: "2",
    assists: "0",
    height: "183cm",
    dob: "14/05/1994",
    nat: "BRA",
  },
  {
    name: "Alejandro Gómez",
    team: "Atalanta",
    image: gomez,
    minutes: "714",
    matches: "9",
    goals: "1",
    assists: "2",
    height: "183cm",
    dob: "15/02/1988",
    nat: "ITA",
  },
  {
    name: "Thomas Müller",
    team: "Bayern",
    image: muller,
    minutes: "709",
    matches: "10",
    goals: "4",
    assists: "3",
    height: "186cm",
    dob: "13/09/1989",
    nat: "GER",
  },
];
const forwards = [
  {
    name: "Serge Gnabry",
    team: "Bayern",
    image: gnabry,
    minutes: "887",
    matches: "10",
    goals: "15",
    assists: "6",
    height: "173cm",
    dob: "14/07/1995",
    nat: "GER",
  },
  {
    name: "Robert Lewandowski",
    team: "Bayern",
    image: lewandowski,
    minutes: "887",
    matches: "10",
    goals: "15",
    assists: "6",
    height: "184cm",
    dob: "21/08/1988",
    nat: "POL",
  },
  {
    name: "Kylian Mbappé",
    team: "Paris",
    image: mbappe,
    minutes: "652",
    matches: "10",
    goals: "5",
    assists: "5",
    height: "178cm",
    dob: "20/12/1998",
    nat: "FRA",
  },
  {
    name: "Neymar",
    team: "Paris",
    image: neymar,
    minutes: "585",
    matches: "7",
    goals: "3",
    assists: "4",
    height: "175cm",
    dob: "05/02/1992",
    nat: "BRA",
  },
  {
    name: "Lionel Messi",
    team: "Barcelona",
    image: messi,
    minutes: "661",
    matches: "8",
    goals: "3",
    assists: "3",
    height: "169cm",
    dob: "24/06/1987",
    nat: "ARG",
  },
  {
    name: "Raheem Sterling",
    team: "Man. City",
    image: sterling,
    minutes: "599",
    matches: "9",
    goals: "6",
    assists: "3",
    height: "170cm",
    dob: "08/12/1994",
    nat: "ENG",
  },
];

const Latest = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [activePopover, setActivePopover] = useState(null);

  const handleClick = (e, name) => setActivePopover(name);
  const handleClickOutside = () => {
    setIsPopoverOpen(false);
    setActivePopover(null);
  };

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
              {goalkeepers.map((el, index) => (
                <div key={el.name}>
                  <Popover
                    // isOpen={isPopoverOpen}
                    isOpen={activePopover === el.name}
                    position={"left"} // preferred position
                    containerClassName={"popover"}
                    disableReposition
                    content={<div>Hi! I'm popover content.</div>}
                    // onClickOutside={() => setIsPopoverOpen(false)}
                    onClickOutside={handleClickOutside}
                    content={({ position, targetRect, popoverRect }) => (
                      <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
                        position={position}
                        targetRect={targetRect}
                        popoverRect={popoverRect}
                        arrowColor={"blue"}
                        arrowSize={10}
                        arrowStyle={{ opacity: 0.9 }}
                      >
                        <div
                          className="popover-inner"
                          style={{
                            backgroundColor: "blue",
                            opacity: 0.9,
                            padding: "20px",
                            color: "gray",
                          }}
                          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                        >
                          <div className="flex top-info">
                            <div className="img-wrapper">
                              <img src={el.image} />
                            </div>
                            <div className="inner-row info">
                              <span>goalkeeper</span>
                              <span>{el.height}</span>

                              <span>nationality</span>
                            </div>
                          </div>

                          <p>
                            {el.name} {" | "} {el.team}
                          </p>

                          <div className="flex">
                            <div className="inner-row">
                              <div className="">
                                <span class="label">matches</span>
                                <span className="value">{el.matches}</span>
                              </div>
                            </div>
                            <div class="inner-row">
                              <div className="">
                                <span class="label">minutes</span>
                                <span className="value">{el.minutes}</span>
                              </div>
                            </div>
                            <div className="inner-row">
                              <div className="">
                                <span class="label">saves</span>
                                <span className="value">{el.saves}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ArrowContainer>
                    )}
                  >
                    <div
                      // onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                      onClick={(e) => handleClick(e, el.name)}
                      className="player goalkeeper"
                      // key={el.name}
                      // onMouseEnter={() => handleCity(el.image)}
                      // onMouseOut={handleCityReturn}
                    >
                      <img src={el.image} alt="" />
                      <span>{el.name}</span>
                    </div>
                  </Popover>
                </div>
              ))}
            </div>
            <h4 className="g-label-2">defenders</h4>
            <div className="inner-grid defenders">
              {defenders.map((el, index) => (
                <div key={el.name}>
                  <Popover
                    // isOpen={isPopoverOpen}
                    isOpen={activePopover === el.name}
                    position={"left"} // preferred position
                    containerClassName={"popover"}
                    disableReposition
                    content={<div>Hi! I'm popover content.</div>}
                    // onClickOutside={() => setIsPopoverOpen(false)}
                    onClickOutside={handleClickOutside}
                    content={({ position, targetRect, popoverRect }) => (
                      <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
                        position={position}
                        targetRect={targetRect}
                        popoverRect={popoverRect}
                        arrowColor={"blue"}
                        arrowSize={10}
                        arrowStyle={{ opacity: 0.9 }}
                      >
                        <div
                          className="popover-inner"
                          style={{
                            backgroundColor: "blue",
                            opacity: 0.9,
                            padding: "20px",
                            color: "gray",
                          }}
                          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                        >
                          <div className="flex top-info">
                            <div className="img-wrapper">
                              <img src={el.image} />
                            </div>
                            <div className="inner-row info">
                              <span>defender</span>
                              <span>{el.dob}</span>
                              <span>{el.height}</span>

                              <span>{el.nat}</span>
                            </div>
                          </div>

                          <p>
                            {el.name} {" | "} {el.team}
                          </p>

                          <div className="flex">
                            <div className="inner-row">
                              <div className="">
                                <span class="label">matches</span>
                                <span className="value">{el.matches}</span>
                              </div>
                            </div>
                            <div class="inner-row">
                              <div className="">
                                <span className="label">minutes</span>
                                <span className="value">{el.minutes}</span>
                              </div>
                            </div>
                            <div className="inner-row">
                              <div className="">
                                <span className="label">goals</span>
                                <span className="value">{el.goals}</span>
                              </div>
                            </div>
                            <div className="inner-row">
                              <div className="">
                                <span className="label">assists</span>
                                <span className="value">{el.assists}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ArrowContainer>
                    )}
                  >
                    <div
                      // onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                      onClick={(e) => handleClick(e, el.name)}
                      className="player defender"
                      // key={el.name}
                      // onMouseEnter={() => handleCity(el.image)}
                      // onMouseOut={handleCityReturn}
                    >
                      <img src={el.image} alt="" />
                      <span>{el.name}</span>
                    </div>
                  </Popover>
                </div>
              ))}
            </div>
            <h4 className="g-label-3">midfielders</h4>
            <div className="inner-grid midfielders">
              {midfielders.map((el, index) => (
                <div key={el.name}>
                  <Popover
                    // isOpen={isPopoverOpen}
                    isOpen={activePopover === el.name}
                    position={"left"} // preferred position
                    containerClassName={"popover"}
                    disableReposition
                    content={<div>Hi! I'm popover content.</div>}
                    // onClickOutside={() => setIsPopoverOpen(false)}
                    onClickOutside={handleClickOutside}
                    content={({ position, targetRect, popoverRect }) => (
                      <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
                        position={position}
                        targetRect={targetRect}
                        popoverRect={popoverRect}
                        arrowColor={"blue"}
                        arrowSize={10}
                        arrowStyle={{ opacity: 0.9 }}
                      >
                        <div
                          className="popover-inner"
                          style={{
                            backgroundColor: "blue",
                            opacity: 0.9,
                            padding: "20px",
                            color: "gray",
                          }}
                          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                        >
                          <div className="flex top-info">
                            <div className="img-wrapper">
                              <img src={el.image} />
                            </div>
                            <div className="inner-row info">
                              <span>defender</span>
                              <span>{el.dob}</span>
                              <span>{el.height}</span>

                              <span>{el.nat}</span>
                            </div>
                          </div>

                          <p>
                            {el.name} {" | "} {el.team}
                          </p>

                          <div className="flex">
                            <div className="inner-row">
                              <div className="">
                                <span className="label">matches</span>
                                <span className="value">{el.matches}</span>
                              </div>
                            </div>
                            <div className="inner-row">
                              <div className="">
                                <span className="label">minutes</span>
                                <span className="value">{el.minutes}</span>
                              </div>
                            </div>
                            <div className="inner-row">
                              <div className="">
                                <span className="label">goals</span>
                                <span className="value">{el.goals}</span>
                              </div>
                            </div>
                            <div className="inner-row">
                              <div className="">
                                <span className="label">assists</span>
                                <span className="value">{el.assists}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ArrowContainer>
                    )}
                  >
                    <div
                      // onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                      onClick={(e) => handleClick(e, el.name)}
                      className="player midfielder"
                      // key={el.name}
                      // onMouseEnter={() => handleCity(el.image)}
                      // onMouseOut={handleCityReturn}
                    >
                      <img src={el.image} alt="" />
                      <span>{el.name}</span>
                    </div>
                  </Popover>
                </div>
              ))}
            </div>
            <h4 className="g-label-4">forwards</h4>
            <div className="inner-grid forwards">
              {forwards.map((el, index) => (
                <div key={el.name}>
                  <div key={el.name}>
                    <Popover
                      // isOpen={isPopoverOpen}
                      isOpen={activePopover === el.name}
                      position={"left"} // preferred position
                      containerClassName={"popover"}
                      disableReposition
                      content={<div>Hi! I'm popover content.</div>}
                      // onClickOutside={() => setIsPopoverOpen(false)}
                      onClickOutside={handleClickOutside}
                      content={({ position, targetRect, popoverRect }) => (
                        <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
                          position={position}
                          targetRect={targetRect}
                          popoverRect={popoverRect}
                          arrowColor={"blue"}
                          arrowSize={10}
                          arrowStyle={{ opacity: 0.9 }}
                        >
                          <div
                            className="popover-inner"
                            style={{
                              backgroundColor: "blue",
                              opacity: 0.9,
                              padding: "20px",
                              color: "gray",
                            }}
                            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                          >
                            <div className="flex top-info">
                              <div className="img-wrapper">
                                <img src={el.image} />
                              </div>
                              <div className="inner-row info">
                                <span>defender</span>
                                <span>{el.dob}</span>
                                <span>{el.height}</span>

                                <span>{el.nat}</span>
                              </div>
                            </div>

                            <p>
                              {el.name} {" | "} {el.team}
                            </p>

                            <div className="flex">
                              <div className="inner-row">
                                <div className="">
                                  <span className="label">matches</span>
                                  <span className="value">{el.matches}</span>
                                </div>
                              </div>
                              <div class="inner-row">
                                <div className="">
                                  <span className="label">minutes</span>
                                  <span className="value">{el.minutes}</span>
                                </div>
                              </div>
                              <div className="inner-row">
                                <div className="">
                                  <span className="label">goals</span>
                                  <span className="value">{el.goals}</span>
                                </div>
                              </div>
                              <div className="inner-row">
                                <div className="">
                                  <span className="label">assists</span>
                                  <span className="value">{el.assists}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ArrowContainer>
                      )}
                    >
                      <div
                        // onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                        onClick={(e) => handleClick(e, el.name)}
                        className="player forward"
                        // key={el.name}
                        // onMouseEnter={() => handleCity(el.image)}
                        // onMouseOut={handleCityReturn}
                      >
                        <img src={el.image} alt="" />
                        <span>{el.name}</span>
                      </div>
                    </Popover>
                  </div>
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
