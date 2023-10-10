//  Create a quick survey app to generate an online profile description
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)\n', (answer1) => {
  rl.question('What\'s a hidden talent of yours?\n', (answer2) =>{
    rl.question('What topic of conversation excites you the most?\n', (answer3) => {
      rl.question('What would you do if you have more free time?\n', (answer4) => {
        rl.question('What is your favourite motto in life?\n', (answer5) => {
          rl.question('What do you do on weekends?\n', (answer6) => {
            rl.question('What type of music do you like?\n', (answer7) => {
              console.log(`\n--------- \nHere is your profile description!\n*********
${answer1} is an extremelly talented ${answer2} which may surprise you. 
Topics about ${answer3} excites ${answer1} the most, and
${answer1} believes that more free time means more time for ${answer4}. 
${answer1} live by this motto: ${answer5}.
On weekends, you might find ${answer1} ${answer6} or jamming to ${answer7} music.`);
              rl.close();
            });
          });
        });
      });
    });
  });
  
});