function Call_Loop() { /** While loop */
    var digit = "";
    var X = 1;
    while (X < 11) {
        digit += "</br>" + X;
        X++;


    }
    document.getElementById("Loop").innerHTML = digit;


}

var text = "Hello World!"; /** text lenght*/
var length = text.length;

document.getElementById("strlenght").innerHTML = length;

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; /** For loop */
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";

    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { /**Array function */
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("array").innerHTML = "In this picure , the cat is " +
        Cat_Picture[2] + ".<br>";

    var img = document.createElement("img"); /** Show image after function is called  */
    img.src = "./images/cat.jpg";
    var src = document.getElementById("array");
    src.appendChild(img);
}

function constant_function() { /**Constant function */
    const Musical_Instrument = { type: "guitar", brand: "Fender", color: "black" };
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}


function let_function() {  /**let function */
    var X = 82;
    document.write("<br>" + X);
    {
        let X = 33;
        document.write("<br>" + X);


    }

    document.write("<br>" + X);
}


// Call a function and save the return value in x:
function return_function() {
    var x = myFunction(4, 3);
    document.getElementById("idy").innerHTML = x;

    function myFunction(a, b) {
        // Return the product of a and b
        return a * b;
    }
}

let car = {
    make: "Dodge ",    /**return statement */
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function () {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();


//break statement
function break_function() {
    let text2 = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) { break; }
        document.getElementById("break").innerHTML = text2 += "The number is " + i + "<br>";
    }

}
// continue  statement
function continue_function() {
    let text2 = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        document.getElementById("continue").innerHTML = text2 += "The number is " + i + "<br>";
    }

}

