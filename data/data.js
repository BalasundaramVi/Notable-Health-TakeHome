const physicians = ['Hibbert, Julius', 'Krieger, Algernop', 'Riviera, Nick'];

const appointments = {
  Hibbert: {
    firstName: 'Julius',
    lastName: 'Hibbert',
    email: 'hibbert@notablehealth.com',
    appointments: [
      {
        name: 'Homer Simpson',
        time: '8:00AM',
        kind: 'New Patient',
      },
      {
        name: 'Bart Simpson',
        time: '8:30AM',
        kind: 'New Patient',
      },
      {
        name: 'Lisa Simpson',
        time: '9:00AM',
        kind: 'Follow-up',
      },
      {
        name: 'Mr. Burns',
        time: '9:30AM',
        kind: 'Follow-up',
      },
      {
        name: 'Ned Flanders',
        time: '10:00AM',
        kind: 'Follow-up',
      },
    ],
  },
  Krieger: {
    firstName: 'Algernop',
    lastName: 'Krieger',
    email: 'krieger@notablehealth.com',
    appointments: [
      {
        name: 'Sterling Archer',
        time: '9:00AM',
        kind: 'New Patient',
      },
      {
        name: 'Cyril Figis',
        time: '9:45AM',
        kind: 'Follow-up',
      },
      {
        name: 'Ray Gilette',
        time: '11:00AM',
        kind: 'Follow-up',
      },
      {
        name: 'Lana Kane',
        time: '12:30PM',
        kind: 'New Patient',
      },
      {
        name: 'Pam Poovey',
        time: '1:00PM',
        kind: 'New Patient',
      },
    ],
  },
  Riviera: {
    firstName: 'Nick',
    lastName: 'Riviera',
    email: 'riviera@notablehealth.com',
    appointments: [
      {
        name: 'Philip J. Fry',
        time: '12:00PM',
        kind: 'New Patient',
      },
      {
        name: 'Bender',
        time: '2:30PM',
        kind: 'Tune-up',
      },
      {
        name: 'Leela',
        time: '3:00PM',
        kind: 'Eye Apointment',
      },
      {
        name: 'Professor Farnsworth',
        time: '5:30PM',
        kind: 'Follow-up',
      },
      {
        name: 'Zoidberg',
        time: '10:00PM',
        kind: 'Undisclosed',
      },
    ],
  },
};

module.exports = { physicians, appointments };
