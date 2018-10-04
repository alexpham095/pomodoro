$(document).ready(function() {
  let workTime = 1500;
  let breakTime = 300;
      currentTime = workTime,
      displayPom = currentTime;
  var stopped = true;
  let onDisp = "Break";

  $("#displayClock").text(secToTimeString(workTime));

  $("#decPom").click(function() {
    if(displayPom == workTime && $("#displayPom").text() > 1){
      let pom = $("#displayPom").text();
      pom--;
      $("#displayPom").text(pom);
      displayPom = 
        currentTime = 
          workTime = eval(minToSec($("#displayPom").text()));
      $("#displayClock").text(secToTimeString(workTime));
    }
  });

  $("#incPom").click(function() {
    if(displayPom == workTime){
      let pom = $("#displayPom").text();
      pom++;
      $("#displayPom").text(pom);

      displayPom = 
        currentTime = 
        workTime = eval(minToSec($("#displayPom").text()));
      $("#displayClock").text(secToTimeString(workTime));
    }
  });

  $("#decBreak").click(function() {
    if(displayPom == workTime && $("#break").text() > 1){
      let brk = $("#displayBreak").text();
      brk--;
      $("#displayBreak").text(brk);

      breakTime = eval(minToSec($("#displayBreak").text()));
    }
  });

  $("#incBreak").click(function(){
    if(displayPom == workTime){
      let brk = $("#displayBreak").text();
      brk++;
      $("#displayBreak").text(brk);

      breakTime = eval(minToSec($("#displayBreak").text()));
    }
  });

  $("#start").click(countdown);

  $("#pause").click(pauseCountdown);

  $("#stop").click(stopCountdown);
  
  $("#reset").click(resetCountdown);

  function countdown(){
    if(stopped === true){
      displayPom = currentTime;
      stopped = setInterval(decrement, 1000);
    }
    
    function decrement(){
      if(displayPom == 0){
        $("#period").text(onDisp);
        switch(onDisp){
          case "Break":
            displayPom = breakTime;
            onDisp = "Work";
            break;
          case "Work":
            displayPom = workTime;
            onDisp = "Break";
            break;
        }
        $("#displayClock").text(secToTimeString(displayPom));
      } else {
        displayPom--;
        $("#displayClock").text(secToTimeString(displayPom));
      }
    }
  }

  function pauseCountdown(){
    clearInterval(stopped);
    stopped = true;
    currentTime = displayPom;
  }

  function stopCountdown(){
    clearInterval(stopped);
    stopped = true;
    displayPom = currentTime = workTime;
    $("#displayClock").text(secToTimeString(displayPom));
    $("#activity").text("Work");
    onDisp = "Break";
  }

  function resetCountdown(){
    clearInterval(stopped);
    stopped = true;
    displayPom = currentTime = workTime = minToSec(25);
    breakTime = minToSec(5);

    $("#displayClock").text(secToTimeString(displayPom));
    $("#displayBreak").text(5);
    $("#displayPom").text(25);
    $("#activity").text("Work");
    onDisp = "Break";
  }

  function minToSec(min){
    return min*60;
  }

  function secToTimeString(second){
    let hour = 0;
    let minute = 0;

    hour = Math.floor(second/3600);
    second = second - (3600*hour);
    minute = Math.floor(second/60);
    second = second -(60*minute);
    return (hour>0) ? n(hour) + ":" + n(minute) + ":" +n(second) : n(minute) + ":" + n(second);

    function n(n) {
      return n > 9 ? "" + n : "0" +n;
    }
  }
});
