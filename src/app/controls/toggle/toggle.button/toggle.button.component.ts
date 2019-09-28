import { Component } from "@angular/core";
import { ToggleProviderDirective } from "../toggle-provider.directive";

@Component({
  selector: "toggle-button",
  template:
    "<switch [on]='toggleProvider.toggle.on' (click)='onClick($event)'></switch>"
})
export class ToggleButtonComponent {
  constructor(public toggleProvider: ToggleProviderDirective) {}

  onClick(e) {
    // MUST add this line below in order to avoid triggering click event twice
    e.preventDefault();
    this.toggleProvider.toggle.setOnState(!this.toggleProvider.toggle.on);
  }
}
