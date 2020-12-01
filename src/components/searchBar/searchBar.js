import React, {Component} from 'react';
import  Axios from 'axios';
import './searchBar.css';
import {BsSearch} from 'react-icons/bs'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    onchange = (e) => {
        this.setState({search:e.target.value})
        console.log(this.state.search)
    }

    render() {
        return(
            <div>
                <form>
                    <BsSearch />
                    <input type="text" className="searchBar" placeholder="Search for photo" onChange={this.onchange} />
                </form>
            </div>
        )
    }
}

export default SearchBar;