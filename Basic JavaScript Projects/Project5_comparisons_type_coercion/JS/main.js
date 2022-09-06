function functiona() {/* --creates window.alert random number function--*/
    window.alert(typeof "Word");
}

function functionb() {/* --creates window.alert random number function--*/
    window.alert(typeof 4 );
}

function functionc() {/* --creates NaN function--*/
    document.getElementById("test").innerHTML = 0/0 ;
}

function functiond() {/* --creates "true" function--*/
    document.getElementById("test1").innerHTML = isNaN('This is a string') ;
}

function functione() {/* --creates "False" function--*/
    document.getElementById("test2").innerHTML = isNaN('007') ;

}

function functionf() {/* --creates infinity number function--*/
    document.getElementById("test3").innerHTML = (3E310) ;

}

function functiong() {/* --creates negative infinity number function--*/
    document.getElementById("test4").innerHTML = (-3E310) ;

}

function functionh() {/* --creates Boolean Logic function--*/
    document.getElementById("test5").innerHTML = (10>2) ;

}
function functioni() {/* --creates Type Coercion function--*/
    document.getElementById("test6").innerHTML = (10<2) ;

}


console.log(2 + 2);


function functionj() {/* --creates Type Coercion function--*/
    document.getElementById("test7").innerHTML = ("10" + 5) ;

}

console.log(6>7) ;

function functionk() {/* --creates comparison function--*/
    document.getElementById("test8").innerHTML = (10 == 10) ;

}

function functionl() {/* --creates comparison function--*/
    document.getElementById("test9").innerHTML = (3 == 11) ;

}

function functionm() {/* --creates Triple Equal Signs function--*/
    var A = 16
    var B = 16
    document.getElementById("test10").innerHTML = (A === B) ;

}

function functionn() {/* --creates Triple Equal Signs function--*/
    var C = 16
    var D = "dog"
    document.getElementById("test11").innerHTML = (C === D) ;

}

function functiono() {/* --creates Triple Equal Signs function--*/
    var E = 16
    var F = "sixteen"
    document.getElementById("test12").innerHTML = (E === F) ;

}

function functionp() {/* --creates Triple Equal Signs function--*/
    var G = 16
    var H = 14
    document.getElementById("test13").innerHTML = (G === H) ;

}

function functionq() {/* --creates Logical Operators function--*/
    document.getElementById("test14").innerHTML = (7 > 5 && 3 < 8) ;

}

function functionr() {/* --creates Logical Operators function--*/
    document.getElementById("test15").innerHTML = (6 > 10 && 7 > 5 ) ;

}

function functions() {/* --creates Logical Operators function--*/
    document.getElementById("test16").innerHTML = (7 > 5 || 3 > 8) ;

}

function functiont() {/* --creates Logical Operators function--*/
    document.getElementById("test17").innerHTML = (6 > 10 || 7 < 5 ) ;

}

function functionu() {/* --creates !NOT function--*/
    document.getElementById("test18").innerHTML = !(5 > 10) ;

}

function functionv() {/* --creates !NOT function--*/
    document.getElementById("test19").innerHTML = !(20 > 10) ;

}




