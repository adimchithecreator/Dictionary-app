import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
 
  return (
    <div className="Meaning">
      <h3 className=" tracking-wider text-gray-400 text-lg">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
          <div className=" font-semibold">
             {definition.definition}
           </div>
          
             <div className=" opacity-70 italic">
              {definition.example}
              </div>
              
              <Synonyms synonyms={definition.synonyms} />
  </div>
          </div>
        );
      })}
    </div>
  );
}
