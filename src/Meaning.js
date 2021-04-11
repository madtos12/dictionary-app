import React from "react";
import Synonym from "./Synonym";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <span className="example">
                <em>{definition.example}</em>
              </span>
            </p>
            <Synonym synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
