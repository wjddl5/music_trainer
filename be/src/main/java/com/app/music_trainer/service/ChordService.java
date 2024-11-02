package com.app.music_trainer.service;

import java.util.List;
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

  public List<ChordDto> getChordList() {
    List<Chord> chord_list = chordRepository.findAll();

    return ChordMapper.INSTANCE.toDtoList(chord_list);
  }

  public ChordDto getChord(Integer id) {
    Optional<Chord> op_chord = chordRepository.findById(id);
    Chord chord = op_chord.get();

    return ChordMapper.INSTANCE.toDto(chord);
  }

}
