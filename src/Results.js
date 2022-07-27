import React, { useRef } from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  const audio = useRef(new Audio());
  function play(src) {
    if (audio.current) {
      audio.current.src= src
      audio.current.play()
    }
  }
  if (props.results) {
    return (
      <div className="Results">
        <section className=" mt-5 p-7 bg-white rounded-2xl shadow-md shadow-black">
          <h2 className=" text-3xl font-semibold uppercase tracking-[.20em]">{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} onClick={()=> play(phonetic.audio)
                }  />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section className=" mt-5 p-5 bg-white rounded-2xl shadow-black shadow-md" key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}