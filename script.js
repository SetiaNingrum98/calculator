function masukan(value) {
    hapusnol()
    document.getElementById("output").innerHTML += value;
}

function perc() {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}

function hapusnol() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("output").innerHTML = value;
    }}

function solve() {
    hapusnol()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
}

function hapus() {
    document.getElementById("output").innerHTML = "0";
}
