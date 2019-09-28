import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SwitchComponent } from "./switch/switch.component";
import { ToggleButtonComponent } from "./toggle.button/toggle.button.component";
import { ToggleComponent } from "./toggle.component";

@NgModule({
  declarations: [ToggleComponent, SwitchComponent, ToggleButtonComponent],
  imports: [CommonModule],
  exports: [ToggleComponent, ToggleButtonComponent]
})
export class ToggleModule {}
