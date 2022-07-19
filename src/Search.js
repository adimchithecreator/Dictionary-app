import React, { useState } from "react";
import './Search.css'
import axios from "axios";
import Results from "./Results";

export default function Search(props) {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);


  function handleDictionResponse(response) {
    setResults(response.data[0]);
  }
    function wordSearch() {

let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
      
      axios.get(apiUrl).then(handleDictionResponse)
      }
      function handleSubmit(event) {
        event.preventDefault();
        wordSearch();
      }

      function handleKeywordChange(event) {
        setKeyword(event.target.value);
      }
      function load() {
        setLoaded(true);
        wordSearch();
      }
    

      if (loaded){
    return(

        <div className="Search mt-5">
        <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Search for a word" defaultValue={props.defaultKeyword} onChange={handleKeywordChange}  class="form-control search-input" />
            
        </form>
        <Results results={results} />
        </div>
    );
}
else {
  load();
  return "Loading";
}
}