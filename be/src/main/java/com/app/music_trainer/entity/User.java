package com.app.music_trainer.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Table(name = "users")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "user_idx", nullable = false)
  private Integer id;

  @Column(name = "user_id", nullable = false)
  private String usId;

  @Column(name = "user_pw", nullable = false)
  private String usPw;

  @Column(name = "user_name", nullable = false)
  private String usName;

  @Column(name = "user_type", nullable = false)
  private String usType;

  @Column(name = "user_status", nullable = false)
  private Integer usStatus;

}
