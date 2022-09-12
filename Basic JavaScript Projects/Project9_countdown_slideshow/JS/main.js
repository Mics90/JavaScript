function countdown() {
    var seconds = document.getElementById("seconds").value ;

    function tick() {
        seconds = seconds - 1 ;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
    if(seconds == -1) {
        alert("Time`s up!");

    }
    }
    tick();

}

let slideIndex = 0; // variable
showSlides();//function

function showSlides() { // function
  let i; //variable
  let slides = document.getElementsByClassName("mySlides"); // get element from html
  for (i = 0; i < slides.length; i++) {  //for loop
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}  //if 
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}