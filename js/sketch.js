function setup() {
  firstLabel = select(".label-one");
  firstInput = select("#email");
  secondLabel = select(".label-two");
  secondInput = select("#fas");
}

function draw() {
  if (firstInput.value().length == 0) {
    firstLabel.style("opacity", "0");
    firstLabel.style("margin-top", "1vh");
  } else {
    firstLabel.style("opacity", "1");
    firstLabel.style("margin-top", "-2vh");
  }
  if (secondInput.value().length == 0) {
    secondLabel.style("opacity", "0");
    secondLabel.style("margin-top", "13vh");
  } else {
    secondLabel.style("opacity", "1");
    secondLabel.style("margin-top", "10vh");
  }
}

function signHimUp() {
  document.querySelector(".onboarding").style = "display : none";
  document.querySelector(".login").style = "display : block";
}
