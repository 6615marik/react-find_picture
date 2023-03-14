export const ImageGalleryItem = ({ hits }) => {
  return (
    <>
      {hits.map(({ id, webformatURL }) => (
        <li key={id}>
          <img
            src={webformatURL}
            alt="response from API"

            // onClick={() => onImage(largeImageURL, tags, id)}
          />
        </li>
      ))}
    </>
  );
};
