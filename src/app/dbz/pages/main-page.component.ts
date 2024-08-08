import { Component } from '@angular/core';
import { dbzService } from '../services/dbz.serive';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent

{
  constructor( private dbzService:dbzService) {}

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);

  }

  onNewCharacter(character: Character) {
    this.dbzService.addCharacter(character);
  }


}


