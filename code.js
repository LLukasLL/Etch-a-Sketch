function createBoard () {
    erase_divs();
    const size = getdivsize();
    const container = document.querySelector('#container');
    let new_element;
    let new_row;
    for (let i = 0; i < size; i++) {
        new_row = document.createElement("div");
        new_row.setAttribute("id", "div" + i);
        new_row.classList.add("row");
        for (let j = 0; j < size; j++) {
            new_element = document.createElement("div");
            new_element.setAttribute("id", "div" + i + "-" + j);
            new_element.classList.add("blank");
            new_element.classList.add("element");
            new_element.style.height = calcdivsize(size);
            new_element.style.width = calcdivsize(size);

            new_row.appendChild(new_element);
        }
        container.appendChild(new_row);
    }
    const element_divs = Array.from(document.querySelectorAll(".element"));
    element_divs.forEach(element => element.addEventListener("mouseover", paint_div));
}

function paint_div(e) {
    //
    console.log("divpaint")
    if (e.buttons == "1"){
        e.target.classList.remove("blank");
        e.target.classList.add("painted");
    }
}

function erase_divs() {
    const element_divs = Array.from(document.querySelectorAll(".element"));
    element_divs.forEach(element => element.remove());
    const row_divs  = Array.from(document.querySelectorAll(".row"));
    row_divs.forEach(row => row.remove())
}

function calcdivsize(size) {
    const divsize = 960 / size
    return divsize + "px";
}

function getdivsize() {
    
    const input_size = document.getElementById('grid-size').value;
    return input_size;
}
createBoard();
// 
const btn = document.getElementById('btn');
btn.addEventListener("click", createBoard);