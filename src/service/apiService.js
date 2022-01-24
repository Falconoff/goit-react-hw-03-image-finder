const API_KEY = '24083416-1e00017d670d2bdb130fa2702';
const URL = 'https://pixabay.com/api';

export default function fetchImgs({ query, page }) {
  return fetch(
    `${URL}/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`,
  ).then(result => {
    if (result.ok) {
      return result.json();
    }
    return Promise.reject(new Error(`There is nothing with ${query}`));
  });
  // .then(result => this.setState({ imgArr: result.hits, status: 'resolved' }))
  // .catch(error => this.setState({ error, status: 'rejected' }));
}

//  ====================================================================
/*
export default class PixabayApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  // https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
  fetchImages() {
    return fetch(
      `${URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
    )
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      });
  }
  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}
*/
