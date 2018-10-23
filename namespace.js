var JOAONABOSNE = {
    init: function () {
        var e = document.createElement("div");
        e.className = "box";
        e.textContent = "joaonabosne";
        document.getElementById("boxes").appendChild(e);

        e.addEventListener("click", mouseClick);
        
        e.addEventListener("mouseover", mouseOver);
        
        e.addEventListener("mouseout", mouseOut);
    }
}

function mouseClick() {
    this.style.borderColor = "grey";
    this.style.backgroundColor = "black";
    this.style.color = "white";
}

function mouseOver(e) {
    e.target.classList.toggle("highlight");
}

function mouseOut(e) {
    e.target.classList.toggle("highlight");
    e.target.removeAttribute('style');
}
