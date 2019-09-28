import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SwitchComponent } from "./switch/switch.component";
import { ToggleButtonComponent } from "./toggle.button/toggle.button.component";
import { ToggleComponent } from "./toggle.component";
import { ToggleOnComponent } from "./toggle.on/toggle.on.component";
import { ToggleOffComponent } from "./toggle.off/toggle.off.component";

@NgModule({
  declarations: [
    ToggleComponent,
    SwitchComponent,
    ToggleButtonComponent,
    ToggleOnComponent,
    ToggleOffComponent
  ],
  imports: [CommonModule],
  exports: [
    ToggleComponent,
    ToggleButtonComponent,
    ToggleOnComponent,
    ToggleOffComponent
  ]
})
export class ToggleModule {}
