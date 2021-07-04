import { Component } from "react";
// import swal from 'sweetalert';
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
// import ImageGalleryItem from "./components/ImageGalleryItem";

export default class App extends Component {
  state = {
    name: "",
  };

  handleFormSubmit = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery name={this.state.name} />
      </>
    );
  }
}
