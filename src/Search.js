import React, { useState } from "react";
import './Search.css'
import axios from "axios";

export default function Search() {
    let [keyword, setKeyword] = useState("");

    function Look(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
      }
      function handleKeywordChange(event) {
        setKeyword(event.target.value);
      }


    return(
        <div className="Search mt-5">
        <form onSubmit={Look}>
            <input type="search" onChange={handleKeywordChange} />
        </form>
        </div>
    )
}