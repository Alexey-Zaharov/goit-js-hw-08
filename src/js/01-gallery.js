// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
imgGallery = document.querySelector('.gallery');
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></div>`;
  })
  .join('');

imgGallery.insertAdjacentHTML('afterbegin', galleryMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
