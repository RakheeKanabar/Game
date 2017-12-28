function Square() {

    //initialisation code will go here

    //create private varables for the x and y coordinates
    var x = 200,
        y = 100,
        vx = 0,
    vy = 0,
    GlobeYellow = 1,
     Boom = false,
     Goal = false;



    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    Square.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);
        //draw football 
        context.beginPath();
        context.fillStyle = "#f4eb33";
        //x, y, radius, start_angle, end_angle, anti-clockwise
        //start the line (path)

        //left landing globe
        context.beginPath();
        context.fillStyle = "#ffffff";
        context.moveTo(-20, -20);
        context.lineTo(20, -20);
        context.lineTo(20, 20);
        context.lineTo(-20, 20);
        context.lineTo(-20, -20);
        context.closePath();
        //close the path

        context.fill();
        context.stroke();

        context.closePath();
        DrawGlobes(context);

        //if the ship has blown up
        if (Boom == true) {
            //create a new instance of an image
            var img = new Image();
            //get the bitmap source
            img.src = "Gotcha.png";
            //draw the image on the context
            context.drawImage(img, -150, -60);
        }

        //if the ship has blown up
        if (Goal == true) {
            //create a new instance of an image
            var img = new Image();
            //get the bitmap source
            img.src = "GOAL - Copy.png";
            //draw the image on the context
            context.drawImage(img, -150, -60);
        }
    
        context.restore();
    }

    function DrawGlobes(context) {
        //var to store the colour of the globe
        var colour = "";
        //if the value of GlobeYellow is less than 50
        if (GlobeYellow < 50) {
            //set the colour to yellow
            colour = "#ffffff";
        }
        else {
            //otherwise set it to red
            colour = "#000000";
        }
        //middle landing globe
        Globe(context, -15, 0, colour);
        //right landing globe
        //Globe(context, 140, 0, colour);
        ////left landing globe
        //Globe(context, 90, 0, colour);
        //Globe(context, 90, 30, colour);
        //Globe(context, 140, 30, colour);

        //increase the value of globe yellow (The larger the increment the faster the flashing effect)
        GlobeYellow += 1;
        //if globe yellow is more than 100 
        if (GlobeYellow > 100) {
            //set it back to 1
            GlobeYellow = 1;
        }
    }

    function Globe(context, xposn, yposn, colour) {
        //begin the path
        context.beginPath();
        //set the fill colour
        context.fillStyle = colour;
        //move to the position to start the globe
        context.moveTo(xposn, yposn);
        //draw the curve from that position to +30px passing toward x+13, y+20
        context.arc(xposn, yposn, 10, 0, (Math.PI * 2));
        //fill the globe
        context.fill();
        //draw the globe
        context.stroke();
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

    //create a public property called X (note caps!)
    Object.defineProperty(this, 'Y',
    {
        //getter
        get: function () {
            //return the value of x (lower case)
            return y;
        },
        //setter
        set: function (value) {
            //ste the value of x (lower case)
            y = value;
        }
    }
    )
    Square.prototype.move = function () {
        //change the x axis by the x velocity
        x += vx;
        //change the y axis by the y velocity
        y += vy;
    }
    Square.prototype.accelerate = function (Acceleration) {
        //set vx
        vx += Acceleration.AX;
        //set vy
        vy += Acceleration.AY;
    }
    //create a public property called Top
    Object.defineProperty(this, 'Top',
    {
        //getter
        get: function () {
            //return the value of y less height
            return y - 20;
        }
    }
    )
    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
    {
        //getter
        get: function () {
            //return the value of y plus height
            return y + 20;
        }
    }
    )
    //create a public property called Left
    Object.defineProperty(this, 'Left',
    {
        //getter
        get: function () {
            //return the value of x less width
            return x - 20;
        }
    }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
    {
        //getter
        get: function () {
            //return the value of x plus width
            return x + 20;
        }
    }
    )
    Square.prototype.halt = function () {
        //temp variable to store the vy
        var temp = vy;
        //kill all velocity
        vx = 0;
        vy = 0;
        //set the ship as exploding
        if (temp > .0) {
            Boom = true;
        }
    }

    Square.prototype.halt1 = function () {
        //temp variable to store the vy
        var temp = vy;
        //kill all velocity
        vx = 0;
        vy = 0;
        //set the ship as exploding
        if (temp > .0) {
           Goal = true;
        }
    }
}