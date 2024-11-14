"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, MenuItem, Select, Switch } from "@mui/material";
import Fretboard from "@/app/component/fretboard";

export default function page() {
  const API_URL = "/api/chord";

  // Setting
  const [key, setKey] = useState(4); // C key
  const [string, setString] = useState(6); // count of guitar string
  const [keySign, setKeySign] = useState(true); // key signature : true = sharp(#), false = flat(b)
  const [viewKeySign, setViewKeySign] = useState(true);

  // Chord
  const [chordList, setChordList] = useState([]);
  const [chordId, setChordId] = useState(1);

  const [chordToneAr, setChordToneAr] = useState([]);
  const [chordTone1, setChordTone1] = useState(null);
  const [chordTone2, setChordTone2] = useState(null);
  const [chordTone3, setChordTone3] = useState(null);
  const [chordTone4, setChordTone4] = useState(null);
  const [chordTone5, setChordTone5] = useState(null);
  const [chordTone6, setChordTone6] = useState(null);
  const [chordTone7, setChordTone7] = useState(null);

  useEffect(() => {
    getChordList();
  }, []);

  // Axios Function
  function getChordList() {
    axios.get(`${API_URL}/all`).then((res) => {
      setChordList(res.data);
    });
  }

  function getChord() {
    axios.get(API_URL, { params: { id: chordId } }).then((res) => {
      var ar = Object.keys(res.data)
        .filter((key) => key.startsWith("chTone"))
        .map((key) => res.data[key]);
      Interval(ar);
    });
  }

  // Function
  function Interval(ar) {
    ar.forEach((value, index) => {
      var num = 0;
      if (value != null) {
        num = value.id + (key - 1);
        if (num > 12) {
          num -= 12;
        }
        ar[index] = num;
      }
    });
    setChordToneAr(ar);
  }

  function selectKey(event) {
    setKey(event.target.value);
  }

  function selectChord(event) {
    setChordId(event.target.value);
  }

  function selectString(event) {
    setString(event.target.value);
  }

  function selectKeySign() {
    if (keySign) setKeySign(false);
    else setKeySign(true);
  }

  function search() {
    getChord();
  }

  return (
    <div>
      <Switch id="keySign-select" checked={keySign} onChange={selectKeySign}></Switch>
      <Select id="string-select" value={string} label={"String"} onChange={selectString}>
        <MenuItem value={6}>6 String</MenuItem>
        <MenuItem value={7}>7 String</MenuItem>
        <MenuItem value={8}>8 String</MenuItem>
      </Select>
      <Select id="key-select" value={key} label="Key" onChange={selectKey}>
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
      <Select id="chord-select" value={chordId} label="Chord" onChange={selectChord}>
        {chordList.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.chName}
          </MenuItem>
        ))}
      </Select>
      <Button id="search-btn" variant="contained" onClick={search}>
        Search
      </Button>
      <div>
        <Fretboard string={string} chordToneAr={chordToneAr} keySign={keySign} />
      </div>
    </div>
  );
}
