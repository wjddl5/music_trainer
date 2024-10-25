package com.app.music_trainer.dto;

import com.app.music_trainer.entity.Note;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ChordDto {

  private Integer id;
  private String chName;
  private Note chTone1;
  private Note chTone2;
  private Note chTone3;
  private Note chTone4;
  private Note chTone5;
  private Note chTone6;
  private Note chTone7;

}
