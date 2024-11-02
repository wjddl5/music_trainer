package com.app.music_trainer.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.app.music_trainer.dto.ChordDto;
import com.app.music_trainer.entity.Chord;

@Mapper
public interface ChordMapper {

  ChordMapper INSTANCE = Mappers.getMapper(ChordMapper.class);

  ChordDto toDto(Chord entity);

  List<ChordDto> toDtoList(List<Chord> entity);

  Chord toEntity(ChordDto dto);

}
