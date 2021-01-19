// event listeners for buttons
const allPics = document.getElementById("all");
allPics.addEventListener("click", showAll);

const airForces = document.getElementById("airforce");
airForces.addEventListener("click", showAirForces);

const airMaxes = document.getElementById("airmax");
airMaxes.addEventListener("click", showAirMaxes);

const zxFlux = document.getElementById("zxflux");
zxFlux.addEventListener("click", showFluxes);

// Reusable functiions
hideAllDivs = function () {
  const hiddenDivs = document.getElementsByClassName("trainer");
  for (let i = 0; i < hiddenDivs.length; i++) {
    hiddenDivs[i].style.display = "none";
  }
};

showAllDivs = function (e) {
  const shownDivs = document.getElementsByClassName("trainer");
  for (let i = 0; i < shownDivs.length; i++) {
    shownDivs[i].style.display = "inline";
  }
  e.preventDefault();
};

// Button Functions
function showAll(e) {
  showAllDivs();
  e.preventDefault();
}

function showAirForces(e) {
  hideAllDivs();
  const shownDivs = document.getElementsByClassName("af-1");
  for (let i = 0; i < shownDivs.length; i++) {
    shownDivs[i].style.display = "inline";
  }
  e.preventDefault();
}

function showAirMaxes(e) {
  hideAllDivs();
  const shownDivs = document.getElementsByClassName("am90");
  for (let i = 0; i < shownDivs.length; i++) {
    shownDivs[i].style.display = "inline";
  }
  e.preventDefault();
}

function showFluxes(e) {
  hideAllDivs();
  const shownDivs = document.getElementsByClassName("zx-f");
  for (let i = 0; i < shownDivs.length; i++) {
    shownDivs[i].style.display = "inline";
  }
  e.preventDefault();
}
