import { Component } from 'react';
import { SerchBar } from './Searchbar/Searchbar';
import { fethAPI } from './Searchbar/fetchAPI';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    inputValue: '',
    hits: [],
    error: '',
    page: 1,
    load: false,
    loading: false,
    showModal: false,
    pictureinfo: {},
  };

  componentDidUpdate(_, prevState) {
    const { inputValue, page } = this.state;
    if (prevState.inputValue !== inputValue || prevState.page !== page) {
      this.fetchValue();
      // console.log(hits);
    }
  }

  fetchValue = () => {
    const { inputValue, page } = this.state;
    this.setState({ loading: true });
    fethAPI(inputValue, page)
      .then(data => {
        this.setState(prev => ({ hits: [...prev.hits, ...data.hits] }));
        if (data.hits.length < 12) {
          this.setState({ load: false });
        } else {
          this.setState({ load: true });
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() =>
        this.setState({
          loading: false,
        })
      );
  };

  dataInput = data => {
    console.log(data);
    this.setState({ inputValue: data, hits: [], page: 1 });
  };
  handlerLoadMore = () => {
    this.setState({
      loading: true,
    });
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  clickLargeImage = ({ largeImageURL, tags, id }) => {
    this.setState({ pictureinfo: { largeImageURL, tags, id } });
    this.togleModal();
  };

  togleModal = e => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { hits, load, loading, showModal, pictureinfo } = this.state;
    return (
      <>
        <SerchBar onSubmit={this.dataInput} />
        {loading && <Loader />}
        <ImageGallery>
          <ImageGalleryItem hits={hits} onLargeImage={this.clickLargeImage} />
        </ImageGallery>
        {showModal && <Modal img={pictureinfo} onClose={this.togleModal} />}
        {load && <Button onClick={this.handlerLoadMore} />}
        {load && loading && <Loader />}
      </>
    );
  }
}
