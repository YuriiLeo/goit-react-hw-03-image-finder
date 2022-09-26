import React, { Component } from 'react';
import { SearchbarHeader, SearchForm, Button, Label, Input, } from './Searchbar.styled';
import { AiOutlineSearch } from "react-icons/ai";
// import { toast } from 'react-toastify'; 

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
      // toast.warn('Поле пошуку пусте', {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
      alert("Поле пошуку пусте");
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
            <AiOutlineSearch size={20}/>
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

