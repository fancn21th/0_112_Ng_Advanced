import { Component, OnInit } from "@angular/core";
import { ToggleComponent } from "../toggle.component";

@Component({
  selector: "toggle-button",
  template: "<switch [on]='toggle.on' (click)='onClick($event)'></switch>"
})
export class ToggleButtonComponent {
  constructor(public toggle: ToggleComponent) {}

  onClick(e) {
    // MUST add this line below in order to avoid triggering click event twice
    e.preventDefault();
    this.toggle.setOnState(!this.toggle.on);
  }
}
