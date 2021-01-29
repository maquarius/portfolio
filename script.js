// changes the role and img
const rolesArray = [
  { role: "a Front-End developer", img: "images/frontendSquare.jpg" },
  { role: "a dwarf shadow priest", img: "images/MaffepriestSquare.jpg" },
  { role: "a Nederlander", img: "images/koningsdagSquare.jpg" },
  { role: "a database dabbler", img: "images/databasesquare.jpg" },
  { role: "a Back-end novice", img: "images/backendSquare.png" },
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
