var images = document.getElementsByClassName('images');

function showCategory(category) {
  for (var i = 0; i < images.length; i++) {

    if (images[i].id === 'images-category-' + category) {
      images[i].classList.add('active');
    } else {
      images[i].classList.remove('active');
    }
  }
}