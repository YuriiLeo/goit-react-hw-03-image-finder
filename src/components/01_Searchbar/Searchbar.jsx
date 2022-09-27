import React, { Component } from 'react';
import PropTypes from "prop-types";
import { SearchbarHeader, SearchForm, Button, Label, Input, } from './Searchbar.styled';
import { MdOutlineImageSearch } from "react-icons/md";
import { toast } from 'react-toastify'; 

export default class Searchbar extends Component {
  
    state = {
      search: "",
      
  }

     handleChange = (e) => {
       this.setState({ search: e.currentTarget.value.toLowerCase() });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.search.trim() === "") {
      toast.warn('The search field is empty', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    this.props.onSearch(this.state.search.trim());
    this.reset();
  }
  
  reset() {
    this.setState({
      search: "" 
    })
  }

 
  render() {
    const { search } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <SearchbarHeader>
       <SearchForm onSubmit={handleSubmit}>
          <Button type="submit" onClick={handleSubmit}>
            <MdOutlineImageSearch size={40}/>
           <Label>Search</Label>
          </Button>
          
         <Input 
            type="text"
            name="search"
            value={search}
           autocomplete="off"
            placeholder="Search images and photos"
            onChange={handleChange}
         />
        </SearchForm>
      </SearchbarHeader>
    )
  }
}



Searchbar.propTypes = {
  onSearch: PropTypes.func
}