import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToggleModule } from "./toggle/toggle.module";
import { FooComponent } from "./foo/foo.component";

@NgModule({
  declarations: [FooComponent],
  imports: [CommonModule, ToggleModule],
  exports: [ToggleModule, FooComponent]
})
export class ControlsModule {}
