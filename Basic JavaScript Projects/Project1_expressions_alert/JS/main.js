window.alert("Hello World!");//pop up with text


         var M = "xyz" ; //created a variable called M
        var M = M.fontcolor("Green"); //assigned variable the color green
        document.write(M)//Output
   
    
        var D = "one" ;//created a variable called D
        var L = "two" ;//created a variable called L
        document.write (D+L);//Output

        var I = "one, two , three";//created a variable called I
        document.write(I);//Output

        var Z= "one" + "two";//created a variable called Z
        document.write(Z)//Output

        document.write(422+1560);//expression

        function My_First_Function() {//function 
            var str = "This text is in green color";//function text
            var result = str.fontcolor("green");//text color
            document.getElementById("Green_Text").innerHTML = result;//finds element by id in html
        }