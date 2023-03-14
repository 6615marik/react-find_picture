export const fethAPI = inputValue => {
  console.log(inputValue);
  return fetch(
    `https://pixabay.com/api/?key=32372176-cc8c36cdf5846484fc1786588&q=${inputValue}&image_type=photo`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
