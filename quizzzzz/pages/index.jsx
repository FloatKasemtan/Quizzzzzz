import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Question from "../components/Question";

function disable() {
  document.querySelector("body").classList.add("disable-scroll");
}

function enable() {
  document.querySelector("body").classList.remove("disable-scroll");

  window.scrollBy(0, window.innerHeight);
  document.querySelector("bouncing")?.classList.add("");
}
export default function Home() {
  React.useEffect(() => {
    disable();
  }, []);

  return (
    // <React.Suspense fallback="loading">
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div>
        <main className={styles.main}>
          <div
            className="flex h-screen justify-center"
            style={{ flexDirection: "column", overflow: "hidden" }}
          >
            <span
              className="flex"
              style={{
                fontSize: "64px",
              }}
            >
              Welcome to Qu
              <span className="bouncing">
                <FontAwesomeIcon icon={faInfoCircle} />
              </span>
              zzzzzz
            </span>
            <div
              style={{
                fontSize: "12px",
                fontWeight: "400",
                alignSelf: "end",
              }}
              // className={styles.slide}
            >
              Build by Floaty_KT
            </div>
          </div>
          <Question />
          <footer
            className="flex center"
            style={{
              position: "fixed",
              left: 0,
              right: 0,
              bottom: "20px",
            }}
          >
            <button
              className="bouncing"
              onClick={() => enable()}
              style={{
                backgroundColor: "transparent",
                animationDelay: "0.5s",
              }}
            >
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
          </footer>
        </main>
      </div>
    </div>
    // </React.Suspense>
  );
}
