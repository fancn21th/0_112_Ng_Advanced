import { Directive, Input, Output, EventEmitter } from "@angular/core";

@Directive({
  selector: "toggle, [toggle]"
})
export class ToggleDirective {
  @Input() on;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  setOnState(on: boolean) {
    this.on = on;
    this.toggled.emit(this.on);
  }
}
