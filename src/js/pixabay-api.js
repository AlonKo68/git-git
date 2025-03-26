import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const API_KEY = `49502034-df263a01178fc9ef1a0cdcc0b`;
const BASE_URL = `https://pixabay.com/api/`;

export async function fetchImages(query) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: `photo`,
                orientation: `horizontal`,
                safesearch: true,
            }
        });
        console.log(response.data);
        return response.data.hits;

    } catch (error) {
        console.error(`Error fetching images:`, error)
        throw error
    }

}
