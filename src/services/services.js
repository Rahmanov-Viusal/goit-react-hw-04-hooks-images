const API_KEY = '22960309-85052fc004ca9b43ae271af96';

const fetchImage = async (query, page = 1) => {
  const { hits, total } = await fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    return response.json();
  });
  return { hits, total };
};

const pixabayAPI = {
  fetchImage,
};

export default pixabayAPI;
