import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "toggle",
  templateUrl: "./toggle.component.html",
  styleUrls: ["./toggle.component.css"]
})
export class ToggleComponent implements OnInit {
  @Input() on: boolean = false;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  onClick() {
    this.on = !this.on;
    this.toggled.emit(this.on);
  }

  ngOnInit() {}
}
