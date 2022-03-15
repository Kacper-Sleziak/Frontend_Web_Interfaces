'use strict';


var button = document.getElementById("button");
var input = document.getElementById("input");
var container = document.getElementById("container");

var elements = document.getElementsByClassName("p-2 bg-primary col-xs-1 center-block text-center");

var addElement = () => {
    var text = input.value;

    if (text !== ""){
        // create new element
        const newElement = document.createElement("div");
        newElement.className = "p-2 bg-primary col-xs-1 center-block text-center";
        newElement.innerHTML = text + " ";
        newElement.style.marginBottom = "10px";

        const newSpan = document.createElement("span")
        newElement.appendChild(newSpan);
        
        // add new element to html
        container.appendChild(newElement);

        // update elements list 
        elements = document.getElementsByClassName("p-2 bg-primary col-xs-1 center-block text-center");
        
        // add listener to updated elements list
        handleTaskStatus();
    }
}

var handleTaskStatus = () =>{
    Array.from(elements).forEach(element => {
        element.addEventListener("click", function(e){
            if (element.style.textDecoration === "none"){
                element.style.textDecoration = "line-through";
                element.className = "p-2 bg-danger col-xs-1 center-block text-center";
                
                let todayDate = new Date().toISOString().slice(0, 10);
                var child = element.getElementsByTagName('span')[0];
                child.innerText = todayDate;
            }
            
            else {
                element.style.textDecoration = "none";
                element.className = "p-2 bg-primary col-xs-1 center-block text-center";
                element.getElementsByTagName('span')[0].innerText = "";

                var child = element.getElementsByTagName('span')[0];
                child.innerText = "";
            }
        });
    });
}

handleTaskStatus();
button.addEventListener("click", addElement);