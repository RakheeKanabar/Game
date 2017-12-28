function Middlepad(x,y)
{

    //initialisation code will go here

    //create private varables for the x and y coordinates
    //var x = 450,
    //    y = 250;
    RedWindow = 1,


    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
   Middlepad.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);

        //draw evil ball 
        context.beginPath();
        context.fillStyle = "#ffffff";
        context.moveTo(-150, -10);
        context.lineTo(150, -10);
        context.lineTo(150, 10);
        context.lineTo(-150, 10);
        context.lineTo(-150, -10);


        context.fill();
        context.stroke();
        //close the path
        context.closePath();


        DrawWindows(context);
        //restore the state of the context to what it was before our drawing
        context.restore();

   }


   function DrawWindows(context) {
       //var for the offset of the window to be drawn
       var XOffset = -100,
           //var for loop counter to indicate which window we are drawing
           WindowNo = 1,
           //var to store the colour to use
           Colour = "";
       //loop through each window
       while (WindowNo != 6) {
           //if the red window is being drawn then set the colour to red
           if (WindowNo == RedWindow) {
               //set colour to red
               Colour = "#ff0000";
           }
           else {
               //set colour to white
               Colour = "#ffffff";
           }
           //draw the window
           Window(context, XOffset, -0, Colour);
           //point at the next window
           WindowNo++;
           //work out the position of the next window
           XOffset = XOffset + 50;
       }
       //chage the red window to the next one
       RedWindow = RedWindow + .25;
       //if the red window is 6 thats too many
       if (RedWindow == 6) {
           //set it back to 1
           RedWindow = 1;
       }
   }

   function Window(context, xposn, yposn, colour) {
       context.beginPath();
       context.fillStyle = colour;
       //x, y, radius, start_angle, end_angle, anti-clockwise
       context.arc(xposn, yposn, 3, 0, (Math.PI * 2));
       context.fill();
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
           return y -10;
       }
   }
   )

    //create a public property called Bottom
   Object.defineProperty(this, 'Bottom',
   {
       //getter
       get: function () {
           //return the y posn plus the height
           return y + 10;
       }
   }
   )

    //create a public property called Left
   Object.defineProperty(this, 'Left',
   {
       //getter
       get: function () {
           //return the x posn less the width
           return x - 150;
       }
   }
   )

    //create a public property called Right
   Object.defineProperty(this, 'Right',
   {
       //getter
       get: function () {
           //return the x posn plus the width
           return x + 150;
       }
   }
   )
   
}





























