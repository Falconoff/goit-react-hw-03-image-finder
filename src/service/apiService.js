import axios from 'axios';
import PropTypes from 'prop-types';

const API_KEY = '24083416-1e00017d670d2bdb130fa2702';
axios.defaults.baseURL = 'https://pixabay.com/api/';

async function fetchImgs(query, page, perPage) {
  const options = new URLSearchParams({
    key: API_KEY,
    q: query,
    page: page,
    per_page: perPage,
    image_type: 'photo',
    orientation: 'horizontal',
  });

  try {
    const response = await axios.get(`?${options}`);
    return response.data;
  } catch (error) {
    return Promise.reject(new Error(error.message));
  }
}

const api = { fetchImgs };
export default api;

fetchImgs.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
