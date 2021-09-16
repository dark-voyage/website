import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function About({
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
  cartState,
  toggleCartOpen
}) {
  return (
    <Layout
      incrementQuantity={incrementQuantity}
      decrementQuantity={decrementQuantity}
      removeFromCart={removeFromCart}
      clearCart={clearCart}
      cartState={cartState}
      toggleCartOpen={toggleCartOpen}
    >
      <main className="pv3 pv5-ns vh-100 white dt mw8 center">
        <div className="items-center">
          <p className="lh-copy">
            Hello dear visitor! I’m Sokhibjon Orzikulov, who is famous under the nickname Genemator.
            <br />
            <br />
            I’m glad to see you visit my website. For the beginning, let me introduce myself:
            <br />
            I’m a Senior Full-Stack developer with more than 7 years of experience.
            Although I professionally code using 7 different programming languages as JavaScript, TypeScript, Java, Kotlin, C, C++, Assembler, Python2, Python3.
            I mainly use C++ for its total control and wide range of functions.
            <br />
            <br />
            That said, my knowledge is not limited to coding.
            I am also a specialist in creating 3D driven video and photo.
            Besides, I prefer Cinema 4D as 3D engine and utilize Adobe Products for editing purposes.
            I can also create different songs and music for my projects by using special applications on a professional level.
            <br />
            <br />
            For the time being, I am a second-year student at Westminster International University in Tashkent. My nationality is Uzbek and I’m only 19 years old 😎
          </p>
          <p className="lh-copy">
            Feel free to check me out on social networkings like{" "}
            <a
              className="link white underline dim"
              href="https://twitter.com/genemator"
          >
            Twitter
          </a>{" "}
            <a
                className="link white underline dim"
                href="https://instagram.com/genemator"
            >
              Instagram
            </a>
            {" "}or maybe{" "}
            <a
                className="link white underline dim"
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
