import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
export class App extends Component {
  state = {
    shearchValue: '',
  };
  handleSubmit = shearchValue => {
    this.setState({ shearchValue });
  };
  render() {
    return (
      <div>
        <div id="modal-root"></div>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        <ImageGallery searchValue={this.state.shearchValue}></ImageGallery>
        <p>ImageGallery и Modal.</p>
      </div>
    );
  }
}
