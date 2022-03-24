
const hobbyObj = {
    Bike: "biking",
    Swim: "swimming",
    Crafts: "crafts",
  };

  const action = {
    welcome: `<p>Welcome to the game of life. Please enter your name </p>
    <input id="name" />
    <a id="link"><button>Go</button></a>
    <script>
    let nameInput = document.getElementById('name')
        nameInput.addEventListener('keyup', (e)=>{
            let link = document.getElementById('link')
            link.setAttribute('href', 'http://localhost:3005/api/Name?name='+e.target.value)
        })
    </script>`,
    start: {
        S1:`<p>Welcome to the game of life `,
        S2:`! Do you want your hobby to be <a href=http://localhost:3005/api/Hobby?hobby=Bike>Biking</a>, 
        <a href=http://localhost:3005/api/Hobby?hobby=Swim>Swimming</a> or 
        <a href=http://localhost:3005/api/Hobby?hobby=Crafts>Crafts</a>?</p>`,
    },
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
    crisis: {
        Dink: `<p>You've been working now for 20 years. You're starting to feel empty on the inside. 
        Something is missing. This must be the mid life crisis. What will you do?
        <br><a href=http://localhost:3005/api/Retire?retire=true&midlife=wineo>Let me show you my wine cellar</br></a>
        <br><a href=http://localhost:3005/api/Retire?retire=true&midlife=jacked>Time to start lifting weights and get a tattoo</br></a>
        <br><a href=http://localhost:3005/api/Retire?retire=true&midlife=yachty>I think I'll get a yacht like Jeffery</br></a>
        </p>`,
        Homemaker: `<p>Your kids are all grown up now and you dont have a job. 
        Time to exlpore who you are. What will you do?
        <br><a href=http://localhost:3005/api/Ending?ending=no>Wine o'clock is my hobby.</br></a>
        <br><a href=http://localhost:3005/api/Retire?retire=true>I think I'll get a job.</br></a>
        </p>`,
        Nucfam: `<p>You've succesfully raised your children! Now you have time and money to explore the real you. 
        What will you do?
        <br><a href=http://localhost:3005/api/Retire?retire=true&midlife=wineo>Wine o'clock is my hobby.</br></a>
        <br><a href=http://localhost:3005/api/Retire?retire=true&midlife=yogi>I think I'll become a yoga instructor.</br></a>
        <br><a href=http://localhost:3005/api/Retire?retire=true&midlife=car>I think I'll get a yellow convertible</br></a>
        </p>`,
    },
    college: ` finished college. What's your plan now?
    <br><a href=http://localhost:3005/api/Kids?kids=kids>Time to have kids!</a>
    <br><a href=http://localhost:3005/api/Job?job=job>I need a job to pay off these damn student loans</a> `,
    kids: `<p>Congratulations! you have wonderful children! They sure take up a lot of time! Are you keeping up with your hobbies?</p>
    <br><a href=http://localhost:3005/api/Crisis?crisis=crisis&hobby=wineo>Wine o'clock is my hobby.</a>
    <br><a href=http://localhost:3005/api/Crisis?crisis=crisis>Of course. Balance is important.</a>
    <br><a href=http://localhost:3005/api/Crisis?crisis=crisis&hobby="">Nope.</a>`,
    job: `<p>You managed to land a job. Life's good. What now?</p>
    <br><a href=http://localhost:3005/api/Kids?kids=kids>Time to have kids!</a>
    <br><a href=http://localhost:3005/api/Crisis?crisis=crisis>Imma do me.</a>`,
    rockstar:`<p>You're a struggling musician. That's the life you chose. What now?</p>
    <br><a href=http://localhost:3005/api/Kids?kids=kids>Time to have kids!</a>
    <br><a href=http://localhost:3005/api/Crisis?crisis=crisis>Imma do me.</a>`,
    retire: `<p> Do you want to retire now? </p>
    <a href=http://localhost:3005/api/Ending?ending=retire>Yes</br></a>
    <a href=http://localhost:3005/api/Ending?ending=no>No</br></a>`,
    death: {
        nukes: {
            n1: `<p> Unfortunatly the descisions `,
            n2: ` made in life do not matter. They were born in the wrong timeline. Nuclear war has broke out and they slowly starved to death in 
            the post apocalyptic nuclear winter. <br>
            <a href=http://localhost:3005/api/start>Please play again!</a>`,
        },
        wineo: ` partook in the wine a bit too much. Not sure if it's the fatty liver 
        or drunk driving the killed them but it certainly was the excessive drinking. <br>
        <a href=http://localhost:3005/api/start>Please play again!</a></p>`,
        risky: ` chose not to wear protective gear and got in a terrible biking accident
        and died. Better luck in the next life. <br>
        <a href=http://localhost:3005/api/start>Please play again!</a>`,
        lazy: `  did not keep up with their health and died due to inactivity. <br>
        <a href=http://localhost:3005/api/start>Please play again!</a>`
    }
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
  };