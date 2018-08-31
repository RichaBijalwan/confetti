var randomColor = function(theam){
  var low, range;

  if(theam == 'dark'){
    low = 0;
    range = 160;
  }else if(theam == 'light'){
    low = 155;
    range = 100;
  }

  var randomRed = low + Math.floor(Math.random()*range),
      randomGreen = low + Math.floor(Math.random()*range),
      randomBlue = low + Math.floor(Math.random()*range),
      randomColor = 'rgb('+randomRed+','+randomGreen+','+randomBlue+')';

  return randomColor;
};

var randomLetters = function(){
  var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      randomNum = Math.floor(Math.random()*26);
  
  return letters[randomNum];
};

