package com.app.music_trainer.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
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

  @OneToOne
  @JoinColumn(name = "chord_tone1", referencedColumnName = "note_idx", nullable = false)
  private Integer chTone1;

  @OneToOne
  @JoinColumn(name = "chord_tone2", referencedColumnName = "note_idx", nullable = false)
  private Integer chTone2;

  @OneToOne
  @JoinColumn(name = "chord_tone3", referencedColumnName = "note_idx", nullable = true)
  private Integer chTone3;

  @OneToOne
  @JoinColumn(name = "chord_tone4", referencedColumnName = "note_idx", nullable = true)
  private Integer chTone4;

  @OneToOne
  @JoinColumn(name = "chord_tone5", referencedColumnName = "note_idx", nullable = true)
  private Integer chTone5;

  @OneToOne
  @JoinColumn(name = "chord_tone6", referencedColumnName = "note_idx", nullable = true)
  private Integer chTone6;

  @OneToOne
  @JoinColumn(name = "chord_tone7", referencedColumnName = "note_idx", nullable = true)
  private Integer chTone7;
}
