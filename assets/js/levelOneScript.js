document.addEventListener("DOMContentLoaded", function() {
    var colors = [
      { name: "vermelho", file: "vermelho.mp3" },
      { name: "azul", file: "azul.mp3" },
      { name: "verde", file: "verde.mp3" },
      { name: "amarelo", file: "amarelo.mp3" },
      { name: "roxo", file: "roxo.mp3" },
      { name: "laranja", file: "laranja.mp3" }
    ];
  
    var currentIndex = 0;
    var colorBox = document.getElementById("colorBox");
    var previousButton = document.getElementById("previous");
    var nextButton = document.getElementById("next");
    var listenButton = document.getElementById("listen");
    var startButton = document.getElementById("start");
    var audioElement = document.getElementById("audio");
  
    function showColor() {
      var currentColor = colors[currentIndex].name;
      colorBox.className = "color-box " + currentColor;
    }
  
    function playSound() {
      audioElement.src = "./assets/audio/" + colors[currentIndex].file;
      audioElement.play();
    }
  
    function goToPrevious() {
      if (currentIndex === 0) {
        currentIndex = colors.length - 1;
      } else {
        currentIndex--;
      }
      showColor();
    }
  
    function goToNext() {
      if (currentIndex === colors.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      showColor();
    }
  
    function startGame() {
      currentIndex = 0;
      showColor();
    }
  

    previousButton.addEventListener("click", goToPrevious);
    nextButton.addEventListener("click", goToNext);
    listenButton.addEventListener("click", playSound);
    startButton.addEventListener("click", startGame);
  
    showColor();
  });
  
  function goBack() {
    window.location.href = 'index.html';
  }