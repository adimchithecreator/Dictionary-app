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
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
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

        <div className="Search">
          
          <section className=" ">
          <div className=" px-4 py-2.5">
  <div className="container lg:inline-flex flex-wrap  justify-between items-center mx-auto">
  <a href="https://dictionaryapi.dev/" className="flex items-center" target="_blank" rel="noreferrer" >
    <span className=" hidden lg:block self-center text-xl font-semibold whitespace-nowrap text-[#F3F3F3]">Dictionary</span>
  </a>
  <div className="flex space-x-4 ">
 

      <form onSubmit={handleSubmit} className="appearance-none flex items-center">
      <div className="relative ">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
        <input type="search" placeholder="Search for a word" defaultValue={props.defaultKeyword} onChange={handleKeywordChange} 
        className=" text-gray-900 text-sm rounded-lg  focus:border block w-fit pl-10 p-2.5  bg-borderColor border-gray-600 placeholder-gray-400  " />
            </div>
            
        </form>
       <a> Github</a>
        </div>
        </div>
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