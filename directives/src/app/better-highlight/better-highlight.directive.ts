import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "blue";

  @HostBinding("style.backgroundColor") backgroundColor: string;

  ngOnInit() {
    //this.renderer.setStyle(
    //  this.elRef.nativeElement,
    //  "background-color",
    //  "blue"
    // );

    this.backgroundColor = this.defaultColor;
  }

  @HostListener("mouseenter") mouseover(eventDate: Event) {
    // this.renderer.setStyle(
    //  this.elRef.nativeElement,
    //  "background-color",
    //  "blue"
    //);
    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave") mouseleave(eventDate: Event) {
    //this.renderer.setStyle(
    //  this.elRef.nativeElement,
    //  "background-color",
    //  "transparent"
    //);
    this.backgroundColor = this.defaultColor;
  }
}
