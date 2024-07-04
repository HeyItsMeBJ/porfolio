import "./experience.css";
import twowaits from "../../assets/freelance-logo.png";
import byte from "../../assets/byte-logo.png";
import opensource from "../../assets/hacktoberfest-logo.png";

export default function Experience() {
  return (
    <section className="experience container section" id="experience">
      <h2 className="section__title">Experience</h2>

      <div className="experience__container grid">
        <div className="experience__item">
          <img
            src={byte}
            alt="byte"
            width="80"
            className="experience__img"
            style={{
              borderRadius: "50%",
            }}
          ></img>
          <h3 className="experience__title">Problem Solver</h3>
          <h4 className="subtitle">BYTE | Coding Club</h4>
          <ul>
            <li className="experience__description">
              • Manages problem sets and ensures answers accuracy.
            </li>
            <li className="experience__description">
              • Solve doubts related to different topics such as arrays,
              strings, trees, recursion, etc.
            </li>
            <li className="experience__description">
              • Helped individuals to get started with Web Development and DSA
            </li>
          </ul>
        </div>

        <div className="experience__item">
          <img
            src={twowaits}
            alt=""
            width="80"
            className="experience__img"
            style={{
              borderRadius: "50%",
            }}
          ></img>
          <h3 className="experience__title">Freelancing</h3>
          <h4 className="subtitle">Indo Web Agencies</h4>
          <ul>
            <li className="experience__description">
              • Make a MERN Stack project Aviator.
            </li>
            <li className="experience__description">
              • Real-time game mechanics, user auth, and secure betting .
            </li>
            <li className="experience__description">
              • Secure database, and scalable architecture for
              growth.
            </li>
            <li>
              • Mobile compatibility, leaderboards and achievements to enhance
              user engagement.
            </li>
          </ul>
        </div>

        <div className="experience__item">
          <img
            src={opensource}
            alt="hacktoberfest"
            width="80"
            className="experience__img"
            style={{
              borderRadius: "50%",
            }}
          ></img>
          <h3 className="experience__title">Open Source</h3>
          <h4 className="subtitle">Hacktoberfest 2022</h4>
          <ul>
            <li className="experience__description">
              • Make a responsive landing pages and various website features.
            </li>
            <li className="experience__description">
              • Helps to make a repository contains dsa & leetcode problem
              solutions.
            </li>
            <li className="experience__description">
              • Learned about the open source culture and basics git commands.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
