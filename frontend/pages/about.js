import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function About() {
  return (
    <Layout>
      <main className="pv3 pv5-ns vh-100 black dt mw8 center">
        <div className="items-center">
          <p className="lh-copy">
            Hello dear visitor! I’m Yahyobek... and I was too lazy to change website infos... This is how irresponsible i am...
          </p>
          <p className="lh-copy">
            Feel free to check me out on social networkings like{" "}
            <a
              className="link black underline dim"
              href="https://twitter.com/genemator"
            >
              Twitter
            </a>{" "}
            <a
              className="link black underline dim"
              href="https://instagram.com/genemator"
            >
              Instagram
            </a>{" "}
            or maybe{" "}
            <a
              className="link black underline dim"
              href="https://t.me/genemators"
            >
              Telegram
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
