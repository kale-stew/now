import React from "react";
import "./App.css";
import * as posts from "./now.json";

function App() {
  const mostRecent = posts[0];

  return (
    <div>
      <header />
      <h1>What I'm Doing Now</h1>
      <h3>{mostRecent.date}</h3>
      <div className="summary">
        <ul className="now">
          <li>
            <b>Location:</b> {mostRecent.location}
          </li>
          <li>
            <b>Travel:</b> {mostRecent.travel}
          </li>
          <li>
            <b>Reading:</b> {mostRecent.reading}
          </li>
          <li>
            <b>Celebrating:</b> {mostRecent.celebrating}
          </li>
          <li>
            <b>Watching:</b> {mostRecent.watching}
          </li>
          <li>
            <b>Listening to:</b> {mostRecent.listeningTo}
          </li>
          <li>
            <b>Learning:</b> {mostRecent.learning}
          </li>
          <li>
            <b>Working On:</b> {mostRecent.workingOn}
          </li>
        </ul>
      </div>
      <br />
      <br />
      <a href="https://nownownow.com/about">What is this page?</a>
      <br />
      <br />
      <footer />
    </div>
  );
}

export default App;
