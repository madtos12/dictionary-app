import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import "./Phonetics.css";

export default function Phonetics(props) {
  function playAudio() {
    let audio = new Audio(props.phonetic.audio);
    audio.play();
  }

  return (
    <div className="Phonetics">
      <button onClick={playAudio}>
        <FontAwesomeIcon icon={faVolumeUp} />
      </button>
      {props.phonetic.text}
    </div>
  );
}
