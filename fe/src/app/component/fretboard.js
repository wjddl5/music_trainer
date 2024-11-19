// fretboard.js
'use client';
import { useEffect, useState } from 'react';
import '../style/css/fretboard.css';
import { Button, MenuItem, Select } from '@mui/material';

export default function Fretboard({ tune, string, chordToneAr, keySign, fret, highlightedOnly = false, allNote }) {
  const sharpNote = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  const flatNote = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

  const [tuneValues, setTuneValues] = useState(tune.slice(0, string));

  function setFret(startTune, fretCount = fret) {
    return Array.from({ length: fretCount }, (_, fret) => ((startTune + fret) % 12 == 0 ? 12 : (startTune + fret) % 12));
  }

  function setChordTone(fretNote) {
    if (chordToneAr.includes(fretNote)) {
      return fretNote;
    }
  }

  function resetTune() {
    setTuneValues(tune.slice(0, string));
  }

  useEffect(() => {
    setTuneValues(tune.slice(0, string));
  }, [string]);

  function selectTune(value, index) {
    setTuneValues((prev) => {
      const newTune = [...prev];
      newTune[index] = value;
      return newTune;
    });
  }

  return (
    <div className="pageComponent">
      <div className="fretboard">
        <div className="zeroFret">
          {tuneValues.slice(0, string).map((_, stringIndex) => {
            return (
              <Select
                key={stringIndex}
                className="tune-select"
                value={tuneValues[stringIndex]}
                onChange={(event) => selectTune(event.target.value, stringIndex)}
              >
                <MenuItem value={4}>C</MenuItem>
                <MenuItem value={5}>{keySign ? 'C#' : 'Db'}</MenuItem>
                <MenuItem value={6}>D</MenuItem>
                <MenuItem value={7}>{keySign ? 'D#' : 'Eb'}</MenuItem>
                <MenuItem value={8}>E</MenuItem>
                <MenuItem value={9}>F</MenuItem>
                <MenuItem value={10}>{keySign ? 'F#' : 'Gb'}</MenuItem>
                <MenuItem value={11}>G</MenuItem>
                <MenuItem value={12}>{keySign ? 'G#' : 'Ab'}</MenuItem>
                <MenuItem value={1}>A</MenuItem>
                <MenuItem value={2}>{keySign ? 'A#' : 'Bb'}</MenuItem>
                <MenuItem value={3}>B</MenuItem>
              </Select>
            );
          })}
        </div>
        <div className="noteFret">
          {tuneValues.map((startTune, stringIndex) => (
            <div className="string" key={stringIndex}>
              {setFret(startTune + 1).map((fretNote, fretIndex) => {
                const noteLabel = keySign ? sharpNote[fretNote - 1] : flatNote[fretNote - 1];
                const chordTone = setChordTone(fretNote);
                // const isInlay = [3, 5, 7, 9, 12, 15, 17, 19, 21].includes(fretIndex + 1);
                // const isDoubleInlay = (fretIndex + 1) % 12 == 0;
                return (
                  <div className={`fret`} key={fretIndex}>
                    {allNote ? (
                      fretNote == chordTone ? (
                        <div style={{ color: 'red' }}>{noteLabel}</div>
                      ) : (
                        <div>{noteLabel}</div>
                      )
                    ) : fretNote == chordTone ? (
                      <div>{noteLabel}</div>
                    ) : (
                      ''
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <Button onClick={resetTune}>Reset Tune</Button>
    </div>
  );
}
