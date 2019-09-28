import { Directive, Host } from "@angular/core";
import { ToggleDirective } from "./toggle.directive";

@Directive({
  selector: "toggle, [toggle]"
})
export class ToggleProviderDirective {
  toggle: ToggleDirective = this.toggleDirective;
  constructor(@Host() private toggleDirective: ToggleDirective) {}
}
