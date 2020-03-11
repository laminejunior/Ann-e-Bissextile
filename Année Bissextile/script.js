document.getElementById('submit').addEventListener('click', isLeapYear);

/* Meilleur solution */
function isLeapYear() {
    var year = document.getElementById('set_year').value;
    var x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    
    if (x === true) {
        document.getElementById('answer').textContent = "Année bissextile";
    } else {
        document.getElementById('answer').textContent = "Année non bissextile";
    }
}

