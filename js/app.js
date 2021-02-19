function setup() {
  // Struggling with variable declaration
  d = day();
  m = month();
  y = year();
  //   calling some stupid functions
  changeRead();

  // Playing with the DOM elements
  document.querySelector("#user-date").innerHTML = complete;
}

function changeRead() {
  //   Playing around with some month functions
  if (m == 1) {
    m = "JANUARY";
  }
  if (m == 2) {
    m = "FEBRAURY ";
  }
  if (m == 3) {
    m = "MARCH";
  }
  if (m == 4) {
    m = "APRIL  ";
  }
  if (m == 5) {
    m = "MAY";
  }
  if (m == 6) {
    m = "JUNE";
  }
  if (m == 7) {
    m = "JULY";
  }
  if (m == 9) {
    m = "AUGUST";
  }
  if (m == 9) {
    m = "SEPTEMBER";
  }
  if (m == 10) {
    m = "OCTOBER";
  }
  if (m == 11) {
    m = "NOVEMBER";
  }
  if (m == 12) {
    m = "DECEMBER ";
  }
  complete = d + " " + m + y;
}
