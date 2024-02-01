const colorForm = document.getElementById("color-form")
const dropDown = document.getElementById("dropdown");
const colorPicker = document.getElementById("color-picker")
const labels = document.getElementById("labels")
const labelItems = document.getElementsByClassName("label-item")

colorForm.addEventListener("submit", (event) => {
    event.preventDefault()
    getColors(dropDown.value, colorPicker.value)
})

labels.addEventListener("click", (event) => {
    if (event.target.textContent.length === 7){
        navigator.clipboard.writeText(event.target.textContent)
    }
})

function getColors(mode, colorVal){
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorVal.split("#")[1]}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => {
            let colors = data.colors
            for (let i = 0; i < 5; i++){
                document.getElementById(`ci${i}`).style.backgroundColor = colors[i].hex.value
                document.getElementById(`label${i}`).textContent = colors[i].hex.value
            }
        })
}