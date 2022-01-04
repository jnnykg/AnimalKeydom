// Interactivity of when keys are pressed

let buttonCol = '#15E6C6';

function keyTyped(){
  textAlign(CENTER);
  imageMode(CENTER);
  

  if (key == 'Enter') {
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    message = '';
    resetAllButtonColors();
    return;
  }
    
  // Solved problem in overlapping text by adding background to keyTyped
  windowImage();
  
  // Check if correct key was pressed
  if(alphabet[letter] == key.toUpperCase()) {
    // If correct
    // Replace letter after it has been chosen
    message = 'Great job! ☺';
    alphabet = alphabet.replace(alphabet[letter], '');
    letter = int(random(0, alphabet.length-1));
    
    // Show alphabet on Console every time it replaces a letter
    console.log(alphabet);
    
  } else {
    // If incorrect
    // Display incorrect message
    message = 'Sorry ☹, wrong letter. Try again.';
  }
  // Text Style
  fill(70);
  textSize(20);
  noStroke();

  if((key == 'a') || (key == 'A')){
    button_line2[0].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line2[0]),1000);
    aardvark.play();
    image(aardvarkI, width/2, height/5+50);
    text('aardvark', width/2, height/5*2);
  }
  
  if((key == 'b') || (key == 'B')) {
    button_line3[4].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line3[4]),1000); 
    bat.play();
    image(batI, width/2, height/5+50);
    text('bat', width/2, height/5*2);
  }

  if((key == 'c') || (key == 'C')) {
    button_line3[2].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line3[2]),1000); 
    cat.play();
    image(catI, width/2, height/5+50);
    text('cat', width/2, height/5*2);
  }
  
  if((key == 'd') || (key == 'd')) {
    button_line2[2].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line2[2]),800); 
    duck.play();
    image(duckI, width/2, height/5+50);
    text('duck', width/2, height/5*2);
  }
  
  if((key == 'e') || (key == 'E')) {
    button_line1[2].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line1[2]),1500); 
    elephant.play();
    image(elephantI, width/2, height/5+50);
    text('elephant', width/2, height/5*2);
  }
  
  if((key == 'f') || (key == 'F')) {
    button_line2[3].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line2[3]),2000); 
    frigatebird.play();
    image(frigatebirdI, width/2, height/5+50);
    text('frigatebird', width/2, height/5*2);
  }
  
  if((key == 'g') || (key == 'G')) {
    button_line2[4].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line2[4]),2400); 
    gharial.play();
    image(gharialI, width/2, height/5+50);
    text('gharial', width/2, height/5*2);
  }
  
  if((key == 'h') || (key == 'H')) {
    button_line2[5].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line2[5]),1800); 
    hedgehog.play();
    image(hedgehogI, width/2, height/5+50);
    text('hedgehog', width/2, height/5*2);
  }
  
  if((key == 'i') || (key == 'I')) {
    button_line1[7].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line1[7]),2000); 
    impala.play();
    image(impalaI, width/2, height/5+50);
    text('impala', width/2, height/5*2);
  }
  
  if((key == 'j') || (key == 'J')) {
    button_line2[6].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line2[6]),1500); 
    jackal.play();
    image(jackalI, width/2, height/5+50);
    text('jackal', width/2, height/5*2);
  }
  
  if((key == 'k') || (key == 'K')) {
    button_line2[7].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line2[7]),2300); 
    koala.play();
    image(koalaI, width/2, height/5+50);
    text('koala', width/2, height/5*2);
  }
  
  if((key == 'l') || (key == 'L')) {
    button_line2[8].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line2[8]),2000); 
    lion.play();
    image(lionI, width/2, height/5+50);
    text('lion', width/2, height/5*2);
  }
  
  if((key == 'm') || (key == 'M')) {
    button_line3[6].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line3[6]),1000); 
    monkey.play();
    image(monkeyI, width/2, height/5+50);
    text('monkey', width/2, height/5*2);
  }
  
  if((key == 'n') || (key == 'N')) {
    button_line3[5].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line3[5]),2000); 
    narwhal.play();
    image(narwhalI, width/2, height/5+50);
    text('narwhal', width/2, height/5*2);
  }
  
  if((key == 'o') || (key == 'O')) {
    button_line1[8].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line1[8]),1200); 
    octopus.play();
    image(octopusI, width/2, height/5+50);
    text('octopus', width/2, height/5*2);
  }
  
  if((key == 'p') || (key == 'P')) {
    button_line1[9].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line1[9]),1000); 
    pig.play();
    image(pigI, width/2, height/5+50);
    text('pig', width/2, height/5*2);
  }
  
  if((key == 'q') || (key == 'Q')) {
    button_line1[0].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line1[0]),1800); 
    quokka.play();
    image(quokkaI, width/2, height/5+50);
    text('quokka', width/2, height/5*2);
  }
  
  if((key == 'r') || (key == 'R')) {
    button_line1[3].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line1[3]),1000); 
    raccoon.play();
    image(raccoonI, width/2, height/5+50);
    text('raccoon', width/2, height/5*2);
  }
  
  if((key == 's') || (key == 'S')) {
    button_line2[1].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line2[1]),1000); 
    sturgeon.play();
    image(sturgeonI, width/2, height/5+50);
    text('sturgeon', width/2, height/5*2);
  }
  
  if((key == 't') || (key == 'T')) {
    button_line1[4].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line1[4]),1500); 
    turkey.play();
    image(turkeyI, width/2, height/5+50);
    text('turkey', width/2, height/5*2);
  }
  
  if((key == 'u') || (key == 'U')) {
    button_line1[6].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line1[6]),1200); 
    umbrellabird.play();
    image(umbrellabirdI, width/2, height/5+50);
    text('umbrellabird', width/2, height/5*2);
    
  }
  
  if((key == 'v') || (key == 'V')) {
    button_line3[3].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line3[3]),800); 
    vulture.play();
    image(vultureI, width/2, height/5+50);
    text('vulture', width/2, height/5*2);
  }
  
  if((key == 'w') || (key == 'W')) {
    button_line1[1].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line1[1]),2000); 
    wolf.play();
    image(wolfI, width/2, height/5+50);
    text('Wolf', width/2, height/5*2);
  }
  
  if((key == 'x') || (key == 'X')) {
    button_line3[1].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line3[1]),1500);
    xerus.play();
    image(xerusI, width/2, height/5+50);
    text('xerus', width/2, height/5*2);
  }
  
  if((key == 'y') || (key == 'Y')) {
    button_line1[5].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line1[5]),1000); 
    yak.play();
    image(yakI, width/2, height/5+50);
    text('yak', width/2, height/5*2);
  }
  
  if((key == 'z') || (key == 'Z')) {
    button_line3[0].style('background-color', buttonCol);  //Light Green
    setTimeout(resetColor(button_line3[0]),2000); 
    zebra.play();
    image(zebraI, width/2, height/5+50);
    text('zebra', width/2, height/5*2);
  }
}

// Highlight keys that were pressed
function resetColor(b) {
  return function() {        //passing instance of button DOM element
    b.style('background-color', '#7FFFD4');
  }
}
  
function resetAllButtonColors() {
  for(i=0;i<letter1.length;i++){
    button_line1[i].style('background-color', '#FFFFFF')
  }
  
  for(i=0;i<letter2.length;i++){
    button_line2[i].style('background-color', '#FFFFFF')
  }
  
  for(i=0;i<letter3.length;i++){
    button_line3[i].style('background-color', '#FFFFFF')
  }
}
