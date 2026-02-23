import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector : '[animateOnScroll]',
    standalone : true
})
export class AnimateOnScrollDirective implements OnInit{
    @Input() animationType: 'left' | 'right' | 'fade' = 'left';   

    constructor(
        private el : ElementRef,
        private renderer : Renderer2
    ){}

    ngOnInit(): void {
        this.renderer.addClass(this.el.nativeElement, `animate-${this.animationType}`);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    this.renderer.addClass(this.el.nativeElement, 'show');
                    observer.disconnect();
                }
            },
            { threshold : 0.2 }
        );

        observer.observe(this.el.nativeElement);
    }

}