import Searchbar from "../01_Searchbar/Searchbar";
import ImageGallery  from 'components/02_ImageGallery/ImageGallery';
import {Loader} from 'components/04_Loader/Loader';
import { searchPixabayAPI } from 'components/services/ApiPixabay';
import { AppWrapper } from "./App.styled";
import { ToastContainer } from 'react-toastify';
import Button from "components/05_Button/Button";
import Modal from "components/06_Modal/Modal";
import Warnings from "components/07_Warnings/Warnings";

import React, { Component } from 'react'

export default class App extends Component {
// список постів items
  
    state = {
      images: [],
      bigImagePath: "",
      isLoading: false,
      error: null,
      search: "",
      page: 1,
      notFound: false,
      
  }
  
    componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if ((search && prevState.search !== search) || page > prevState.page) {
      this.fetchImages(search, page);
    }
    
  }

    onSearch = search => {
      this.setState({
      images: [],
      search,
    })
  }

    async fetchImages() {
    const { search, page } = this.state;
    this.setState({
      isLoading: true,
    });
      
      try {
        const data = await searchPixabayAPI(search, page);
        if (data.hits.length === 0) {
          this.setState(({ notFound }) => {
            return {
              notFound: true
            }
          })
        } else {
          this.setState(({ images, notFound }) => {
            return {
              images: [...images, ...data.hits],
              notFound: false
            }
          })
        }
      } catch (error) {
        console.log(error);
        this.setState({
        error
      })
      }
      finally  {this.setState({
        isLoading:false
      })
      }
  }


  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,

      }
    })
  
  }
  
  
  toggleModal = (path) => {
    this.setState({
      bigImagePath: path,
    })
  }

  
  render() {
    const { images, isLoading, error, bigImagePath, notFound } = this.state;
    const { loadMore, onSearch, toggleModal } = this;
    const isImages = Boolean(images.length);
    return (
          <AppWrapper>
        <Searchbar onSearch={onSearch} />
        <ToastContainer />
        {notFound && <Warnings text="Nothing found for this query, try again"/>}
        {bigImagePath && (<Modal onClick={toggleModal} path={bigImagePath}>
          <img src={bigImagePath} alt="" />
        </Modal>)}
        {isLoading && <Loader/>}
        {error && <Warnings text="Please, try again later"/>}
        {!isImages && !notFound && <Warnings text="Enter key word for images search"/>}
        {isImages && <ImageGallery items={images} toggleModal={toggleModal} />}
        {isImages && <Button loadMore={loadMore} />}
    </AppWrapper>
    )
  }
}

