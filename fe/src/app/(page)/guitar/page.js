"use client";
import React, { useEffect, useState } from "react";
import "../../style/css/Fretboard.css";
import axios from "axios";
import { Button, MenuItem, Select } from "@mui/material";

export default function page() {
  const API_URL = "/api/chord";

  // Setting
  const [key, setKey] = useState(1);
  const [keyStr, setKeyStr] = useState("C");
  const [string, setString] = useState(6);

  // Chord
  const [chordId, setChordId] = useState(1);
  const [chordName, setChordName] = useState("Major");

  const [chordToneAr, setChordToneAr] = useState([]);

  const [chordTone1, setChordTone1] = useState(null);
  const [chordTone2, setChordTone2] = useState(null);
  const [chordTone3, setChordTone3] = useState(null);
  const [chordTone4, setChordTone4] = useState(null);
  const [chordTone5, setChordTone5] = useState(null);
  const [chordTone6, setChordTone6] = useState(null);
  const [chordTone7, setChordTone7] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios.get(API_URL, { params: { id: chordId } }).then((res) => {
      var ar = Object.keys(res.data)
        .filter((key) => key.startsWith("chTone"))
        .map((key) => res.data[key]);

      console.log(JSON.stringify(ar));
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
    console.log("ar :: " + ar);
  }

  function selectKey(event) {
    var key_num = 1;
    var key_str = event.target.value;

    switch (key_str) {
      case "C":
        key_num = 4;
        break;
      case "D":
        key_num = 6;
        break;
      case "E":
        key_num = 8;
        break;
    }
    setKey(key_num);
    setKeyStr(key_str);
  }

  function selectChord(event) {
    var chord_str = event.target.value;

    switch (chord_str) {
      case "Major":
        setChordId(1);
        break;
      case "minor":
        setChordId(2);
        break;
    }
  }

  function search() {
    getData();
  }

  return (
    <div>
      <Select id="key-select" value={keyStr} label="Key" onChange={selectKey}>
        <MenuItem value={"C"}>C</MenuItem>
        <MenuItem value={"D"}>D</MenuItem>
        <MenuItem value={"E"}>E</MenuItem>
      </Select>
      <Select id="chord-select" value={chordName} label="Chord" onChange={selectChord}>
        <MenuItem value={"Major"}>Major</MenuItem>
        <MenuItem value={"minor"}>minor</MenuItem>
      </Select>
      <Button variant="contained" onClick={search}>
        Search
      </Button>
    </div>
  );
}
