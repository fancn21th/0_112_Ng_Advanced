import { Component } from "@angular/core";
import { ToggleState } from "./controls/toggle/toggle.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  timesClicked: number = 0;
  LIMIT = 3;
  showMessage(value) {
    console.log(value);
  }

  stateReducer = (state: ToggleState, changes: Partial<ToggleState>) => {
    if (this.timesClicked > this.LIMIT) {
      return state;
    }
    if (changes.on !== undefined) {
      this.timesClicked = this.timesClicked + 1;
      console.log(this.timesClicked);
    }
    return { ...state, ...changes };
  };
}
