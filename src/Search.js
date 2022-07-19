import React, { useState } from "react";
import './Search.css'
import axios from "axios";

export default function Search() {
    let [keyword, setKeyword] = useState("");

    function wordSearch(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
      

        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
      
      axios.get(apiUrl).then()
      }
      function handleKeywordChange(event) {
        setKeyword(event.target.value);
      }


    return(
        <div className="Search mt-5">
        <form onSubmit={wordSearch}>
        <input type="search" placeholder="Search for a word" onChange={handleKeywordChange}  class="form-control search-input" />
            
        </form>
        </div>
    )
}