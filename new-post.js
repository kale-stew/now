const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

/**
 * generate a `date` to be the key
 * create an obj
 * take input for & add:
 *    location
 *    travel
 *    reading
 *    celebrating
 *    watching
 *    listeningTo
 *    learning
 *    workingOn
 * add obj to now.json, with a key of `date`
 */

const FILE = './src/now.json';
const KEYS = {
  CELEBRATING: 'celebrating',
  DATE: 'date',
  LEARNING: 'learning',
  LISTENING_TO: 'listeningTo',
  LOCATION: 'location',
  READING: 'reading',
  TRAVEL: 'travel',
  WATCHING: 'watching',
  WORKING_ON: 'workingOn'
};

const QUESTIONS = [
  {
    name: KEYS.LOCATION,
    type: 'input',
    message: 'Current location:'
  },
  {
    name: KEYS.TRAVEL,
    type: 'input',
    message: 'Upcoming travel:'
  },
  {
    name: KEYS.READING,
    type: 'input',
    message: 'Currently reading:'
  },
  {
    name: KEYS.CELEBRATING,
    type: 'input',
    message: 'Current or upcoming celebrations:'
  },
  {
    name: KEYS.WATCHING,
    type: 'input',
    message: 'Currently watching:'
  },
  {
    name: KEYS.LISTENING_TO,
    type: 'input',
    message: 'Currently listening to:'
  },
  {
    name: KEYS.LEARNING,
    type: 'input',
    message: 'Currently learning:'
  },
  {
    name: KEYS.WORKING_ON,
    type: 'input',
    message: 'Currently working on:'
  }
];

const promptForNow = () => {
  return inquirer.prompt(QUESTIONS);
};

const run = async () => {
  const answers = await promptForNow();
  console.log(FILE, answers);
};

run();
