import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Search(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);


  function handleDictionResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }


    function wordSearch() {

let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
      
      axios.get(apiUrl).then(handleDictionResponse)

      let pexelsApiKey =
      "563492ad6f917000010000019173e2825ac74c81ba54e75cb11d81e1";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
          <section className=" p-10 rounded-lg shadow-white shadow-md bg-white">
       <h1 className=" font-bold text-lg mb-5">What word are you looking for? 👀</h1>
        <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Search for a word" defaultValue={props.defaultKeyword} onChange={handleKeywordChange} 
        className=" w-full px-4 py-2  rounded border  border-slate-500" />
            
        </form>
        <div className="hints text-sm text-green-900 font-bold  mt-3">
suggested words: money, travel, trees, wine, music.
        </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
        </div>
    );
}
else {
  load();
  return "Loading";
}
}