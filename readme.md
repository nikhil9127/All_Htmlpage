# devloped by Nikhil Sharma 

# follow on github  https://github.com/nikhil9127/
# youtube channel   https://Youtube.com/@codergyan/
# instagram         https://instagram.com/Official___nikhil___1998/

# create three file 
.Home.html
.Home.css
.onlight.js
# note. According to my convenience I have created three folders and insert the files into the folders


# css file 
<!-- fixed pri settings -->
{
    padding: 0;
    margin: 0;
    font-family: 'poppins',sans-serif;
    box-sizing: border-box;
}

<!-- Hero is the class "main" class Entire code -->
.Hero{
  background: #1d2026;      //background //
  min-height: 100vh;       //main height of the background //
  width: 100%;   
  color: #fff;
  position: relative;
  
}

<!-- Then we create a NAV class -->
nav{
    display: flex;              //flex all the item// 
    align-items: center;       // and align all the links in to center //
    padding: 20px 8%;          // give some padding //
}

nav .menu-img{
    width: 25px;
    margin-right: 20px;
    cursor: pointer;
}

nav .logo{
    width: 160px;
    cursor: pointer;
}

nav ul{
    flex: 1;
    text-align: right;
}

nav ul li{
    display: inline-block;
    list-style: none;
    margin: 0 20px;
     
}

nav ul li a{
    text-decoration: none;
    color: #fff;
    transition: 03s ease;
}
nav ul li a:hover{
    color: #00986f;
}

button{
    background: #efefef;
    height: 30px;
    width: 60px;
    border-radius: 20px;
    border: 0;
    outline: 0;
    cursor: pointer;
    transition:background 0.5s;
}

button span{
    display: block;
    background: #999;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    margin-left: 2px;
    transition:background 0.5s, margin-left 0.5s;
}

.lamp-container{
      position: absolute;
      top: -20px;
      left: 22%;
      width:200px ;
}
.lamp{
    width: 100%;
}

.light{
    position: absolute;
    top: 97%;
    left: 50%;
    transform: translateX(-50%);
    width: 700px;
    margin-left: -10px;
    opacity: 0;
    transition: opacity 0.5s ;
}

.text-container{
    max-width: 600px;
    margin-top: 7%;
    margin-left: 50%;
}

.text-container h1{
    font-size: 80px;
    font-weight: 400;

}
.text-container a{
    text-decoration: none;
    background: #00986f;
    padding: 14px 40px;
    display: inline-block;
    color: #fff;
    font-size: 18px;
    margin-top: 30px;
    border-radius: 30px;


}

.control{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 150px;
}
.control .line{
    width: 250px;
    height: 4px;
    background: #fff;
    margin: 0 20px;
    border-radius: 2px;
}
.control .line span{
    width: 50%;
    height: 8px;
    margin-top: -2px;
    border-radius: 4px;
    background: #00986f;
    display: block;
}
# Active class is pretty default in CSS so don't be confused active
.active{
    background: green;
}

.active span{
    background: #fff;
    margin-left: 31px;

}
# Similarly on is the  default class and basically use toggle function like click on click button etc 
.on{
    opacity: 1;
}


# Similarly we creating class and give some property according to my convenience as we write your convenience your class name anything.


# Html file 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <link rel="stylesheet" href="./css/Home.css">
</head>
<body>
    <div class="Hero">
      <nav>
        <img src="./Image/menu.png"  class="menu-img">
        <img src="./Image/logo.png"  class="logo">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button type="button" onclick="toggleBtn()" id="btn"><span></span></button>
      </nav>

      <div class="lamp-container">
        <img src="./Image/lamp.png" class="lamp">
        <img src="./Image/light.png" class="light" id="light">
      </div>


    <!-- / And give text container classto style textparagraphendanything into the text container style calling the text container class in CSS so we write a class name text container Even give  a text container class   Understandable code// -->


      <div class="text-container">   
        <h1>The Power <br>of Illumination:</h1>
        <p>Light is one of the most essential elements of life.
           Light provides us with the ability to see, reworks display.
           Our lives are filled with the power and beauty of light, and it is one of the most remarkable 
           phenomena in the natural world.</p>
           <a href="">Check All Collections</a>

           <div class="control">
            <p>04</p>
            <div class="line"><span></span></div>
            <p>05</p>

           </div>
      </div>
       
    </div>
    <script src="./js/onlight.js"></script> //Integrate the JS file//
</body>

</html>


# js file  code 


# First we create a variable like light And  browser give some property like get element by ID this property exactly work on   give ID name like my ID name is light in my HTML code so we are calling a light ID name so first line exactly defined by ID light

var light= document.getElementById("light");

# Function toggle buttonit's a function in this function Define button classlist toggle activeactor is a CSS default class This active class performing by the total button send function we creating toggle button and button classlist toggle active is it mean We perform active button on this Page toggle  
# Light.classlist.toggle(on)This optionper forming by thelight is on basically we toggle on the on button


function toggleBtn() {
 btn.classList.toggle("active");
 light.classList.toggle("on")

 
}