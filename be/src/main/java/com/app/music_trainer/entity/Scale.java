package com.app.music_trainer.entity;

import jakarta.persistence.Column;
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
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Table(name = "scales")
public class Scale {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "scale_id", nullable = false)
  private Integer id;

  @Column(name = "scale_name", nullable = false)
  private String scName;

  @OneToOne
  @JoinColumn(name = "scale_note1", referencedColumnName = "note_idx", nullable = false)
  private Integer scNote1;

  @OneToOne
  @JoinColumn(name = "scale_note2", referencedColumnName = "note_idx", nullable = true)
  private Integer scNote2;

  @OneToOne
  @JoinColumn(name = "scale_note3", referencedColumnName = "note_idx", nullable = true)
  private Integer scNote3;

  @OneToOne
  @JoinColumn(name = "scale_note4", referencedColumnName = "note_idx", nullable = true)
  private Integer scNote4;

  @OneToOne
  @JoinColumn(name = "scale_note5", referencedColumnName = "note_idx", nullable = true)
  private Integer scNote5;

  @OneToOne
  @JoinColumn(name = "scale_note6", referencedColumnName = "note_idx", nullable = true)
  private Integer scNote6;

  @OneToOne
  @JoinColumn(name = "scale_note7", referencedColumnName = "note_idx", nullable = true)
  private Integer scNote7;

  @OneToOne
  @JoinColumn(name = "scale_note8", referencedColumnName = "note_idx", nullable = true)
  private Integer scNote8;

  @OneToOne
  @JoinColumn(name = "scale_note9", referencedColumnName = "note_idx", nullable = true)
  private Integer scNote9;

  @OneToOne
  @JoinColumn(name = "scale_note10", referencedColumnName = "note_idx", nullable = true)
  private Integer scNote10;

  @OneToOne
  @JoinColumn(name = "scale_note11", referencedColumnName = "note_idx", nullable = true)
  private Integer scNote11;

  @OneToOne
  @JoinColumn(name = "scale_note12", referencedColumnName = "note_idx", nullable = true)
  private Integer scNote12;
}
