// changes the role and img
const rolesArray = [
  { role: "a Front-End developer", img: "images/frontend.jpg" },
  { role: "a dwarf shadow priest", img: "images/Maffepriest.jpg" },
  { role: "a Nederlander", img: "images/koningsdag.jpg" },
  { role: "a database dabbler", img: "images/database.png" },
  { role: "a Back-end novice", img: "images/backend.png" },
  { role: "an Avantouinti uimari", img: "images/avantouinti.jpg" },
];

const rolesId = document.getElementById("rolesMarius");
const imgId = document.getElementById("imgRolesMarius");
let rolesIndex = 0;
rolesId.innerHTML = rolesArray[rolesIndex].role;
imgId.src = rolesArray[rolesIndex].img;

// add iteration button that also stops the automatic rotation
const setRole = () => {
  setInterval(function () {
    rolesId.innerHTML = rolesArray[rolesIndex].role;
    imgId.src = rolesArray[rolesIndex].img;
    if (rolesIndex === rolesArray.length - 1) {
      rolesIndex = 0;
    } else {
      rolesIndex++;
    }
  }, 5000);
};
setRole();
