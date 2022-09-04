function functiona() { /* dictioary function  */
    var car = {
        Model:"BMW",
        Color:"Black",
        Year:1992,
        Type:"Sedan",
        Milage:100909,


    };
    delete car.Model; /* deletes variable  */
    document.getElementById("Dictionary").innerHTML = car.Model; /* find element in html and returns a result  */
    
}

function functionb() { /* dictioary function  */
    var car = {
        Model:"BMW",
        Color:"Black",
        Year:1992,
        Type:"Sedan",
        Milage:100909,


    };
    delete car.Model; /* deletes variable  */
    document.getElementById("Dictionary2").innerHTML = car.Color;/* find element in html and returns a result  */
}