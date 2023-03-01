import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryElem = document.querySelector(".gallery");
const markupElem = createMarkup(galleryItems);

galleryElem.insertAdjacentHTML("afterbegin", markupElem);
galleryElem.addEventListener('click', onGalleryClick);

function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
</a>
</div>
`;
    })
    .join("");
}


function onGalleryClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => { window.addEventListener("keydown", onEscPress) },
      onClose: () => { window.removeEventListener("keydown", onEscPress) }
    }
  );
  function onEscPress(e) {
    if (e.code === "Escape") {
      instance.close();
    }

    instance.show();
  }


}