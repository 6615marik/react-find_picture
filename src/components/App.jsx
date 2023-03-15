import { Component } from 'react';
import { SerchBar } from './Searchbar/Searchbar';
// import { fethAPI } from './Searchbar/fethAPI.1';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class App extends Component {
  state = {
    inputValue: 'car',
    hits: [],
    error: '',
    page: 1,
  };

  componentDidUpdate(_, prevState) {
    const { inputValue } = this.state;
    if (prevState.inputValue !== inputValue) {
      console.log(inputValue);
      return fetch(
        `https://pixabay.com/api/?q=${inputValue}&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`Not picture with name ${inputValue}`)
          );
        })
        .then(hits => this.setState({ hits }))
        .catch(error => this.setState({ error }));
    }
  }

  dataInput = data => {
    console.log(data);
    this.setState({ inputValue: data });
  };

  render() {
    const { hits } = this.state;
    return (
      <>
        <SerchBar onSubmit={this.dataInput} />
        <ImageGallery>
          <ImageGalleryItem hits={hits} />
        </ImageGallery>
      </>
    );
  }
}
