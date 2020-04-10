import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/footer';
import { formatDate, getMostRecentDate } from './utils';
import './index.css';

import posts from './now.json';

const mostRecentDate = getMostRecentDate(posts);
const mostRecentPost = posts[mostRecentDate];

const App = () => (
  <body>
    <header />
    <div className="content">
      <h1>What I'm Doing Now</h1>
      <h3>{formatDate(mostRecentDate)}</h3>
      <div className="inner-content">
        <ul className="now">
          <li>
            <b>Location:</b> {mostRecentPost.location}
          </li>
          <li>
            <b>Travel:</b> {mostRecentPost.travel}
          </li>
          <li>
            <b>Reading:</b> {mostRecentPost.reading}
          </li>
          <li>
            <b>Celebrating:</b> {mostRecentPost.celebrating}
          </li>
          <li>
            <b>Watching:</b> {mostRecentPost.watching}
          </li>
          <li>
            <b>Listening to:</b> {mostRecentPost.listeningTo}
          </li>
          <li>
            <b>Learning:</b> {mostRecentPost.learning}
          </li>
          <li>
            <b>Working On:</b> {mostRecentPost.workingOn}
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
);

ReactDOM.render(<App />, document.getElementById('root'));
