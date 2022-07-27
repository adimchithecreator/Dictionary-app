import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className=" ">
      <ul className="Synonyms mt-5">
        {props.synonyms.map(function (synonym, index) {
          return (
           
          <li className="inline-block pr-2.5 leading-none" key={index}>{synonym}</li>
       
      )  })}
      </ul>
      </div>
    );
  } else {
    return null;
  }
}