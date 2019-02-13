import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  getSource(){
    return[
      {NO : 1, Hobby : "Berlari", Keterangan : "lari 1 jam tiap hari"},
      {NO : 2, Hobby : "Senam", Keterangan : "senam tiap sore"},
      {NO : 3, Hobby : "Bermain Musik", Keterangan : "Bermain musik saat waktu senggang"},
    ];
  }

  getHobby(){
    return [
      {Hobby : "Hobby" ,saya : "saya"}
    ];
  }

  constructor() { }
}
