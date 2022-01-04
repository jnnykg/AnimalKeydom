//Below dimension are for the output screen size of min. width : 876, heeight : 734
//If working on smaller screens input dimesions like v_dist,h_dist, button styles 
//should be be adjusted

let i;
let letter1 = ['Q','W','E','R','T','Y','U','I','O','P'];  //first line of keyboard
let letter2 = ['A','S','D','F','G','H','J','K','L'];      //second line of keyboard
let letter3 = ['Z','X','C','V','B','N','M'];              //third line of keyboard

let height1, height2, height3;    //Height y-Postion of each keyboard line
let start1, start2, start3;       //Start x-Position of each keyboard line
let v_dist = 70;                  //Vertical distance between 2 keyboard lines
let h_dist = 70;                  //Horizontal distance between each keyboard alphabet

let button_line1 = [];            //Keyboard buttons for 1st line
let button_line2 = [];            //Keyboard buttons for 2nd line
let button_line3 = [];            //Keyboard buttons for 3rd line

// Creating DOM Buttons
function createButtons() {
  createCanvas(windowWidth, windowHeight);
  height1 = int(windowHeight*(2/3));
  height2 = height1 + v_dist;
  height3 = height2 + v_dist;
  
  start1 = int(windowWidth/2) - int((letter1.length * h_dist)/2);
  start2 = int(windowWidth/2) - int((letter2.length * h_dist)/2);
  start3 = int(windowWidth/2) - int((letter3.length * h_dist)/2);
  
  
  for(i=0;i<letter1.length;i++){
    button_line1[i] = createButton(letter1[i]);
    button_line1[i].position((start1 + (i*h_dist)), height1);
  }
  
  for(i=0;i<letter2.length;i++){
    button_line2[i] = createButton(letter2[i]);
    button_line2[i].position((start2 + (i*h_dist)), height2);
  }
  
  for(i=0;i<letter3.length;i++){
    button_line3[i] = createButton(letter3[i]);
    button_line3[i].position((start3 + (i*h_dist)), height3);
  }
}
