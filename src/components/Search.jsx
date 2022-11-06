import React from "react";

import PropTypes from 'prop-types';

function Search(props){
    return(
        <input 
        onChange={(event) => (
            props.setMovieToSearch(event.target.value)
        )}
        type="text" className="input" placeholder='Search for a movie'/>
    )
}

Search.propTypes = {
  
    setMovieToSearch: PropTypes.func.isRequired,
 
  };

export default Search;