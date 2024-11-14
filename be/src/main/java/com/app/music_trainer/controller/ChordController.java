package com.app.music_trainer.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.music_trainer.dto.ChordDto;
import com.app.music_trainer.service.ChordService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api/chord")
public class ChordController {

  @Autowired
  private ChordService chordService;

  @GetMapping("/all")
  public List<ChordDto> getChordList() {
    return chordService.getChordList();
  }

  @GetMapping("")
  public ResponseEntity<ChordDto> getChord(@RequestParam(value = "id") Integer id) {
    return ResponseEntity.ok(chordService.getChord(id));
  }

}
