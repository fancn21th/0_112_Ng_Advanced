import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToggleModule } from "./toggle/toggle.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, ToggleModule],
  exports: [ToggleModule]
})
export class ControlsModule {}
