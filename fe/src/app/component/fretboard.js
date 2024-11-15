// fretboard.js
'use client';
import { useEffect, useState } from "react";
import "../style/css/fretboard.css";
import { MenuItem, Select } from "@mui/material";

export default function Fretboard({ tune, string, chordToneAr, keySign, fret, highlightedOnly = false }) {

  const sharpNote = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
  const flatNote = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];

  const [tuneValues, setTuneValues] = useState(tune.slice(0, string));


  function setFret(startTune, fretCount = fret) {
    return Array.from({ length: fretCount }, (_, fret) => ((startTune + fret) % 12 == 0 ? 12 : (startTune + fret) % 12));
  }



  function selectTune(value, index) {
    setTuneValues((prev) => {
      const newTune = [...prev];
      newTune[index] = value;
      return newTune;
    });
  };


  return (
    <div className="fretboard">
      <div className="zeroFret">
        {tune.slice(0, string).map((_, stringIndex) => {
          return (
            <Select key={stringIndex} className="tune-select" value={tuneValues[stringIndex]} onChange={(event) => selectTune(event.target.value, stringIndex)}
            >
              <MenuItem value={4}>C</MenuItem>
              <MenuItem value={5}>{keySign ? "C#" : "Db"}</MenuItem>
              <MenuItem value={6}>D</MenuItem>
              <MenuItem value={7}>{keySign ? "D#" : "Eb"}</MenuItem>
              <MenuItem value={8}>E</MenuItem>
              <MenuItem value={9}>F</MenuItem>
              <MenuItem value={10}>{keySign ? "F#" : "Gb"}</MenuItem>
              <MenuItem value={11}>G</MenuItem>
              <MenuItem value={12}>{keySign ? "G#" : "Ab"}</MenuItem>
              <MenuItem value={1}>A</MenuItem>
              <MenuItem value={2}>{keySign ? "A#" : "Bb"}</MenuItem>
              <MenuItem value={3}>B</MenuItem>
            </Select>
          );
        })}
      </div>
    </div>
  )

  {/* 
        {defaultTune.slice(0, string).map((startTune, stringIndex) => (
          <div key={`string-${stringIndex}`} className={"string"}>
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
        ))} */}
    
    
}
// 선택된 음들만 표기 , 튜닝 변경 기능 추가 , 프렛카운트 조절 추가 , 기본 튜닝으로 복귀 기능 추가
