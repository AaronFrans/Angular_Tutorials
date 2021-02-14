import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  interval: number;

  @Output('fired') emitLastNumber = new EventEmitter<number>();

  lastNumber: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onStartGame() {
    this.interval = window.setInterval(() => {
      this.emit();
    }, 5000);
  }

  emit() {
    this.lastNumber++;
    this.emitLastNumber.emit(this.lastNumber);
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
