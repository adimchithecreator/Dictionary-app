import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'

export default function Phonetic(props) {
   return(
    <div className="Phonetic flex">
     <div onClick={props.onClick}>
     <FontAwesomeIcon icon={faVolumeHigh}  /> 
     
     </div>
    
{props.phonetic.text}
    </div>
   )
   
}