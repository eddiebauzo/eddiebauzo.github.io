function draw() 
  {
      var canvas = document.getElementById("F:\Tech Foundry\20161002_112822-1.png");
      if (canvas.getContext)
      {
        var context = canvas.getContext("2d");

        context.fillStyle = "rgb(256,0,0)";
        context.fillRect (15, 10, 55, 50);
        
        context.fillStyle = "rgba(0, 0, 200, 0.6)";
        context.fillRect (35, 30, 55, 50);
      }
  }
 if (browser=="MSIE") {alert("You are using MSIE")}
else {if (browser=="Netscape") {alert("You are using Netscape")}
else {alert("You are using an unknown browser")};};
