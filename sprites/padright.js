function PadRight(x,y) {

    //initialisation code will go here

    //create private varables for the x and y coordinates
    //var x = 430,
    //    y = 500



    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    PadRight.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);
        //start the line (path)
        //left landing globe
        context.beginPath();
        context.fillStyle = "#ffffff";
        context.moveTo(100, 50);
        context.lineTo(100, -25);
        context.lineTo(125, -25);
        context.lineTo(125, 50);
        //close the path
        context.closePath();
        context.fill();
        context.stroke();



       
        //restore the state of the context to what it was before our drawing
        context.restore();

    }

    //create a public property called X (note caps!)
    Object.defineProperty(this, 'X',
    {
        //getter
        get: function () {
            //return the value of x (lower case)
            return x;
        },
        //setter
        set: function (value) {
            //ste the value of x (lower case)
            x = value;
        }
    }
    )

    //create a public property called Y (note caps!)
    Object.defineProperty(this, 'Y',
    {
        //getter
        get: function () {
            //return the value of y (lower case)
            return y;
        },
        //setter
        set: function (value) {
            //ste the value of y (lower case)
            y = value;
        }
    }
    )

    //create a public property called Top
    Object.defineProperty(this, 'Top',
    {
        //getter
        get: function () {
            //return the y posn less the height
            return y - 25;
        }
    }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
    {
        //getter
        get: function () {
            //return the y posn plus the height
            return y + 50;
        }
    }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
    {
        //getter
        get: function () {
            //return the x posn less the width
            return x + 100;
        }
    }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
    {
        //getter
        get: function () {
            //return the x posn plus the width
            return x + 125;
        }
    }
    )

}