/**
 * Created by shu on 7/5/2017.
 */

import React from "react";
import { Component } from "react";
import Head from "next/head";
import { Motion, spring } from "react-motion";
import ShowBox from "./ShowBox";
import Footer from "./Footer";

import sliderStyles from "../styles/slider.less";

const Page = ({ children, fixed }) => (
  <div className={`slider-item ${fixed ? "fixed" : "relative slide"}`}>
    {children}
  </div>
);

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      offset: 0,
    };
    this.scrollHandler = this.scrollHandler.bind(this);
  }
  componentDidMount() {
    window.scrollHandlers = window.scrollHandlers || [];
    window.scrollHandlers.push((status) => this.scrollHandler(status));

    this.isMobi =
      window.DeviceOrientationEvent && /Mobi/.test(navigator.userAgent);
  }
  componentWillUnmount() {
    this.scrollHandler = () => {};
  }
  scrollHandler(status) {
    this.setState({
      offset: status.offset.y || 0,
    });
  }
  render() {
    const height = typeof window === "undefined" ? 0 : window.innerHeight;
    const width = typeof window === "undefined" ? 0 : window.innerWidth;
    const { offset } = this.state;

    return (
      <div>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: sliderStyles }} />
        </Head>

        <div className="slider-container">
          <Page>
            <div className="absolute w-100 vh-100">
              <article className="vh-100 dt w-100">
                <div className="dtc v-mid tc black ph3 ph4-l">
                  <Motion
                    defaultStyle={{ y: -50, o: 0 }}
                    style={{ y: spring(0), o: spring(1) }}
                  >
                    {(style) => (
                      <h2
                        className="f1 fw6 tc ttu f-subheadline-l mt0 mb3 batang"
                        style={{
                          transform: `translateY(${style.y}px)`,
                          opacity: style.o,
                        }}
                      >
                        G E N E M A T O R
                      </h2>
                    )}
                  </Motion>
                  <p className="i f5 tracked-mega-l batang">
                    the true representation of pain & suffering
                  </p>
                  {/*<div className="ttu mt3 f4">*/}
                  {/*  <Link href="/store">*/}
                  {/*    <a className="dib ph2 pv1 fw6 white tracked-mega no-underline">*/}
                  {/*      &gt; enter store &lt;*/}
                  {/*    </a>*/}
                  {/*  </Link>*/}
                  {/*</div>*/}
                </div>
              </article>
            </div>
          </Page>
          <Page>
            <div className="absolute w-100 vh-100">
              <article
                className="vh-100-l dt w-100 absolute-l"
                style={{ mixBlendMode: "screen" }}
              >
                <div className="dtc v-mid tc">
                  <ShowBox
                    width={Math.min(600, width)}
                    height={Math.min(600, height * 0.6)}
                    composer={function () {
                      let effect = new THREE.RenderPass(
                        this.scene,
                        this.camera
                      );
                      // effect.renderToScreen = true
                      this.composer.addPass(effect);

                      effect = new THREE.ShaderPass(THREE.EdgeShader2);
                      effect.uniforms.aspect.value = new THREE.Vector2(
                        500,
                        500
                      );
                      effect.renderToScreen = true;
                      this.composer.addPass(effect);
                    }}
                  />
                </div>
              </article>
              <article className="vh-100-l dt w-100" key="title-2">
                <div className="dtc v-mid black ph3 ph4-l">
                  {!this.isMobi && offset > height - 100 ? (
                    <Motion
                      defaultStyle={{ y: height * 0.8 }}
                      style={{ y: spring(height * 0.8 - offset * 0.4) }}
                    >
                      {(style) => (
                        <h2
                          className="f1 f2-m fw6 tc ttu"
                          style={{
                            transform: `translateY(${style.y}px)`,
                          }}
                        >
                          An Open Source Enthusiast who is in seek of his dreams
                        </h2>
                      )}
                    </Motion>
                  ) : (
                    <h2 className="f1 f2-m fw6 tc ttu batang">
                      An Open Source Enthusiast who is in seek of his dreams
                    </h2>
                  )}
                </div>
              </article>
            </div>
          </Page>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Slider;