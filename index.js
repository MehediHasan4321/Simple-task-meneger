//collect all referanc........
const inputField = document.getElementById("input-field");
const inputBtn = document.getElementById("input-btn");
const taskContainer = document.getElementById("task-container")


// Event lesinger.......
inputField.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        if (inputField.value !== "") {

            let value = inputField.value;

            createTask(taskContainer, value)
            inputField.value = ""
        } else {
            alert("Plz Enter A Task")
        }
    }
});



// All functions ....

function createTask(parent, mgs) {
    let div = document.createElement("div");
    let span = document.createElement("span");
    let p = document.createElement("p");
    div.appendChild(p)
    div.classList.add("task-box")
    p.innerText = mgs
    span.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    //span.style="ml-auto"
    //i.classList = "icon"

    span.addEventListener("click", function () {
        parent.removeChild(div)
    })
    div.appendChild(span)
    let taskControler = createTaskControlar(div);
    div.onmouseenter = function () {
        taskControler.style.visibility = "visible"
    };
    div.onmouseleave = () => {
        taskControler.style.visibility = "hidden"
    }
    div.appendChild(taskControler)
    
    parent.appendChild(div)

}

function createTaskControlar(parent) {
    let div = document.createElement("div");
    div.classList.add("task-controler-div")

    parent.appendChild(div)
    let colorPalet = createColorPalet(parent);
    div.appendChild(colorPalet)
    let editBtn = createEditBtn(parent)
    div.appendChild(editBtn)
    return div
}

function createEditBtn(parent){
    let editBtn = document.createElement("span");
    editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`
    editBtn.classList.add("edit-btn")

    editBtn.addEventListener("click",function(){
        let p = parent.querySelector("p")
        let textArea = document.createElement("textarea");
        textArea.classList.add("text-area")
        textArea.innerText= p.innerHTML
        parent.appendChild(textArea)
        textArea.addEventListener("keypress",function(e){
            
            if(e.keyCode===13){
                if(this.value){
                    p.innerHTML = this.value
                    parent.removeChild(this)
                }else{
                    alert("Plz Enter a vlaue")
                }
            }
            
            
        })
    })

    return editBtn
}

function createColorPalet(parent) {
    let colors = ["red", "#D88771", "rgb(255,0,255)", "green", "yellow"];

    let colorDiv = document.createElement("div");
    colorDiv.classList.add("color-box");
    colors.forEach(color => {
        let div = document.createElement("div");
        div.style.backgroundColor = color
        div.classList.add("color-div")
        colorDiv.appendChild(div)
        div.addEventListener("click", function () {
            parent.style.backgroundColor = color;
        })
    })

    return colorDiv;
}