package com.app.music_trainer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.music_trainer.entity.Chord;

@Repository
public interface ChordRepository extends JpaRepository<Chord, Integer> {

}
