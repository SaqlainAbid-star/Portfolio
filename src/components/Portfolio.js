/** @format */

import React from "react";
import { FaEye, FaGithub } from "react-icons/fa";
// import Carousel from "react-multi-carousel";
// import { Link } from "react-router-dom";
import {
  Border,
  Quiz,
  Uni,
  Calc,
  Olx,
  Saylani,
  Stop
} from "./image";
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                               Portfolio
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

export default function Portfolio() {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 4,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 600, min: 0 },
  //     items: 1,
  //   },
  // };
  return (
    <div>
      <>
        <section id='Portfolio' className='Full-Page mt-5' name='portfolio'>
          {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                               Heading
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
*/}
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='Page-title'>
                  <h1>
                    PORTFOLIO
                    <br />
                    <img src={Border} alt='Border' />
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                           Project cards
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
*/}

          <div className='container text-center '>
            {/* <Carousel responsive={responsive}>
              <div className='card portfolio-card'>
                <img src={Innovation} className='card-img-top' alt='...' />
                <h5 className='pt-3'>Innovation College</h5>
              </div>
              <div>
                <div className='card portfolio-card'>
                  <img src={Olx} className='card-img-top' alt='...' />
                  <h5 className='pt-3'>Olx Clone</h5>
                </div>
              </div>
              <div>
                <div className='card portfolio-card'>
                  <img src={Posale} className='card-img-top' alt='...' />
                  <h5 className='pt-3'>Posale.pk</h5>
                </div>
              </div>
              <div>
                <div className='card portfolio-card'>
                  <img src={Posale} className='card-img-top' alt='...' />
                  <h5 className='pt-3'>Posale.pk</h5>
                </div>
              </div>
              <div>
                <div className='card portfolio-card'>
                  <img src={landingPage} className='card-img-top' alt='...' />
                  <h5 className='pt-3'>Landing Page</h5>
                </div>
              </div>
              <div>
                <div className='card portfolio-card'>
                  <img src={aamir} className='card-img-top' alt='...' />
                  <h5 className='pt-3'>Pharmachy Mobile App</h5>
                </div>
              </div> 
            </Carousel> */}

            <div className='row'>
              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  data-aos='flip-left'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={Uni} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://universal-solar-energy-f839b.web.app/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/SaqlainAbid-star/Universal-Solar-Energy'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>

                  <h5 className='pt-3'>Universal Solar Energy</h5>
                </div>
              </div>
              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  data-aos='flip-right'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={Olx} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://fir-database-f7f38.web.app/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/SaqlainAbid-star/React-Olx'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <h5 className='pt-3'>Olx Clone</h5>
                </div>
              </div>
              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  data-aos='flip-left'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={Saylani} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://saqlainabid-star.github.io/Home-Page-Of-Saylani/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/SaqlainAbid-star/Home-Page-Of-Saylani'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <h5 className='pt-3'>Saylani Homepage</h5>
                </div>
              </div>

            </div>

            <div className='row mt-4'>
              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  data-aos='flip-right'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={Calc} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://calculator-a69ab.web.app/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/SaqlainAbid-star/Calculator'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>

                  <h5 className='pt-3'>Calculator</h5>
                </div>
              </div>
              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  data-aos='flip-left'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={Quiz} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://quiz-application-425fc.firebaseapp.com/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/SaqlainAbid-star/Quiz-Application'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>

                  <h5 className='pt-3'>Quiz Application</h5>
                </div>
              </div>
              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  data-aos='flip-right'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={Stop} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://stop-watch-1b086.web.app/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>
                      <a
                        href='https://github.com/SaqlainAbid-star/Stop-Watch'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <h5 className='pt-3'>Stop Watch</h5>
                </div>
              </div>
            </div>
            <div className='row mt-3 mb-5 See-More-Btn'>
              <div className='col-sm-12'>
                <a
                  href='https://github.com/SaqlainAbid-star'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <button>See more</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
