var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
  let count = 1800;
function timer() {


    count = count - 1;
    if (count == -1) {
        clearInterval(counter);
        return;
    }

    let seconds = count % 60;
    let minutes = Math.floor(count / 60);
    let hours = Math.floor(minutes / 60);
    minutes %= 60;
    hours %= 60;

    document.getElementById("timer").innerHTML = hours + "h" + minutes + "m" + seconds + "s"; // watch for spelling

      // If the count down is finished, write some text
      if (count < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "TIME'S UP";
      }
    }

    timer();

function change1(){
  document.getElementById("options1").style.backgroundColor = "white";
  document.getElementById("options1").style.color = "black";
  document.getElementById("options1").style.border = "2px solid black";
  //---------//
  document.getElementById("options2").style.backgroundColor = "black";
  document.getElementById("options2").style.color = "white";
  document.getElementById("options2").style.border = "1px solid black";
  //---------//
  document.getElementById("options3").style.backgroundColor = "black";
  document.getElementById("options3").style.color = "white";
  document.getElementById("options3").style.border = "1px solid black";
  //---------//
  document.getElementById("options4").style.backgroundColor = "black";
  document.getElementById("options4").style.color = "white";
  document.getElementById("options4").style.border = "1px solid black";
};

//CHANGE FOR SECOND OPTION//
function change2(){
  document.getElementById("options2").style.backgroundColor = "white";
  document.getElementById("options2").style.color = "black";
  document.getElementById("options2").style.border = "2px solid black";
  //---------//
  document.getElementById("options1").style.backgroundColor = "black";
  document.getElementById("options1").style.color = "white";
  document.getElementById("options1").style.border = "1px solid black";
  //---------//
  document.getElementById("options3").style.backgroundColor = "black";
  document.getElementById("options3").style.color = "white";
  document.getElementById("options3").style.border = "1px solid black";
  //---------//
  document.getElementById("options4").style.backgroundColor = "black";
  document.getElementById("options4").style.color = "white";
  document.getElementById("options4").style.border = "1px solid black";
};

//CHANGE FOR THIRD OPTION//
function change3(){
  document.getElementById("options3").style.backgroundColor = "white";
  document.getElementById("options3").style.color = "black";
  document.getElementById("options3").style.border = "2px solid black";
  //---------//
  document.getElementById("options2").style.backgroundColor = "black";
  document.getElementById("options2").style.color = "white";
  document.getElementById("options2").style.border = "1px solid black";
  //---------//
  document.getElementById("options1").style.backgroundColor = "black";
  document.getElementById("options1").style.color = "white";
  document.getElementById("options1").style.border = "1px solid black";
  //---------//
  document.getElementById("options4").style.backgroundColor = "black";
  document.getElementById("options4").style.color = "white";
  document.getElementById("options4").style.border = "1px solid black";
};

//CHANGE FOR FOURTH OPTION
function change4(){
  document.getElementById("options4").style.backgroundColor = "white";
  document.getElementById("options4").style.color = "black";
  document.getElementById("options4").style.border = "2px solid black";
  //---------//
  document.getElementById("options2").style.backgroundColor = "black";
  document.getElementById("options2").style.color = "white";
  document.getElementById("options2").style.border = "1px solid black";
  //---------//
  document.getElementById("options3").style.backgroundColor = "black";
  document.getElementById("options3").style.color = "white";
  document.getElementById("options3").style.border = "1px solid black";
  //---------//
  document.getElementById("options1").style.backgroundColor = "black";
  document.getElementById("options1").style.color = "white";
  document.getElementById("options1").style.border = "1px solid black";
}





//Created by Matsuo Momiji//
//for CineSophia. Github: https://github.com/MushTroqua, Discord: matsu#3622//
