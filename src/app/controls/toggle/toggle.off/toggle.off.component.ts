import { Component } from "@angular/core";
import { ToggleProviderDirective } from "../toggleProvider.directive";

@Component({
  selector: "toggle-off",
  template: "<ng-content *ngIf='!toggleProvider.toggle.on'></ng-content>"
})
export class ToggleOffComponent {
  constructor(public toggleProvider: ToggleProviderDirective) {}
}
