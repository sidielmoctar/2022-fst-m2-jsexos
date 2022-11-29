const etudiants = [
  {
    nom: "Ali",
    prenom: "sidi",
    note: 17,
  },
  {
    nom: "Med",
    prenom: "Ahmed",
    note: 18,
  },
  {
    nom: "Ibrahim",
    prenom: "Moctar",
    note: 16,
  },
];

function sortArr(arr, key, desc = false) {
  return arr.sort((a, b) => {
    if (desc) {
      return b[key] - a[key];
    } else {
      return a[key] - b[key];
    }
  });
}

console.log(sortArr(etudiants, "note", true));
