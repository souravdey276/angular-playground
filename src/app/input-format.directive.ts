import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
 // @Input ('format') format: string = '';
   @Input ('appInputFormat') format: string = '';
constructor(private el:ElementRef) { }
  // @HostListener('blur') onBlur(){
  //   console.log('On Blur')
  //}
   @HostListener('blur') onBlur(){
    let value = this.el.nativeElement.value;
   // this.el.nativeElement.value = value.toLowerCase();
   if(this.format ==='uppercase'){
     this.el.nativeElement.value=value.toUpperCase();
   }
   if(this.format ==='lowercase'){
     this.el.nativeElement.value=value.toLowerCase();
   }
  }
  @HostListener('focus') onFocus(){
    console.log(' OnFocus')
  }
  

}
