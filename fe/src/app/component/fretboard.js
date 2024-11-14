// fretboard.js
import { useState } from "react";
import "../style/css/fretboard.css";

export default function Fretboard({ string, chordToneAr, keySign, highlightedOnly = false }) {
  var defaultTune = [8, 3, 11, 6, 1, 8, 3, 10];

  const sharpNote = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
  const flatNote = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];

  function setFret(startTune, fretCount = 25) {
    return Array.from({ length: fretCount }, (_, fret) => ((startTune + fret) % 12 == 0 ? 12 : (startTune + fret) % 12));
  }

  return (
    <div className="fretboard">
      {defaultTune.slice(0, string).map((startTune, stringIndex) => (
        <div key={`string_${stringIndex}`} className="string">
          {setFret(startTune).map((fretNote, fretIndex) => {
            const isHighlighted = chordToneAr.includes(fretNote);
            const noteLabel = keySign ? sharpNote[fretNote - 1] : flatNote[fretNote - 1];

            return (
              (!highlightedOnly || isHighlighted) && (
                <div key={`fret_${stringIndex}_${fretIndex}`} className={`fret ${isHighlighted ? "highlight" : ""}`}>
                  {noteLabel}
                </div>
              )
            );
          })}
        </div>
      ))}
    </div>
  );
}
// 선택된 음들만 표기 , 튜닝 변경 기능 추가 , 프렛카운트 조절 추가 , 기본 튜닝으로 복귀 기능 추가
