const commandes = [
    {
        "codeCommande": "00001",
        "dt": "01/02/2022",
        "mnt": 2000
    },
    {
        "codeCommande": "00001",
        "dt": "01/03/2022",
        "mnt": 3000
    },
    {
        "codeCommande": "00001",
        "dt": "01/04/2022",
        "mnt": 3500
    }
];

function sum_array_by_key(array, key) {
    return array.reduce(function (cnt, o) {
        let curVal = o[key] ? parseFloat(o[key]) : 0;
        return cnt + curVal;
    }, 0);
}

console.log(sum_array_by_key(commandes, 'mnt'));