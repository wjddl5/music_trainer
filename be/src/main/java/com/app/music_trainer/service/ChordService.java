package com.app.music_trainer.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.music_trainer.dto.ChordDto;
import com.app.music_trainer.entity.Chord;
import com.app.music_trainer.mapper.ChordMapper;
import com.app.music_trainer.repository.ChordRepository;

@Service
public class ChordService {

  @Autowired
  private ChordRepository chordRepository;

  public ChordDto getChord(Integer id) {
    Optional<Chord> op_chord = chordRepository.findById(id);
    Chord chord = op_chord.get();

    return ChordMapper.INSTANCE.toDto(chord);
  }

}
