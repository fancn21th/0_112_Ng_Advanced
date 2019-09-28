import { Component, OnInit } from "@angular/core";
import { ToggleDirective } from "../toggle.directive";

@Component({
  selector: "toggle-on",
  template: "<ng-content *ngIf='toggle.on'></ng-content>"
})
export class ToggleOnComponent {
  constructor(public toggle: ToggleDirective) {}
}
