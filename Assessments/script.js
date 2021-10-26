
      var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

      // Update the count down every 1 second
      var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("timer").innerHTML =  hours + "h "
      + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "TIME'S UP";
      }
      }, 1000);

      function hover1(){
        let optionElement = document.getElementById("options1");
         optionElement.style.background = 'white';
         optionElement.style.color = 'black';
         optionElement.style.border = '2px solid black'

      };

      function normal1(){
        let optionElement = document.getElementById("options1");
        optionElement.style.background = 'black';
        optionElement.style.color = 'white';
      };
      //this is for first P element//

      function hover2(){
        let optionElement = document.getElementById("options2");
         optionElement.style.background = 'white';
         optionElement.style.color = 'black';
         optionElement.style.border = '2px solid black'

      };

      function normal2(){
        let optionElement = document.getElementById("options2");
        optionElement.style.background = 'black';
        optionElement.style.color = 'white';
      };
      //this is for second P element//

      function hover3(){
        let optionElement = document.getElementById("options3");
         optionElement.style.background = 'white';
         optionElement.style.color = 'black';
         optionElement.style.border = '2px solid black'
      };

      function normal3(){
        let optionElement = document.getElementById("options3");
        optionElement.style.background = 'black';
        optionElement.style.color = 'white';
      };
      //this is for third P element//
         function hover4(){
           let optionElement = document.getElementById("options4");
            optionElement.style.background = 'white';
            optionElement.style.color = 'black';
            optionElement.style.border = '2px solid black'
         };

         function normal4(){
           let optionElement = document.getElementById("options4");
           optionElement.style.background = 'black';
           optionElement.style.color = 'white';
         };
      //this is for fourth P element//


//Created by Matsuo Momiji//
//for CineSophia. Github: https://github.com/MushTroqua, Discord: matsu#3622//
