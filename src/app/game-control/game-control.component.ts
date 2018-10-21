import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  @Output() secondsFired = new EventEmitter<Number>();
  gameSeconds;
  lastNumber = 0;

  constructor() {}

  ngOnInit() {}

  startGame() {
    this.gameSeconds = setInterval(() => {
      this.secondsFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  pauseGame() {
    clearInterval(this.gameSeconds);
  }
}
