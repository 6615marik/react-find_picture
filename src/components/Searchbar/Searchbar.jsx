import { Component } from 'react';

export class SerchBar extends Component {
  state = {
    inputValue: '',
  };
  inputText = e => {
    e.preventDefault();
    if (this.state.inputValue.trim() === '') {
      alert('Еnter a name to search for a picture');
    } else {
      this.props.onSubmit(this.state.inputValue);
    }
    this.setState({ inputValue: '' });
  };
  inputChange = e => {
    const { value } = e.target;

    this.setState({ inputValue: value });
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.inputText}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.inputChange}
          />
        </form>
      </header>
    );
  }
}
