function display() {
  document.getElementById("introduction").style.display = "none";
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
  document.getElementById("introduction").style.display = "block";
  document.getElementById("mainquiz").style.display = "none";
  document.getElementById("app").style.display = "none";
  document.getElementById("btcour").style.transform = "scale(0.9)";
  document.getElementById("btquiz").style.transform = "scale(1)";
  document.getElementById("btquiz").style.backgroundColor = "rgb(226, 209, 57)";
  document.getElementById("btcour").style.backgroundColor =
    "rgba(202, 188, 63, 0.658)";
  document.getElementById("line").style.left = "27.1%";
}
function none() {
  document.getElementById("mainquiz").style.display = "none";
  document.getElementById("app").style.display = "none";
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
function check() {
  b1 = document.getElementById("b1").value;
  b2 = document.getElementById("b2").value;
  b3 = document.getElementById("b3").value;
  b4 = document.getElementById("b4").value;
  b5 = document.getElementById("b5").value;
  b6 = document.getElementById("b6").value;
  s = 0;
  if (b1 != "chaine") {
    document.getElementById("red1").style.display = "inline-block";
  } else {
    document.getElementById("red1").style.display = "none";
    document.getElementById("v1").style.display = "inline-block";
  }
  if (b2 != "charactere") {
    document.getElementById("red2").style.display = "inline-block";
  } else {
    document.getElementById("red2").style.display = "none";
    document.getElementById("v2").style.display = "inline-block";
  }
  if (b3 != "chaine") {
    document.getElementById("red3").style.display = "inline-block";
  } else {
    document.getElementById("red3").style.display = "none";
    document.getElementById("v3").style.display = "inline-block";
  }
  if (b4 != "boolean") {
    document.getElementById("red4").style.display = "inline-block";
  } else {
    document.getElementById("red4").style.display = "none";
    document.getElementById("v4").style.display = "inline-block";
  }
  if (b5 != "entier") {
    document.getElementById("red5").style.display = "inline-block";
  } else {
    document.getElementById("red5").style.display = "none";
    document.getElementById("v5").style.display = "inline-block";
  }
  if (b6 != "reel" && b6 != "réel") {
    document.getElementById("red6").style.display = "inline-block";
  } else {
    document.getElementById("red6").style.display = "none";
    document.getElementById("v6").style.display = "inline-block";
  }
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
    if (!r1) {
      document.getElementById("Faux1").style.color = "red";
      document.getElementById("Faux1").innerHTML = "Faux !";
      document.getElementById("check1").innerHTML =
        "Attention : " + "<br>" + " A et B sont deux entier !";
    } else {
      document.getElementById("Faux1").style.color = "green";
      document.getElementById("Faux1").innerHTML = "Correct !";
      document.getElementById("check1").innerHTML = "";
      s = s + 1;
    }
    if (!r7) {
      document.getElementById("Faux2").style.color = "red";
      document.getElementById("Faux2").innerHTML = "Faux !";
      document.getElementById("check2").innerHTML =
        "Attention : " +
        "<br>" +
        "<br>" +
        " Y est une addition de deux chaine  !" +
        "<span>&#128512;</span>";
    } else {
      document.getElementById("Faux2").style.color = "green";
      document.getElementById("Faux2").innerHTML = "Correct !";
      document.getElementById("check2").innerHTML = "";
      s = s + 1;
    }
    if (!r6) {
      document.getElementById("Faux3").style.color = "red";
      document.getElementById("Faux3").innerHTML = "Faux !";
      document.getElementById("check3").innerHTML =
        "Attention : " +
        "<br>" +
        " Il ya une differance entre l entier et la chaine de charactere " +
        "<span>&#x1F440;</span>";
    } else {
      document.getElementById("Faux3").style.color = "green";
      document.getElementById("Faux3").innerHTML = "Correct !";
      document.getElementById("check3").innerHTML = "";
      s = s + 1;
    }
    if (!r12) {
      document.getElementById("Faux4").style.color = "red";
      document.getElementById("Faux4").innerHTML = "Faux !";
      document.getElementById("check4").innerHTML =
        "Attention : " +
        "<br>" +
        " le resultat de la variable ok est une comparaison ! " +
        "<span>&#x1F440;</span>";
    } else {
      document.getElementById("Faux4").style.color = "green";
      document.getElementById("Faux4").innerHTML = "Correct !";
      document.getElementById("check4").innerHTML = "";
      s = s + 1;
    }
    if (!r15) {
      document.getElementById("Faux5").style.color = "red";
      document.getElementById("Faux5").innerHTML = "Faux !";
      document.getElementById("check5").innerHTML =
        "Attention : " +
        "<br>" +
        " ici on a utilisé DIV pour faire la division ! ";
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
