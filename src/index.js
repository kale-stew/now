import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/footer';
import './index.css';

import * as posts from './now.json';
const mostRecent = posts[0];

const App = () => (
  <Fragment style={{ height: '100%' }}>
    <body>
      <header />
      <div className="content">
        <h1>What I'm Doing Now</h1>
        <h3>{mostRecent.date}</h3>
        <div className="inner-content">
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
        <a href="https://kylieis.online/now">
          Visit a random "now" from the past
        </a>
      </div>
      <Footer />
    </body>
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
