import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Search(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
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
          <section className=" p-5 rounded-2xl shadow-black shadow-md bg-white">
       
        <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Search for a word" defaultValue={props.defaultKeyword} onChange={handleKeywordChange} 
        className=" w-full px-4 py-2  rounded border  border-slate-500" />
            
        </form>
        <div className="hints text-sm  mt-3">
suggested words: money, travel, trees, wine, music.
        </div>
        </section>
        <Results results={results} />
        </div>
    );
}
else {
  load();
  return "Loading";
}
}