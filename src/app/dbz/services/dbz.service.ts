import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzServiceTsService {
  public characters: Character[] = [
    {
      name: 'Krilin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 10000,
    },
    {
      name: 'Freezer',
      power: 800,
    },
  ];

  onNewCharacter(character: Character) {
    console.log(character);
    this.characters.push(character);
  }
  onDeleteCharacter(index: number) {
    this.characters.splice(index, 1);
  }
  constructor() {}
}
