var Body ={
  setColor: function(color){
    $('body').css('color', color);
    //document.querySelector('body').style.color = color;
  },
  setBackgroundColor: function(color){
    $('body').css('backgroundColor', color);
    //document.querySelector('body').style.backgroundColor = color;
}
}

var Links ={
  setColor: function(color){
    //Jquery 반복문
    $('a').css('color', color);
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    // alist[i].style.color = color;
    // i++;
  //}
  }
}

var COLOR_MODE_KEY = 'colorMode';

function setColorMode(mode, button){
  if(mode == 'dark'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Links.setColor('powderblue');
    if(button){ button.value = 'Bright Mode'; }
  }
  else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Links.setColor('blue');
    if(button){ button.value = 'Dark Mode'; }
  }
}

function saveColorMode(mode){
  try{
    localStorage.setItem(COLOR_MODE_KEY, mode);
  }catch(e){}
}

function loadColorMode(){
  try{
    return localStorage.getItem(COLOR_MODE_KEY);
  }catch(e){
    return null;
  }
}

function nightDayHandler(self){
  var mode = self.value == 'Dark Mode' ? 'dark' : 'bright';
  setColorMode(mode, self);
  saveColorMode(mode);
}

document.addEventListener('DOMContentLoaded', function(){
  if(loadColorMode() == 'dark'){
    var button = document.querySelector('input[type="button"][onclick*="nightDayHandler"]');
    setColorMode('dark', button);
  }
});
