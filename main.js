const openSection = () => {
  const sectionCarpas = document.getElementById("sectionCarpas")

  if (sectionCarpas.classList.contains("show")) {
    sectionCarpas.classList.remove("show")
  } else {
    sectionCarpas.classList.add("show")
  }
}