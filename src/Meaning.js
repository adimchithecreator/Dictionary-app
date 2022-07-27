import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
 
  return (
    <div className="Meaning">
      <h3 className=" tracking-wider text-gray-400 text-lg">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
             {definition.definition}
           
          
             <div className=" italic">
              {definition.example}
              </div>
              
              <Synonyms synonyms={props.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
