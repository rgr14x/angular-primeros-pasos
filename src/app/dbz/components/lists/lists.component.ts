import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css',

})
export class ListsComponent {

  @Input()
  public characterList: Character[]= [{
    name: 'Trunk',
    power:10,
  }]

  //onDeleteId = Index value : number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void {
    // TODO: Emitir el ID del personaje

    if(!id) return;

    this.onDelete.emit(id);
  }


}

