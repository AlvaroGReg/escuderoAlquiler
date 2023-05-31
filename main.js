
const sectionSillas = document.getElementById("sectionSillas")
const sectionMesas  = document.getElementById("sectionMesas")
const sectionCarpas = document.getElementById("sectionCarpas")
const sectionsArr   = [sectionSillas, sectionMesas, sectionCarpas]

const openSection = (index) => {
  
  if (sectionsArr[index].classList.contains("show")) {
    sectionsArr[index].classList.remove("show")
  } else {
    sectionsArr[index].classList.add("show")
  }
}

/* TODO: TURN ICONS ON CLICK */