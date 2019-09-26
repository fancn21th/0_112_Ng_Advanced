import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "toggle",
  templateUrl: "./toggle.component.html",
  styleUrls: ["./toggle.component.css"]
})
export class ToggleComponent implements OnInit {
  @Input() on: boolean;

  constructor() {}

  onClick() {
    this.on = !this.on;
  }

  ngOnInit() {}
}
