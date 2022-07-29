import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

export default function Phonetic(props) {
   return(
    <div className="Phonetic flex lg:border border-borderColor hover:text-black md:rounded-2xl  text-center px-7 py-1 mt-3">
     <div className=" hover:cursor-pointer pr-2 hover:text-black text-white" onClick={props.onClick}>
     <FontAwesomeIcon icon={faCirclePlay}  /> 
     
     </div>
    <div className=" text-white ">
{props.phonetic.text}
</div>
    </div>
   )
   
}