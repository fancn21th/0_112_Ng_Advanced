import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToggleComponent } from "./toggle/toggle.component";

@NgModule({
  declarations: [ToggleComponent],
  imports: [CommonModule],
  exports: [ToggleComponent]
})
export class ControlsModule {}
