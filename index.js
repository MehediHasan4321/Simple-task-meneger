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
    let i = document.createElement("div")
    let p = document.createElement("p");
    div.appendChild(p)
    p.innerText = mgs
    i.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    i.classList = "icon"

    i.addEventListener("click", function () {
        parent.removeChild(div)
    })
    div.appendChild(i)
    div.classList.add("task-box")
    parent.appendChild(div)


    return div
}