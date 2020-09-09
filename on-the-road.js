let currentlySelected

const destinations = [...document.querySelectorAll(".destination")]
const collapseDestinations = [...destinations].map(x => x.querySelector(".header"))
console.log(collapseDestinations)
for (let [i, destination] of collapseDestinations.entries()) {
    destination.addEventListener("click", () => setSelected(i))
}

setSelected(0)

function setSelected(i) {
    if (currentlySelected == i) {
        destinations[i].classList.remove("selectedDest")
        currentlySelected = undefined
        return
    }
    if (currentlySelected != undefined) {
        destinations[currentlySelected].classList.remove("selectedDest")
    }
    currentlySelected = i
    destinations[i].classList.add("selectedDest")
}
