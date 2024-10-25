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
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Entity
@Table(name = "scales")
public class Scale {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "scale_id", nullable = false)
  private Integer id;

  @Column(name = "scale_name", nullable = false)
  private String scName;

  @ManyToOne
  @JoinColumn(name = "scale_note1", referencedColumnName = "note_idx", nullable = false)
  private Note scNote1;

  @ManyToOne
  @JoinColumn(name = "scale_note2", referencedColumnName = "note_idx", nullable = true)
  private Note scNote2;

  @ManyToOne
  @JoinColumn(name = "scale_note3", referencedColumnName = "note_idx", nullable = true)
  private Note scNote3;

  @ManyToOne
  @JoinColumn(name = "scale_note4", referencedColumnName = "note_idx", nullable = true)
  private Note scNote4;

  @ManyToOne
  @JoinColumn(name = "scale_note5", referencedColumnName = "note_idx", nullable = true)
  private Note scNote5;

  @ManyToOne
  @JoinColumn(name = "scale_note6", referencedColumnName = "note_idx", nullable = true)
  private Note scNote6;

  @ManyToOne
  @JoinColumn(name = "scale_note7", referencedColumnName = "note_idx", nullable = true)
  private Note scNote7;

  @ManyToOne
  @JoinColumn(name = "scale_note8", referencedColumnName = "note_idx", nullable = true)
  private Note scNote8;

  @ManyToOne
  @JoinColumn(name = "scale_note9", referencedColumnName = "note_idx", nullable = true)
  private Note scNote9;

  @ManyToOne
  @JoinColumn(name = "scale_note10", referencedColumnName = "note_idx", nullable = true)
  private Note scNote10;

  @ManyToOne
  @JoinColumn(name = "scale_note11", referencedColumnName = "note_idx", nullable = true)
  private Note scNote11;

  @ManyToOne
  @JoinColumn(name = "scale_note12", referencedColumnName = "note_idx", nullable = true)
  private Note scNote12;
}
