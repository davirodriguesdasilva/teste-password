import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputPassword]'
})
export class InputPasswordDirective {

  tipoInput = true;

  constructor(private el: ElementRef) {
    this.montaElementos();
   }

   montaElementos(){
    const form = this.el.nativeElement.parentNode;
    const svg = document.createElement('svg');
    svg.innerHTML = `
    <svg class="eye-button eye-open" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.43255 12C9.43255 10.6126 10.5422 9.5 11.9101 9.5C13.2779 9.5 14.3876 10.6126 14.3876 12C14.3876 13.3874 13.2779 14.5 11.9101 14.5C10.5422 14.5 9.43255 13.3874 9.43255 12ZM6.44755 12C6.44755 15.0326 8.89107 17.5 11.9101 17.5C14.929 17.5 17.3726 15.0326 17.3726 12C17.3726 8.96741 14.929 6.5 11.9101 6.5C8.89107 6.5 6.44755 8.96741 6.44755 12ZM1.53126 12C3.22153 7.8893 7.23164 5 11.9101 5C16.5885 5 20.5986 7.8893 22.2888 12C20.5986 16.1107 16.5885 19 11.9101 19C7.23164 19 3.22153 16.1107 1.53126 12Z" fill="#1E2F65" stroke="black" />
    </svg>
    `

    svg.addEventListener('click', (event) => {
      this.tipoInput = !this.tipoInput;
      this.tipoInput ? this.el.nativeElement.setAttribute('type', 'text'): this.el.nativeElement.setAttribute('type', 'password')
    });

    form.appendChild(svg)
   }

}
