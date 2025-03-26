import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const cardGallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
});

export function renderImgCard(images) {
    cardGallery.innerHTML = images
        .map(
            ({
                webformatURL,
                largeImageURL,
                tags,
                likes,
                views,
                comments,
                downloads,
            }) =>
                `<li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img class="gallery-image" src="${webformatURL}" alt="${tags}" width="360" height="200"/>
                <ul class="gallery-text-list">
                    <li class="gallery-text-item"><h3>Likes</h3><p>${likes}</p></li>
                    <li class="gallery-text-item"><h3>Views</h3><p>${views}</p></li>
                    <li class="gallery-text-item"><h3>Comments</h3><p>${comments}</p></li>
                    <li class="gallery-text-item"><h3>Downloads</h3><p>${downloads}</p></li>
                </ul>
            </a>
        </li>`
        )
        .join('');

    lightbox.refresh();
}
