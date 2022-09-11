function functionA() {/**Function */
    var part_1 = "I have ";/**variable */
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence ";
    var whole_sentence = part_1.concat(part_2, part_3 , part_4);
    document.getElementById("idA").innerHTML = whole_sentence; /**Output */
}

function functionB() {/**Function */
    var Sentence = "All work and no play makes Johnny a dull boy.";/**variable */
    var Section = Sentence.slice(27,33);
    document.getElementById("idB").innerHTML = Section;/**Output */
}

function functionC() {/**Function */
    var text = "Hello World";/**variable */
    var result = text.toUpperCase();
    document.getElementById("idC").innerHTML = result;/**Output */

}

function functionD() { /**Function */
    var text = "this is a search method";/**variable */
    var result =text.search("method");
    document.getElementById("idD").innerHTML = result;/**Output */

}

function functionE() {      /**Function */
    var X = 182;/**variable */
    document.getElementById("idE").innerHTML = X.toString();/**Output */

}

function functionF() {/**Function */
    var X = 18287.6668766;/**variable */
    document.getElementById("idF").innerHTML = X.toPrecision(10);/**Output */

}

function functionG() {/**Function */
    var X = 18287.6668766;/**variable */
    document.getElementById("idG").innerHTML = X.toFixed(10);/**Output */

}

function functionH() {/**Function */
    var text = "Hello!"/**variable */
    var result = text.valueOf();/**variable */
    document.getElementById("idH").innerHTML = result;/**Output */

}