import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-name',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private _dbzService: DbzService){}

  get characters(): Character[] {
    return [...this._dbzService.characters];
  }

  deleteCharacterById(id: string): void {
    this._dbzService.deleteCharacterById(id);
  }

  addCharacter(character: Character): void {
    this._dbzService.addCharacter(character);
  }

}
