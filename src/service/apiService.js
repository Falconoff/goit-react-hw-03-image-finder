/*import axios from 'axios';
import PropTypes from 'prop-types';

// const API_KEY = '24083416-1e00017d670d2bdb130fa2702';
const getImages = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '24083416-1e00017d670d2bdb130fa2702',
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal'
  }
})

async function fetchImgs(query = '', page=1) {
  // console.log('== FetchImgs == query:', query);
  // console.log('== FetchImgs == page:', page);
  const params = {query, page}
try{
  const {data} = await getImages( '', {params});
  return data;
} catch (error) {console.log(`Not found ${query}`)}

  // const response = await fetch(
  //   `${URL}/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`,
  // );
  // const result = await response.json();

  // return result;
}

const api = { fetchImgs };
export default api;

fetchImgs.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
*/
//  =========================== it works =========================================

import PropTypes from 'prop-types';

const API_KEY = '24083416-1e00017d670d2bdb130fa2702';
const URL = 'https://pixabay.com/api';

export function fetchImgs(query, page) {
  console.log('== FetchImgs == query:', query);
  console.log('== FetchImgs == page:', page);

  return fetch(
    `${URL}/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`,
  ).then(result => {
    if (result.ok) {
      // console.log('result.json()', result.json());
      return result.json();
    }
    return Promise.reject(new Error(`There is nothing with ${query}`));
  });
}

const api = { fetchImgs };
export default api;

fetchImgs.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

//  ====================================================================
