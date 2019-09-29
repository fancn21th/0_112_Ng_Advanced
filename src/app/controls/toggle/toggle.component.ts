import {
  Component,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  ContentChild
} from "@angular/core";

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

  setOnState(on: boolean) {
    this.on = on;
    this.toggled.emit(this.on);
  }

  toggle = e => {
    e.preventDefault();
    this.setOnState(!this.on);
  };
}
