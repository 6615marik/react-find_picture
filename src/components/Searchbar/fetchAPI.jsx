export const fethAPI = (inputValue, page) => {
  return fetch(
    `https://pixabay.com/api/?key=32372176-cc8c36cdf5846484fc1786588&q=${inputValue}&image_type=photo&page=${page}&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Not picture with name ${inputValue}`));
  });
};
