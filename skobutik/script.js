//----------navbar----------

a = 2;

function searchbar() {
  if (a == 2) {
    document.getElementById("cards").style.opacity = "1";
    document.getElementById("cards").style.transition = "0.3s";
    document.getElementById("myInput").style.opacity = "1";
    document.getElementById("myInput").style.transition = "0.3s";
    document.getElementById("search").style.opacity = "0";
    document.getElementById("x").style.opacity = "1";
  }
}

function removesearchbar() {
  if (a == 2) {
    document.getElementById("cards").style.opacity = "0";
    document.getElementById("myInput").style.opacity = "0";
    document.getElementById("x").style.opacity = "0";
    document.getElementById("search").style.opacity = "1";
  }
}

// ----------search function----------

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//----------shoes function----------

document.getElementById("angle2").style.opacity = "0";
document.getElementById("angle3").style.opacity = "0";
document.getElementById("angle4").style.opacity = "0";
document.getElementById("angle5").style.opacity = "0";
document.getElementById("angle6").style.opacity = "0";
document.getElementById("line4").style.opacity = "0";
document.getElementById("line5").style.opacity = "0";
document.getElementById("line6").style.opacity = "0";
document.getElementById("line4").style.marginTop = "400px";
document.getElementById("line5").style.marginTop = "400px";
document.getElementById("line6").style.marginTop = "400px";
document.getElementById("info2").style.display = "none";
document.getElementById("color2").style.border = "1px solid red";
document.getElementById("line1").style.border = "solid white";
document.getElementById("line4").style.border = "solid white";

a = 1;

function ang1() {
  if (a == 1) {
    document.getElementById("angle1").style.opacity = "1";
    document.getElementById("angle2").style.opacity = "0";
    document.getElementById("angle3").style.opacity = "0";
    document.getElementById("line1").style.border = "solid white";
    document.getElementById("line2").style.border = "solid grey";
    document.getElementById("line3").style.border = "solid grey";
  }
}

function ang2() {
  if (a == 1) {
    document.getElementById("angle1").style.opacity = "0";
    document.getElementById("angle2").style.opacity = "1";
    document.getElementById("angle3").style.opacity = "0";
    document.getElementById("line1").style.border = "solid grey";
    document.getElementById("line2").style.border = "solid white";
    document.getElementById("line3").style.border = "solid grey";
  }
}

function ang3() {
  if (a == 1) {
    document.getElementById("angle1").style.opacity = "0";
    document.getElementById("angle2").style.opacity = "0";
    document.getElementById("angle3").style.opacity = "1";
    document.getElementById("line1").style.border = "solid grey";
    document.getElementById("line2").style.border = "solid grey";
    document.getElementById("line3").style.border = "solid white";
  }
}

function ang4() {
  if (a == 1) {
    document.getElementById("angle4").style.opacity = "1";
    document.getElementById("angle5").style.opacity = "0";
    document.getElementById("angle6").style.opacity = "0";
    document.getElementById("line4").style.border = "solid white";
    document.getElementById("line5").style.border = "solid grey";
    document.getElementById("line6").style.border = "solid grey";
  }
}

function ang5() {
  if (a == 1) {
    document.getElementById("angle4").style.opacity = "0";
    document.getElementById("angle5").style.opacity = "1";
    document.getElementById("angle6").style.opacity = "0";
    document.getElementById("line4").style.border = "solid grey";
    document.getElementById("line5").style.border = "solid white";
    document.getElementById("line6").style.border = "solid grey";
  }
}

function ang6() {
  if (a == 1) {
    document.getElementById("angle4").style.opacity = "0";
    document.getElementById("angle5").style.opacity = "0";
    document.getElementById("angle6").style.opacity = "1";
    document.getElementById("line4").style.border = "solid grey";
    document.getElementById("line5").style.border = "solid grey";
    document.getElementById("line6").style.border = "solid white";
  }
}

function cols() {
  if (a == 1) {
    document.getElementById("angle1").style.opacity = "0";
    document.getElementById("angle2").style.opacity = "0";
    document.getElementById("angle3").style.opacity = "0";
    document.getElementById("angle4").style.opacity = "1";
    document.getElementById("angle5").style.opacity = "0";
    document.getElementById("angle6").style.opacity = "0";
    document.getElementById("line1").style.opacity = "0";
    document.getElementById("line2").style.opacity = "0";
    document.getElementById("line3").style.opacity = "0";
    document.getElementById("line4").style.opacity = "1";
    document.getElementById("line5").style.opacity = "1";
    document.getElementById("line6").style.opacity = "1";
    document.getElementById("line1").style.marginTop = "400px";
    document.getElementById("line2").style.marginTop = "400px";
    document.getElementById("line3").style.marginTop = "400px";
    document.getElementById("line4").style.marginTop = "350px";
    document.getElementById("line5").style.marginTop = "350px";
    document.getElementById("line6").style.marginTop = "350px";
    document.getElementById("info1").style.display = "none";
    document.getElementById("info2").style.display = "block";
    document.getElementById("color1").style.border = "1px solid red";
    document.getElementById("color2").style.border = "none";
    document.getElementById("line4").style.border = "solid white";
    document.getElementById("line5").style.border = "solid grey";
    document.getElementById("line6").style.border = "solid grey";
  }
}

function colp() {
  if (a == 1) {
    document.getElementById("angle1").style.opacity = "1";
    document.getElementById("angle2").style.opacity = "0";
    document.getElementById("angle3").style.opacity = "0";
    document.getElementById("angle4").style.opacity = "0";
    document.getElementById("angle5").style.opacity = "0";
    document.getElementById("angle6").style.opacity = "0";
    document.getElementById("line1").style.opacity = "1";
    document.getElementById("line2").style.opacity = "1";
    document.getElementById("line3").style.opacity = "1";
    document.getElementById("line4").style.opacity = "0";
    document.getElementById("line5").style.opacity = "0";
    document.getElementById("line6").style.opacity = "0";
    document.getElementById("line1").style.marginTop = "350px";
    document.getElementById("line2").style.marginTop = "350px";
    document.getElementById("line3").style.marginTop = "350px";
    document.getElementById("line4").style.marginTop = "400px";
    document.getElementById("line5").style.marginTop = "400px";
    document.getElementById("line6").style.marginTop = "400px";
    document.getElementById("info1").style.display = "block";
    document.getElementById("info2").style.display = "none";
    document.getElementById("color1").style.border = "none";
    document.getElementById("color2").style.border = "1px solid red";
    document.getElementById("line1").style.border = "solid white";
    document.getElementById("line2").style.border = "solid grey";
    document.getElementById("line3").style.border = "solid grey";
  }
}

function wishlist() {
  if (a == 1) {
    document.getElementById("varukorg").style.opacity = "1";
    setInterval(function () {
      document.getElementById("varukorg").style.opacity = "0";
    }, 2000);
  }
}
