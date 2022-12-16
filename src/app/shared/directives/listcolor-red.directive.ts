import { OnInit, Renderer2 } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appListcolorRed]'
})
export class ListColorRedDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'red'
    )
  }
}
