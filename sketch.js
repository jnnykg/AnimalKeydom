let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let cont;

// Start sketch with a starter message
let message = "Let's Begin!";
let animalName;
let animalText;

function setup() {
  
  rectMode(CENTER);
  
  // Randomly prompt a letter at the start of sketch once in setup
  letter = int(random(0, alphabet.length-1));
  
  background(255);

  // Randomly chooses a letter to type
  // Putting it here doesn't allow pressing a new key to change to a new letter
  
  createButtons();
  windowImage();
}

function draw() {  
  // Keyboard Background
  // fill(255);
  // rect(width/2, height/5*3.7, width*1.5, height/2);
  
  textAlign(CENTER);
  noStroke();
  fill(50, 50, 70);
 
  // If alphabet string is empty
  // Set new message
  // Prompt cont string to reset
  if (alphabet == '') {
    noStroke();
    fill(106, 226,199);
    rect(width/2, height/5*3-30, width, height/8);
  
    fill(60);
    textSize(30);
    cont = 'WELL DONE — You did it!';
    text(cont, width/2, height/2+45, 400);
    textSize(18);
    text('Press ENTER to Reset', width/2, height/2+95);
    message = '';
  
    
  } else { 
    noStroke();
    fill('Honeydew');
    rect(width/2, height/5*3-30, width, height/8);
  
    fill(60);
    textSize(30);
    cont = 'Find "' + alphabet[letter] + '" to Continue';
    text(cont, width/2, height/5*3);
    textSize(20);
    text(message, width/2, height/5*2.75);
  }
  
  // Display animal name
  noStroke();
  fill(0);
  animalName ='';
  animalText = text(animalName, 0, height/8);
}
