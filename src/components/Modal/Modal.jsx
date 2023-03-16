import React, { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleClick);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClick);
  }

  handleClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.img.largeImageURL} alt={this.props.img.tags} />
        </div>
        <button className="Button" type="button" onClick={this.handleClick}>
          Close
        </button>
      </div>
    );
  }
}
