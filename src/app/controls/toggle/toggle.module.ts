import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SwitchComponent } from "./switch/switch.component";
import { ToggleButtonComponent } from "./toggle.button/toggle.button.component";
import { ToggleDirective } from "./toggle.directive";
import { ToggleOnComponent } from "./toggle.on/toggle.on.component";
import { ToggleOffComponent } from "./toggle.off/toggle.off.component";
import { ToggleProviderDirective } from "./toggle-provider.directive";

@NgModule({
  declarations: [
    SwitchComponent,
    ToggleButtonComponent,
    ToggleOnComponent,
    ToggleOffComponent,
    ToggleDirective,
    ToggleProviderDirective
  ],
  imports: [CommonModule],
  exports: [
    ToggleDirective,
    ToggleButtonComponent,
    ToggleOnComponent,
    ToggleOffComponent,
    ToggleProviderDirective
  ]
})
export class ToggleModule {}
