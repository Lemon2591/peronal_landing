import React, { useState, useEffect, FC } from "react";
import Header from "../Header";
import Particles from "react-particles";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { settingPar } from "../../ultill/settingPar";

import { useTypewriter } from "use-typewriter-hook";

import Typewriter from "typewriter-effect";

function Slide_one() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // await console.log(container);
    },
    []
  );

  return (
    <>
      <div className="home" id="nfbqhjgjqiiamfa">
        <Header />
        <div className="main">
          <div className="slide" id="slide">
            <div className="slide-container">
              <div className="slide-content">
                <Particles
                  id="tsparticles"
                  init={particlesInit}
                  loaded={particlesLoaded}
                  options={settingPar}
                />

                <div className="slide-content-text">
                  <div>
                    <h1>
                      <span>T</span>
                      <span>U</span>
                      <span>A</span>
                      <span>N</span>
                      &nbsp;
                      <span>A</span>
                      <span>N</span>
                      <span>H</span>
                    </h1>

                    <Typewriter
                      options={{
                        strings: [
                          "Hi! My name's Tuan Anh and I am a developer",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slide_one;
