import { Component, Input, OnInit } from '@angular/core';
import { IGame } from 'src/app/models';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.css']
})
export class GameTabsComponent implements OnInit {
  @Input() game!: IGame;
  
  constructor() { }

  ngOnInit(): void {
  }

}