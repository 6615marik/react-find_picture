import { Component } from 'react';
import { SerchBar } from './Searchbar/Searchbar';
import { fethAPI } from './Searchbar/fethAPI.1';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class App extends Component {
  state = {
    inputValue: '',
    hits: [],
    error: '',
    page: 1,
  };

  componentDidUpdate(_, prevState) {
    const { inputValue, page } = this.state;
    if (prevState.inputValue !== inputValue || prevState.page !== page) {
      fethAPI(inputValue)
        .then(hits => this.setState({ hits }))
        .catch(error => console.log(error));
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
