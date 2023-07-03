// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const list = document.querySelector('.gallery');
list.classList.add('gallery');

const markup = galleryItems
  .map(
    img =>
      `<div>
      <a class="gallery__item" href="${img.original}">
      <img class="gallery__image" src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}" />
    </a>
    
    </div>`
  )
  .join(``);

list.insertAdjacentHTML('afterbegin', markup);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
console.log(galleryItems);
