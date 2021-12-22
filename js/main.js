function controlPanel(){

    var myDiv = document.getElementById("demo")

    var w = document.getElementById("w").value
    var wSelection = document.getElementById("wSelection").value

    var h = document.getElementById("h").value
    var hSelection = document.getElementById("hSelection").value

    var bg = document.getElementById("bg").value
    var bradius = document.getElementById("br").value
    var brSelection = document.getElementById("brSelection").value
   
  
    myDiv.style.width = w + wSelection
    myDiv.style.height = h + hSelection
    myDiv.style.background = bg
    myDiv.style.borderRadius = bradius + brSelection

}