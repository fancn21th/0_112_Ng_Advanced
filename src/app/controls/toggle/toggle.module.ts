import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SwitchComponent } from "./switch/switch.component";
import { ToggleComponent } from "./toggle.component";

@NgModule({
  declarations: [ToggleComponent, SwitchComponent],
  imports: [CommonModule],
  exports: [ToggleComponent, SwitchComponent]
})
export class ToggleModule {}
