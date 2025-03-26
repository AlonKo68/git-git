import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderImgCard } from './js/render-functions';

const form = document.querySelector('.form');
const spinner = document.querySelector('.loader');

form.addEventListener('submit', handlerSearch);

function handlerSearch(evt) {
    evt.preventDefault();
    const formEvt = evt.currentTarget;
    const queryValue = formEvt.elements.query.value.trim();
    spinner.style.display = 'flex';

    if (queryValue === '') {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search term!',
            position: 'topRight',
        });
    } else {
        fetchImages(queryValue)
            .then(images => {
                if (images.length === 0) {
                    iziToast.warning({
                        message:
                            'No images found. Try again!!',
                        backgroundColor: '#EF4040',
                        messageColor: '#FFF',
                        iconText: '⚠︎',
                        iconColor: '#FFF',
                        close: true,
                        balloon: true,

                        position: 'topRight',
                    });
                }
                renderImgCard(images);

            })
            .catch((error) => {
                iziToast.error({
                    title: 'Error',
                    message:
                        'Failed to fetch images. Try again later!',
                    position: 'topRight',
                });
            })
            .finally(() => {
                formEvt.reset();
                spinner.style.display = 'none';
            });
    }
}
