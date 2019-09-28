import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "toggle",
  template: "<ng-content></ng-content>"
})
export class ToggleComponent {
  @Input() on;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  setOnState(on: boolean) {
    this.on = on;
    this.toggled.emit(this.on);
  }
}
