const numDisplay = document.getElementById("numDisplay")
const codeDisplay = document.getElementById("codeDisplay")
const keyDisplay = document.getElementById("keyDisplay")
const whichDisplay = document.getElementById("whichDisplay")
const locationDisplay = document.getElementById("locationDisplay")

document.addEventListener("keydown", (e) => {
    let keyDown = e.key
    let keyCode = e.code
    let keyWhich = e.which //deprecated = no longer maintained (no more updating/fixing bugs)
    let keyLocation = e.location

    numDisplay.innerHTML = `<p class = "pressedBtn">${keyDown} was pressed</p>`
    keyDisplay.innerHTML = `<p class = "pressedBtn">${keyDown} was pressed</p>`
    codeDisplay.innerHTML = `<p class = "pressedBtn">${keyCode} was pressed</p>`
    whichDisplay.innerHTML = `<p class = "pressedBtn">${keyWhich} was pressed</p>`
    locationDisplay.innerHTML = `<p class = "pressedBtn">${keyLocation} was pressed</p>`
})