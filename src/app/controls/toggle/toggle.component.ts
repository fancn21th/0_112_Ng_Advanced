import {
  Component,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  ContentChild
} from "@angular/core";

export interface ToggleState {
  on: boolean;
}

export type ToggleStateReducer = (
  state: ToggleState,
  changes: Partial<ToggleState>
) => ToggleState;

@Component({
  selector: "toggle",
  template: `
    <ng-container
      *ngTemplateOutlet="
        layoutTemplate;
        context: {
          on: this.on,
          toggle: this.toggle,
          fns: { toggle: this.toggle }
        }
      "
    >
    </ng-container>
  `
})
export class ToggleComponent {
  @Input() on;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  @ContentChild(TemplateRef, { static: false })
  @Input()
  layoutTemplate: TemplateRef<any>;

  @Input() stateReducer: ToggleStateReducer = (state, changes) => ({
    ...state,
    ...changes
  });

  setOnState(on: boolean) {
    const oldState = { on: this.on };
    const newState = this.stateReducer(oldState, {
      on
    });
    if (oldState !== newState) {
      this.on = on;
      this.toggled.emit(this.on);
    }
  }

  toggle = e => {
    e.preventDefault();
    this.setOnState(!this.on);
  };
}
