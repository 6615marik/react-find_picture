export const ImageGalleryItem = ({ hits, onLargeImage }) => {
  return (
    <>
      {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li key={id} className="ImageGalleryItem ">
          <img
            className="ImageGalleryItem-image"
            src={webformatURL}
            alt={tags}
            onClick={() => onLargeImage({ largeImageURL, tags, id })}
          />
        </li>
      ))}
    </>
  );
};
