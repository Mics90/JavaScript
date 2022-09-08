var A = 20 /**Variable */
function functiona() {/**function */
    document.getElementById("idA").innerHTML = (20 + A + "</br>");/**Output */

}
function functionb() {
    document.getElementById("idB").innerHTML = (A + 100);


}


function functionc() {
    var B = 20
    document.getElementById("idC").innerHTML = (20 + B + "</br>");

}
function functiond() {
    console.log(B + 100);/**console log output */



}
functiond()

function get_Date() {
    if (new Date() .getHours() < 18) {
        document.getElementById("time").innerHTML = "How are You today?";
    }
}

function age() { /* names function  */
    var age;   /** sets variables */
    age = document.getElementById("age").value ; /** gets element value from html */
    if (age >= 18) {
        Reply = "You are allowed to enter";
       
      } else if (age < 18) {
        Reply = "You are not allowed to enter";
       
      }
       else {
        Reply = "Enter a valid Number";
       }
       document.getElementById("age2").innerHTML = Reply; /**Output */
}

