function voir() {
  document.getElementById("pair").style.filter = "blur(0)";
  document.getElementById("pair").style.opacity = 1;
}
function display() {
  document.getElementById("cour").style.display = "none";
  document.getElementById("mainquiz").style.display = "block";
  document.getElementById("app").style.display = "block";
  document.getElementById("btquiz").style.transform = "scale(0.9)";
  document.getElementById("btcour").style.transform = "scale(1)";
  document.getElementById("btquiz").style.backgroundColor =
    "rgba(202, 188, 63, 0.658)";
  document.getElementById("btcour").style.backgroundColor = "rgb(226, 209, 57)";
  document.getElementById("line").style.left = "61.5%";
}
function display2() {
  document.getElementById("cour").style.display = "block";
  document.getElementById("mainquiz").style.display = "none";
  document.getElementById("app").style.display = "none";
  document.getElementById("btcour").style.transform = "scale(0.9)";
  document.getElementById("btquiz").style.transform = "scale(1)";
  document.getElementById("btquiz").style.backgroundColor = "rgb(226, 209, 57)";
  document.getElementById("btcour").style.backgroundColor =
    "rgba(202, 188, 63, 0.658)";
  document.getElementById("line").style.left = "26.9%";
}
function none() {
  document.getElementById("mainquiz").style.display = "none";
  document.getElementById("app").style.display = "none";
}

function verifie() {
  p1 = document.getElementById("check1").innerHTML;
  r1 = document.getElementById("r1").checked;
  r2 = document.getElementById("r2").checked;
  r3 = document.getElementById("r3").checked;
  r4 = document.getElementById("r4").checked;
  r5 = document.getElementById("r5").checked;
  r6 = document.getElementById("r6").checked;
  r7 = document.getElementById("r7").checked;
  r8 = document.getElementById("r8").checked;
  r9 = document.getElementById("r9").checked;
  r10 = document.getElementById("r10").checked;
  r11 = document.getElementById("r11").checked;
  r12 = document.getElementById("r12").checked;
  r13 = document.getElementById("r13").checked;
  r14 = document.getElementById("r14").checked;
  r15 = document.getElementById("r15").checked;
  s = 0;
  if (
    r1 + r2 + r3 == 0 ||
    r4 + r5 + r6 == 0 ||
    r7 + r8 + r9 == 0 ||
    r10 + r11 + r12 == 0 ||
    r13 + r14 + r15 == 0
  ) {
    alert("Tu dois choisir la reponse dans chaque cas");
  } else {
    if (!r2) {
      document.getElementById("Faux1").style.color = "red";
      document.getElementById("Faux1").innerHTML = "Faux !";
    } else {
      document.getElementById("Faux1").style.color = "green";
      document.getElementById("Faux1").innerHTML = "Correct !";
      document.getElementById("check1").innerHTML = "";
      s = s + 1;
    }
    if (!r6) {
      document.getElementById("Faux2").style.color = "red";
      document.getElementById("Faux2").innerHTML = "Faux !";
    } else {
      document.getElementById("Faux2").style.color = "green";
      document.getElementById("Faux2").innerHTML = "Correct !";
      document.getElementById("check2").innerHTML = "";
      s = s + 1;
    }
    if (!r9) {
      document.getElementById("Faux3").style.color = "red";
      document.getElementById("Faux3").innerHTML = "Faux !";
    } else {
      document.getElementById("Faux3").style.color = "green";
      document.getElementById("Faux3").innerHTML = "Correct !";
      document.getElementById("check3").innerHTML = "";
      s = s + 1;
    }
    if (!r10) {
      document.getElementById("Faux4").style.color = "red";
      document.getElementById("Faux4").innerHTML = "Faux !";
    } else {
      document.getElementById("Faux4").style.color = "green";
      document.getElementById("Faux4").innerHTML = "Correct !";
      document.getElementById("check4").innerHTML = "";
      s = s + 1;
    }
    if (!r15) {
      document.getElementById("Faux5").style.color = "red";
      document.getElementById("Faux5").innerHTML = "Faux !";
    } else {
      document.getElementById("Faux5").style.color = "green";
      document.getElementById("Faux5").innerHTML = "Correct !";
      document.getElementById("check5").innerHTML = "";
      s = s + 1;
    }
    if (s >= 3) {
      document.getElementById("score").innerHTML =
        "Votre score est " + s + " / 5";
      document.getElementById("fin1").innerHTML = "";
      document.getElementById("reset").style.display = "none";
      document.getElementById("courr").style.display = "none";
      document.getElementById("fin2").innerHTML = "";
      document.getElementById("sumb2").style.display = "inline-block";
    } else {
      document.getElementById("score").innerHTML =
        "Votre score est " + s + " / 5";
      document.getElementById("fin1").innerHTML =
        "Tu dois avoir au moin 3 reponse correct pour acceder au chapitre suivant !";
      document.getElementById("reset").style.display = "inline-block";
      document.getElementById("courr").style.display = "inline-block";
      document.getElementById("fin2").innerHTML =
        "Ou si tu veux lirer encore le cour ====> ";
    }
  }
}
function reset() {
  document.getElementById("Faux1").innerHTML = "";
  document.getElementById("Faux2").innerHTML = "";
  document.getElementById("Faux3").innerHTML = "";
  document.getElementById("Faux4").innerHTML = "";
  document.getElementById("Faux5").innerHTML = "";
  document.getElementById("check1").innerHTML = "";
  document.getElementById("check2").innerHTML = "";
  document.getElementById("check3").innerHTML = "";
  document.getElementById("check4").innerHTML = "";
  document.getElementById("check5").innerHTML = "";
  document.getElementById("r1").checked = false;
  document.getElementById("r2").checked = false;
  document.getElementById("r3").checked = false;
  document.getElementById("r4").checked = false;
  document.getElementById("r5").checked = false;
  document.getElementById("r6").checked = false;
  document.getElementById("r7").checked = false;
  document.getElementById("r8").checked = false;
  document.getElementById("r9").checked = false;
  document.getElementById("r10").checked = false;
  document.getElementById("r11").checked = false;
  document.getElementById("r12").checked = false;
  document.getElementById("r13").checked = false;
  document.getElementById("r14").checked = false;
  document.getElementById("r15").checked = false;
  document.getElementById("fin1").innerHTML = "";
  document.getElementById("reset").style.display = "none";
  document.getElementById("fin2").innerHTML = "";
  document.getElementById("courr").style.display = "none";
  document.getElementById("score").innerHTML = "";
}
