// changes the role and img
const rolesArray = [
  { role: "a Front-End developer", img: "images/frontendSquare.jpg" },
  { role: "a dwarf shadow priest", img: "images/MaffepriestSquare.jpg" },
  { role: "a Nederlander", img: "images/koningsdagSquare.jpg" },
  { role: "a database dabbler", img: "images/databasesquare.jpg" },
  { role: "a Back-End novice", img: "images/backendSquare.png" },
  { role: "an Avantouinti uimari", img: "images/avantouintiSquare.jpg" },
];

const rolesId = document.getElementById("rolesMarius");
const imgId = document.getElementById("imgRolesMarius");
const rolesId2 = document.getElementById("rolesMarius2");
let rolesIndex = 0;
rolesId.innerHTML = rolesArray[rolesIndex].role;
imgId.src = rolesArray[rolesIndex].img;
5;
// add iteration button that also stops the automatic rotation
const setRole = () => {
  setInterval(function () {
    rolesId.innerHTML = rolesArray[rolesIndex].role;
    imgId.src = rolesArray[rolesIndex].img;
    imgId.alt = `Picture of ${rolesArray[rolesIndex].role}`;
    if (rolesIndex === rolesArray.length - 1) {
      rolesIndex = 0;
    } else {
      rolesIndex++;
    }
  }, 5000);
};
setRole();

const hamburgerButton = document.querySelector(".hamburger");
const hamburgerSVG = document.querySelector("#hamburgerSVG");
const closeChild = document.querySelector("#closeSVG");
const collapsible = document.querySelector(".collapsible");
const linksCollapsible = document.querySelector("#linksCollapsible");

const openMenu = () => {
  hamburgerSVG.style.display = "none";
  collapsible.style.display = "flex";
  collapsible.style.flexDirection = "column";
  collapsible.style.flexWrap = "wrap";
  collapsible.style.width = "60px";
  collapsible.style.justifyContent = "center";
  collapsible.style.alignItems = "center";
};

const closeMenu = () => {
  hamburgerSVG.style.display = "block";
  collapsible.style.display = "none";
  menuState = false;
};

hamburgerSVG.addEventListener("click", openMenu);
closeChild.addEventListener("click", closeMenu);

let winkButton = document.querySelector("#wink");
const downloadText = document.querySelector("#downloadText");
function resetText() {
  downloadText.innerHTML = "Download my CV to find out more about me ";
  let winkSpan = document.createElement("span");
  winkSpan.innerHTML = ":)";
  winkSpan.id = "wink";
  downloadText.appendChild(winkSpan);
  winkButton = document.querySelector("#wink");
  winkButton.addEventListener("click", winking);
  winkCounter = 0;
}
let winkCounter = 0;

const winking = () => {
  winkButton.innerHTML = ";)";
  winkCounter++;
  if (winkCounter == 6) {
    downloadText.innerHTML = "Please stop winking at yourself";
    setTimeout(resetText, 3000);
  } else {
    setTimeout(function () {
      winkButton.innerHTML = ":)";
    }, 400);
  }
};

winkButton.addEventListener("click", winking);
