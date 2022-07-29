import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
 
  return (
    <div className="Meaning grid lg:grid-cols-3 divide-x divide-borderColor  border rounded border-borderColor">
  
      <h3 className="tracking-wider capitalize text-nav font-semibold p-5 text-lg ">{props.meaning.partOfSpeech}</h3>
     
      <ul className="py-5 px-10 col-span-2">
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <li key={index} className="">
            
            <div>
          <div className=" text-xl  text-white ">
             {definition.definition}
           </div>
          
             <div className=" mt-3 text-example italic">
              {definition.example}
              </div>
          

              <Synonyms synonyms={definition.synonyms} />
            
  </div>
          </li>
        );
      })}
      </ul>
    </div>
  );
}
