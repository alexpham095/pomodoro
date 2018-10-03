$(document).ready(function() {
  let workTime = 1500;

  $("#displayClock").text(secToTimeString(workTime));

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
