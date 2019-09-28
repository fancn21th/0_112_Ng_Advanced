import { Component, Input } from "@angular/core";

@Component({
  selector: "switch",
  templateUrl: "./switch.component.html",
  styleUrls: ["./switch.component.css"]
})
export class SwitchComponent {
  @Input() on: boolean;
}
