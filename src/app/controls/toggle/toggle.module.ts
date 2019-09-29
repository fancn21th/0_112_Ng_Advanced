import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SwitchComponent } from "./switch/switch.component";
import { ToggleComponent } from "./toggle.component";
import { TogglerDirective } from "./toggler.directive";

@NgModule({
  declarations: [ToggleComponent, SwitchComponent, TogglerDirective],
  imports: [CommonModule],
  exports: [ToggleComponent, SwitchComponent, TogglerDirective]
})
export class ToggleModule {}
