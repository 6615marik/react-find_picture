import { Component } from 'react';
import { SerchBar } from './Searchbar/Searchbar';
import { fethAPI } from './Searchbar/fetchAPI';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    inputValue: 'car',
    hits: [],
    error: '',
    page: 1,
    load: true,
  };

  componentDidUpdate(_, prevState) {
    const { inputValue } = this.state;
    if (prevState.inputValue !== inputValue) {
      this.fetchValue();
      // console.log(hits);
    }
  }
  fetchValue = () => {
    const { inputValue, page } = this.state;
    fethAPI(inputValue, page)
      .then(data =>
        this.setState(prev => ({ hits: [...prev.hits, ...data.hits] }))
      )
      .catch(error => this.setState({ error }));
  };
  dataInput = data => {
    console.log(data);
    this.setState({ inputValue: data });
  };
  handlerLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
    this.fetchValue();
  };

  render() {
    const { hits, load } = this.state;
    return (
      <>
        <SerchBar onSubmit={this.dataInput} />
        <ImageGallery>
          <ImageGalleryItem hits={hits} />
        </ImageGallery>
        {load && <Button onClick={this.handlerLoadMore} />}
      </>
    );
  }
}
