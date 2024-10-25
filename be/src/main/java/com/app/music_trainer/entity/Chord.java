package com.app.music_trainer.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Table(name = "chords")
public class Chord {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "chord_id", nullable = false)
  private Integer id;

  @Column(name = "chord_name", nullable = false)
  private String chName;

  @ManyToOne
  @JoinColumn(name = "chord_tone1", referencedColumnName = "note_idx", nullable = false)
  private Note chTone1;

  @ManyToOne
  @JoinColumn(name = "chord_tone2", referencedColumnName = "note_idx", nullable = false)
  private Note chTone2;

  @ManyToOne
  @JoinColumn(name = "chord_tone3", referencedColumnName = "note_idx", nullable = true)
  private Note chTone3;

  @ManyToOne
  @JoinColumn(name = "chord_tone4", referencedColumnName = "note_idx", nullable = true)
  private Note chTone4;

  @ManyToOne
  @JoinColumn(name = "chord_tone5", referencedColumnName = "note_idx", nullable = true)
  private Note chTone5;

  @ManyToOne
  @JoinColumn(name = "chord_tone6", referencedColumnName = "note_idx", nullable = true)
  private Note chTone6;

  @ManyToOne
  @JoinColumn(name = "chord_tone7", referencedColumnName = "note_idx", nullable = true)
  private Note chTone7;
}
