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

module.exports = {
  FILE: './src/now.json',
  QUESTIONS: [
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
  ],
  DAYS: {
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thu: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
    Sun: 'Sunday'
  },
  MONTHS: {
    Jan: 'January',
    Feb: 'February',
    Mar: 'March',
    Apr: 'April',
    May: 'May',
    Jun: 'June',
    Jul: 'July',
    Aug: 'August',
    Sep: 'September',
    Oct: 'October',
    Nov: 'November',
    Dec: 'December'
  }
};
