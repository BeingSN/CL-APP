import React from "react";
import Header from "./header";
import Footer from "./footer";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import mainImg from "../assets/images/bayern-flag.jpg";

const LatestPage = () => {
  return (
    <>
      <div className="flex header-top">
        <Header />
        <div className="latest-page-wrapper">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="container mw">
            <h1>Latest</h1>

            <div className="row">
              <div className="title">
                <h2>Meet the winners</h2>
                <p className="subheading">
                  Bayern beat Paris 1-0 in the UEFA Champions League to complete
                  a spectacular season. Get the background.
                </p>
                <div className="flex top">
                  <div className="team">
                    <h4>BAYERN</h4>
                    <p>UEFA ranking: 1</p>
                    <p>This season: P11 W11 D0 L0 F43 A8</p>
                  </div>

                  <div className="banner-img">
                    <img src={mainImg} alt="" />
                  </div>
                </div>

                <p>
                  Though always named among the favourites, nobody gave Bayern
                  much of a chance of winning this season’s competition. Yet
                  despite high-profile departures last summer and a mid-season
                  change of coach, the German champions won 11 out of 11 while
                  racking up 43 goals in the process. Under Hansi Flick, they
                  played with a confidence, hunger and a frightening intensity
                  that few sides have been able to live with.
                </p>
                <h4>Who's in charge?</h4>
                <p>
                  Who’s in charge? Replacing Niko Kovač, former assistant Hansi
                  Flick took the reins in November. His side have won 28 of
                  their last 29 games, and extended their winning streak to 20
                  matches in the final, with Flick having earned a contract
                  until the summer of 2023. Key quote: "We will look to organise
                  our defence, but we know our biggest strength is putting our
                  opponents under pressure."
                </p>
                <h4>Tactical approach</h4>
                <p>
                  Bayern's high intensity, quick pressing and desire to keep
                  possession have been key to their dominance under Flick. Arjen
                  Robben and Franck Ribéry are long gone, but exploiting the
                  wings remains fundamental in Bayern's approach – made possible
                  by the incredible work rate of their full-backs Joshua Kimmich
                  and Alphonso Davies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LatestPage;
