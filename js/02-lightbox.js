import { galleryItems } from './gallery-items.js';

const galleryElem = document.querySelector('.gallery');

const imagesElem = galleryItems
  .map(
    item =>
      `<li>
      <a class="gallery__item" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a></li>`
  )
  .join('');

galleryElem.insertAdjacentHTML('afterbegin', imagesElem);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
