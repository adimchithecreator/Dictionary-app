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
        <section className=" mt-5 grid lg:grid-cols-6 p-10 rounded-lg ">
          <h2 className=" text-7xl text-white font-semibold uppercase">{props.results.word}</h2>
          {props.results.phonetics.map((phonetic, index)=> {
            return (
              <div key={index} className="lg:col-start-5 lg:col-end-6">
                <Phonetic phonetic={phonetic} onClick={()=> play(phonetic.audio)
                }  />
              </div>
            );
          })}
        </section>
        <div className="my-6 border-[0.7px] border-borderColor  "></div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section className=" mt-5 p-10" key={index}>
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