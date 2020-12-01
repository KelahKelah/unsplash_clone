import React, {Component} from 'react';
import  Axios from 'axios';
import './searchBar.css';
import {BsSearch} from 'react-icons/bs'

class SearchBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <form>
                    <BsSearch />
                    <input type="text" className="searchBar" placeholder="Search for photo" />
                </form>
            </div>
        )
    }
}

export default SearchBar;