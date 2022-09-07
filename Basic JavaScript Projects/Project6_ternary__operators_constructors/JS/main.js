function Ride_Function() { /* names function  */
    var Height, Can_ride;   /** sets variables */
    Height = document.getElementById("Height").value ; /** gets element value from html */
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; /** creates Ternary Operator */
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; /** Sends output*/
}

function Vote_Function() {                                                              /**All the same as previous function */
    var Age, Can_vote;
    Age = document.getElementById("Age").value ;
    Can_vote = (Age < 18) ? "You are not old enough ":"You are old enough ";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) { /**makes function with variables */
    this.Vehicle_Make = Make; /**Sets variables that function owns */
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;

}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); /**Creates properties for object */
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "Red");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { /**Function  */
    document.getElementById("Keywords_and_Constructors").innerHTML =          /**Output from myfunction */
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}


    function person(Height, Weight, Age) { /**makes function with variables */
    this.person_Height = Height; /**Sets variables that function owns */
    this.person_Weight = Weight;
    this.person_Age = Age;
}

var Jack = new person("1.80m", "80kg", 22); /**Creates properties for object */

function functiona() { /**Function  */
    document.getElementById("This_and_New").innerHTML =          /**Output from myfunction */
    "Jack is  " + Jack.person_Height + " tall , his weight is " + Jack.person_Weight + 
    " and he is " + Jack.person_Age + " years old";

}

function person(Height, Weight, Age) { /**makes function with variables */
this.person_Height = Height; /**Sets variables that function owns */
this.person_Weight = Weight;
this.person_Age = Age;
}

var Jack = new person("1.80m", "80kg", 22); /**Reserved var "False"  test */

function functionb() { /**Function  */
document.getElementById("Reserved").innerHTML =          /**Output from myfunction */
"This challange broke all functions in this file," + 
" for 10 mins i coudnt find the reason why everything is broken :D ";

}

function functionc() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 99;
        function Plus_one() {
            Starting_point +=1;
        }
        Plus_one() ;
        return Starting_point;
    }
}