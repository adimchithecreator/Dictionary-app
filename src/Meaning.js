import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
 
  return (
    <div className="Meaning">
      <h3 className=" tracking-wider text-green-900 font-semibold mb-3 text-lg">{props.meaning.partOfSpeech}</h3>
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
              <div className=" capitalize text-green-900">

              <Synonyms synonyms={definition.synonyms} />
              </div>
  </div>
          </div>
        );
      })}
    </div>
  );
}
