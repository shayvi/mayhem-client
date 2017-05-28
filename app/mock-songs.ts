import { Song } from './classes/song';
import { Band } from './classes/band';
import { Album } from './classes/album';

export const LINKINPARK: Band = {name: 'Linkin Park', origin: 'USA'};
export const METEORA: Album = {band: LINKINPARK, name: "Meteora", genre: 'Nu Metal', year : 2003};


export const SONGS: Song[] = [
  {album: METEORA, name: 'Forewordd', id: 1, rate: 1},
  {album: METEORA, name: 'Dont Stay', id: 2, rate: 7},
  {album: METEORA, name: 'Somewhere I Belong', id: 3, rate: 10},
  {album: METEORA, name: 'Lying from You', id: 4, rate: 8},
  {album: METEORA, name: 'Hit the Floor', id: 5, rate: 5}
];



