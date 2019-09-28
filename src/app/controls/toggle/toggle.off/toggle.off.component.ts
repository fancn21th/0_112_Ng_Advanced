import { Component, OnInit } from "@angular/core";
import { ToggleDirective } from "../toggle.directive";

@Component({
  selector: "toggle-off",
  template: "<ng-content *ngIf='!toggle.on'></ng-content>"
})
export class ToggleOffComponent {
  constructor(public toggle: ToggleDirective) {}
}
