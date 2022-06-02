
function f() {
    let articleDiv = document.querySelector("ol.list");
    let elem = document.createElement("li");
    let buttonclose = document.createElement("button");
    buttonclose.classList.toggle("button_close");
    let txt = document.createTextNode("✍");
    buttonclose.appendChild(txt);
    let value = document.getElementById("input").value;
    let elemText = document.createTextNode(value);
    elem.appendChild(elemText);
    elem.appendChild(buttonclose);
    articleDiv.appendChild(elem);
    document.getElementById("input").value = '';
    buttonclose.onclick = function (){
        const div = this.parentElement;
        let block = document.querySelector("ol.close_list");
        let element = document.createElement("ul");
        element.innerHTML += value ;
        txt.parentNode.removeChild(txt);
        txt = document.createTextNode("❌");
        buttonclose.value = '';
        buttonclose.appendChild(txt);
        element.appendChild(buttonclose);
        block.appendChild(element);
        div.style.display = "none";
        buttonclose.onclick = function () {
            element.parentNode.removeChild(element);
        }
    }
}

