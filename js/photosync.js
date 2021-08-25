function pShow(n) {
  var i;
  var x = document.getElementsByClassName("pPhotoA");
  var y = document.getElementsByClassName("pPhotoB");
  if (n > x.length) {pIndex = 1}
  if (n < 1) {pIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none";
  }
  x[pIndex-1].style.display = "block";
  y[pIndex-1].style.display = "block";
}

function pPlus() {
  pShow(pIndex += 1);
}

var pIndex = 1;
pShow(pIndex);
