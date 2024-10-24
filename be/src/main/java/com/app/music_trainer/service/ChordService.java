package com.app.music_trainer.service;

import org.springframework.stereotype.Service;

import com.app.music_trainer.entity.Chord;

@Service
public class ChordService {

  public Chord getChord(Integer id) {
    return new Chord();
  }

}
