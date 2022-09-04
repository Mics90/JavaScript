function functionx() { /* --x + y getelementbyid  function--*/
var x = 5;
var y = 2;
var z = x + y;
document.getElementById("math").innerHTML = "5 + 2 =" + z;
} 

function functiony() {/* -- Substraction getelementbyid function--*/
    var Substraction  = 15 - 7;

    document.getElementById("math2").innerHTML = "15 - 7 =" + Substraction;
    } 

function functionz() {/* -- multiply getelementbyid  function--*/
    var simple_Math = 6 * 8;
    document.getElementById("math3").innerHTML = "6 * 8 =" + simple_Math;
}

function functiona() {/* -- divide getelementbyid  function--*/
    var simple_Math = 48 / 6;
    document.getElementById("math4").innerHTML = "48 / 6 =" + simple_Math;
}

function functionb() {/* --getelementbyid math function--*/
    var more_Math = (1 +2) * 10 / 2 - 5;
    document.getElementById("math5").innerHTML = "(1 +2) * 10 / 2 - 5 =" + more_Math;
}

function functionc() {/* --getelementbyid math function--*/
    var more_Math2 = 25 % 6;
    document.getElementById("math6").innerHTML = "When you divide 25 by 6 you have a reminder of:" + more_Math2;
}

function functiond() {/* --getelementbyid math function--*/
    var x = 10;
    document.getElementById("math7").innerHTML = -x;
}

function functione() {/* --creates window.alert X++ function--*/
    var XY = 5;
    XY++;
    window.alert(XY);
}

function functionf() {/* --creates window.alert X-- function--*/
    var XZ = 5;
    XZ--;
    window.alert(XZ);
}

function functiong() {/* --creates window.alert random number function--*/
    window.alert(Math.random() * 100);
}

function functionh() {/* --creates window.alert PI function--*/
   window.alert(Math.PI);
}

