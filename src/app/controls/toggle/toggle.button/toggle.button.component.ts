import { Component, OnInit } from "@angular/core";
import { ToggleDirective } from "../toggle.directive";

@Component({
  selector: "toggle-button",
  template: "<switch [on]='toggle.on' (click)='onClick($event)'></switch>"
})
export class ToggleButtonComponent {
  constructor(public toggle: ToggleDirective) {}

  onClick(e) {
    // MUST add this line below in order to avoid triggering click event twice
    e.preventDefault();
    this.toggle.setOnState(!this.toggle.on);
  }
}
