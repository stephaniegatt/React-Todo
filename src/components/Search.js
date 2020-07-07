import React, { Component } from "react";

class Search extends Component {
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.searchText} 
                    onChange={this.props.changeSearchText} 
                    placeholder="Enter search term"
                />
                <button onClick={this.props.clearFilter}>Clear Filter</button>
            </div>
        )
    }
}

export default Search;