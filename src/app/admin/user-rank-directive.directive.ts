import {AfterViewInit, Directive, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';

@Directive({
  selector: '[appUserRankDirective]'
})
export class UserRankDirectiveDirective implements AfterViewInit {
  @Input() nick:string;
  @Input() color:string;
  @Input() font:string;
  @Input() pierwszyDiv: HTMLDivElement;

  oldColor='';
  oldFont='';
  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
  }

  changeLook(old: boolean):void{
    if(!old){
      this.element.nativeElement.style.color = this.color;
      this.element.nativeElement.style.fontFamily = this.font;
      if(this.nick ==='admin'){
        this.element.nativeElement.innerText = 'Jest to Administrator serwera o nicku: ' + this.nick;
      }
      else{
        this.element.nativeElement.innerText = 'Jest to użytkownik serwera o nicku: ' + this.nick;
      }
    } else {
      this.element.nativeElement.style.color = this.oldColor;
      this.element.nativeElement.style.fontFamily = this.oldFont;
      this.element.nativeElement.innerText = this.nick;
    }
  }
  @HostListener('window:mouseover', ['$event'])
  handleWindowMouseOver(event: Event) {
    if (this.pierwszyDiv && this.pierwszyDiv.contains(event.target as Node)) {
      this.changeLook(false);
    }
  }
  @HostListener('window:mouseout', ['$event'])
  handleWindowMouseOut(event: MouseEvent) {
    if (this.pierwszyDiv && !this.pierwszyDiv.contains(event.relatedTarget as Node)) {
      this.changeLook(true);
    }
  }

}
