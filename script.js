
var boxes = document.getElementsByClassName("collapsible");
var contents = document.getElementsByClassName("content");
var radios = document.querySelectorAll("input[type='radio']");
var collapsibles = document.getElementsByClassName("box");

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function() {
        for (var j = 0; j < boxes.length; j++) {
            if (boxes[j] !== this) {
                boxes[j].classList.remove("active");
                contents[j].style.display = "none";
                radios[j].checked = false;
                collapsibles[j].classList.remove("box-active");
               
            }
        }
        this.classList.toggle("active");
        var currContent = this.nextElementSibling;
        var currRadio = this.querySelector("input[type='radio']");
        var currCollapsible = this.parentElement.parentElement;
        if (currContent.style.display === "block") {
            currContent.style.display = "none";
            currRadio.checked = false;
            currCollapsible.classList.remove("box-active");
        } else {
            currContent.style.display = "block";
            currRadio.checked = true;
            currCollapsible.classList.add("box-active");
        }
        
    });
}

