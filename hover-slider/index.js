var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function(e) {
       cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
   })

document.querySelector(".slider input").addEventListener("input", 
   function() {
     document.querySelector(".original-image").style.width = this.value + "%";
   });