import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'

export default function Phonetic(props) {
   return(
    <div className="Phonetic flex mt-3">
     <div className=" hover:cursor-pointer mr-3 border rounded-full p-1 bg-white border-transparent hover:text-white hover:bg-green-900 text-green-900" onClick={props.onClick}>
     <FontAwesomeIcon icon={faVolumeHigh}  /> 
     
     </div>
    <div className=" text-gray-500">
{props.phonetic.text}
</div>
    </div>
   )
   
}