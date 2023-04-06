$(document).ready(function() {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
  $(document).click(function(event) {
    if (!$(event.target).hasClass('navbar-toggler') && !$(event.target).hasClass('navbar-nav')) {
      $(".navbar-collapse").collapse('hide');
    }
  });
});
$(".about-us").hide();
$(document).ready(function() {
  $('#game').click(function() {
    $(".game").show();
    $(".about-us").hide();
  });
  
  $('#aboutus').click(function() {
    $(".about-us").show();
    $(".game").hide();
  });
});

const gifImg = document.getElementById('gif-img');
gifImg.addEventListener('load', () => {
  setInterval(() => {
    gifImg.src = gifImg.src;
  }, 4000);
});
var cabangPrice = 1000000;
var autoClickerCabang = 0;
var points = 0;
var autoClickerCount = 0;
var autoClickerPrice = 10;
var autoClickerInterval = null;
var autoClickerRisol = 0;
var autoClickertahuisi = 0;
var autoClickercakwe = 0;
var risolPrice = 10;
var tahuIsiPrice = 100;
var cakwePrice = 1000;
document.getElementById("click-button").addEventListener("click", function () {
  points++;
  updatePointsDisplay();
});

document
.getElementById("buy-auto-clicker-button")
.addEventListener("click", function () {
  if (points >= autoClickerPrice) {
    points -= autoClickerPrice;
    autoClickerCount++;
    autoClickerPrice = Math.floor(autoClickerPrice * 1.1);
    updatePointsDisplay();
    updateAutoClickerDisplay();
    startAutoClickers();
  }
  else {
    alert("Kamu miskin! Uang kamu tidak cukup untuk membeli Auto Clicker!");
  }
});

document
.getElementById("buy-risol-button")
.addEventListener("click", function () {
  if (points >= risolPrice) {
    points -= risolPrice;
    autoClickerRisol++;
    risolPrice += 10;
    startAutoClickersRisol();
    updatePointsDisplay();
    updateRisolDisplay();
  }
  else {
    alert("Kamu miskin! Uang kamu tidak cukup untuk menjual dagangan Risol!");
  }
});

document
.getElementById("buy-tahu-isi-button")
.addEventListener("click", function () {
  if (points >= tahuIsiPrice) {
    points -= tahuIsiPrice;
    autoClickertahuisi++;
    tahuIsiPrice += 100;
    updatePointsDisplay();
    startAutoClickersTahuIsi();
    updateTahuIsiDisplay();
  }
  else {
    alert("Kamu miskin! Uang kamu tidak cukup untuk menjual dagangan Tahu Isi!");
  }
});

document
.getElementById("buy-cakwe-button")
.addEventListener("click", function () {
  if (points >= cakwePrice) {
    points -= cakwePrice
    autoClickercakwe++;
    cakwePrice += 1000;
    updatePointsDisplay();
    startAutoClickerscakwe();
    updateCakweDisplay();
  }
  else {
    alert("Kamu miskin! Uang kamu tidak cukup untuk menjual dagangan Cakwe!");
  }
});
document
.getElementById("buy-cabang-button")
.addEventListener("click", function () {
  if (points >= cabangPrice) {
    points -= cabangPrice;
    autoClickerCabang++;
    cabangPrice += 1000000;
    startAutoClickersCabang();
    updatePointsDisplay();
    updateCabangDisplay();
  }
  else {
    alert("Kamu miskin! Uang kamu tidak cukup untuk buka Cabang!");
  }
});

function updatePointsDisplay() {
  document.getElementById("points-display").innerHTML = "Rp " + points.toLocaleString("id-ID");
}

function updateAutoClickerDisplay() {
  document.getElementById("auto-clicker-count-display").innerHTML =
  autoClickerCount;
  document.getElementById("auto-clicker-price-display").innerHTML =
  "Rp " + autoClickerPrice.toLocaleString("id-ID");
}

function updateRisolDisplay() {
  document.getElementById("risol-count-display").innerHTML =
  "Level " + autoClickerRisol;
  document.getElementById("risol-price-display").innerHTML = "Rp " + risolPrice.toLocaleString("id-ID");
}

function updateTahuIsiDisplay() {
  document.getElementById("tahu-isi-count-display").innerHTML =
  "Level " + autoClickertahuisi;
  document.getElementById("tahu-isi-price-display").innerHTML =
  "Rp " + tahuIsiPrice.toLocaleString("id-ID");
}

function updateCakweDisplay() {
  document.getElementById("cakwe-count-display").innerHTML = "Level " + autoClickercakwe;
  document.getElementById("cakwe-price-display").innerHTML = "Rp " + cakwePrice.toLocaleString("id-ID");
}
function updateCabangDisplay() {
  document.getElementById("cabang-count-display").innerHTML =
  "Cabang " + autoClickerCabang;
  document.getElementById("cabang-price-display").innerHTML = "Rp " + cabangPrice.toLocaleString("id-ID");
}
function startAutoClickers() {
  autoClickerInterval = setInterval(function () {
    points += autoClickerCount;
    updatePointsDisplay();
  }, 1000);
}

function stopAutoClickers() {
  clearInterval(autoClickerInterval);
}
function startAutoClickersRisol() {
  autoClickerInterval = setInterval(function () {
    points += 1;
    updatePointsDisplay();
  }, 1000);
}
function stopAutoClickers() {
  clearInterval(autoClickerInterval);
}
function startAutoClickersTahuIsi() {
  autoClickerInterval = setInterval(function () {
    points += 10;
    updatePointsDisplay();
  }, 1000);
}
function startAutoClickerscakwe() {
  autoClickerInterval = setInterval(function () {
    points += 100;
    updatePointsDisplay();
  }, 1000);
}
function startAutoClickersCabang() {
  autoClickerInterval = setInterval(function () {
    points += 10000;
    updatePointsDisplay();
  }, 1000);
}
document.addEventListener("click", musicPlay);
function musicPlay() {
  document.getElementById("myAudio").play();
  document.removeEventListener("click", musicPlay);
}
var audio = document.getElementById("myAudio");
audio.volume = 0.5;
var muteButton = document.getElementById("muteButton");
muteButton.addEventListener("click", function () {
  if (audio.muted) {
    audio.muted = false;
    muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    audio.muted = true;
    muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
});
