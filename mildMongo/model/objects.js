
const hobbyObj = {
    Bike: "biking",
    Swim: "swimming",
    Crafts: "crafts",
  };
  const action = {
    hobby: {
      Bike: ` favourite hobby is biking. How do you feel about wearing pads while you bike?<br>
          <a href=http://localhost:3005/api/Pads?pads=yes>Safety first!</a> <br>
          <a href=http://localhost:3005/api/Pads?pads=no>I don't need no protection!</a>
          </p>`,
      Other1: ` favourite hobby is `,
      Other2: `. What's your favourite subject in school?<br>
           <a href=http://localhost:3005/api/Subject?subject=Gym>Gym!</a><br>
           <a href=http://localhost:3005/api/Subject?subject=Math>I'm a mathlete.</a><br>
           <a href=http://localhost:3005/api/Subject?subject=dropOut>Skool sucks. Imma drop out.</a> `,
    },
    pads: {
      Yes: ` loves safety and sports!. What's your favourite subject in school?<br>
          <a href=http://localhost:3005/api/Subject?subject=Gym>Gym!</a><br>
          <a href=http://localhost:3005/api/Subject?subject=Math>I'm a mathlete.</a><br>
          <a href=http://localhost:3005/api/Subject?subject=dropOut>Skool sucks. Imma drop out.</a>`,
      No: `is a bad ass and doesn't wear pads while biking. What's your favourite subject in school?<br>
          <a href=http://localhost:3005/api/Subject?subject=Gym>Gym!</a><br>
          <a href=http://localhost:3005/api/Subject?subject=Math>I'm a mathlete.</a><br>
          <a href=http://localhost:3005/api/Subject?subject=dropOut>Skool sucks. Imma drop out.</a>`,
    },
    subject: {
      Dropout1: `School just wasn't for `,
      Dropout2: `. What's your plan? 
      <br><a href=http://localhost:3005/api/Rockstar?rockstar=rockstar>I'm going to be a rockstar</a>
      <br><a href=http://localhost:3005/api/Kids?kids=kids>Time to have kids!</a>
      <br><a href=http://localhost:3005/api/Job?job=job>I need a jerb</a>`,
      School: ` finished high school. What's your plan? <p>
      <br><a href=http://localhost:3005/api/College?college=college>Time to go to College</a>
      <br><a href=http://localhost:3005/api/Job?job=job>I'm going to get a job</a>`,
    },
  };
  const subjectObj = {
    dropOut: "dropOut",
    Gym: "Gym",
    Math: "Math",
  };

  module.exports = {
      action,
      hobbyObj,
      subjectObj,
  }