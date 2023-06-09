const images = document.getElementsByClassName('images')
const selectors = document.getElementsByClassName('category')

function showCategory(num) {
  for (var i = 0; i < images.length; i++) {

    if (images[i].id === 'images-category-' + num) {
      images[i].classList.add('active')
    } else {
      images[i].classList.remove('active')
    }
  }

  activeSelector(num-1)
}

function activeSelector(num){

  for (var i = 0; i < images.length; i++) {

    selectors[i].classList.remove('active')
  }
  
  selectors[num].classList.add('active')
}