//collect all referanc........
const inputField = document.getElementById("input-field");
const inputBtn = document.getElementById("input-btn");
const taskContainer = document.getElementById("task-container")


// Event lesinger.......
inputField.addEventListener("keypress", function (e) {

    if (e.keyCode === 13) {
        let value = e.target.value;
        
        createTask(taskContainer, value)
        e.target.value = ""
    }

});



// All functions ....

function createTask(parent, mgs) {
    let div = document.createElement("div");
    let span = document.createElement("span");
    let p = document.createElement("p");
    div.appendChild(p)
    p.innerText = mgs
    span.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    //span.style="ml-auto"
    //i.classList = "icon"

    span.addEventListener("click", function () {
        parent.removeChild(div)
    })
    div.appendChild(span)
    let taskControler = createTaskControlar(div);
    div.onmouseenter=function(){
        taskControler.style.visibility ="visible"
    };
    div.onmouseleave=()=>{
        taskControler.style.visibility="hidden"
    }
   div.appendChild(taskControler)
    div.classList.add("task-box")
    parent.appendChild(div)

}

function createTaskControlar(parent){
    let div = document.createElement("div");
    div.classList.add("task-controler-div")
    parent.appendChild(div)
    let colorPalet = createColorPalet();
    div.appendChild(colorPalet)
    return div
}

function createColorPalet(){
    let colors = ["red","#D88771","rgb(255,0,255)","green","yellow"];

    let colorDiv = document.createElement("div");
     colorDiv.classList.add("color-box");
    colors.forEach(color=>{
        let div = document.createElement("div");
        div.style.backgroundColor = color
        div.classList.add("color-div")
        colorDiv.appendChild(div)
    })

    return colorDiv;
}