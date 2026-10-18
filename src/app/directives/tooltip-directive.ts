import { Directive, ElementRef, Input, OnInit, ViewContainerRef, ComponentRef, OnDestroy } from '@angular/core';
import { ToolTipBoxComponent } from '../tool-tip-box-component/tool-tip-box-component';

@Directive({
  selector: '[appTooltipDirective]'
})

export class TooltipDirective implements OnInit, OnDestroy {

  // Passing a string like 'appTooltipDirective' into the @Input() decorator creates an input alias or alternative variable name to explain it loosley. 
  // This tells Angular to look for an attribute named appTooltipDirective in your HTML template
  // instead of using the class property name tooltipText.
  //THIS IS STANDARD PRACTICE AS THIS ACTIVATES THE DIRECTIVE AND PASSES DATA TO IT AT THE SAME TIME.
  @Input('appTooltipDirective') tooltipText: string = '';


  @Input() delay: number = 500;       // Delay before popup (ms), if we do not define in html -- we default to this
  @Input() duration: number = 4000;   // How long it stays (ms), if we do not define in html -- we default to this


  // A ComponentRef (Component Reference) is a tool that acts as a remote control for a component that you created dynamically using code
  // you are creating a property to hold that remote control so you can talk to, update, or destroy your tooltip later.
  // Why do you need a ComponentRef? or things like tooltips, dropdowns, modal popups, or toast notifications, you don't always want them sitting in the HTML waiting. Instead, you might want your code to say: "When the user hovers over this text, create a ToolTipBoxComponent out of thin air, and when they look away, destroy it."
  // Because your code created it manually, your code needs a way to track it. That trackable object is the ComponentRef.

  private componentRef: ComponentRef<ToolTipBoxComponent> | null = null; //a component REFerence to the ToolTipBoxComponent

  // ========================================================================================================================

  private showTimeoutId: any;
  private hideTimeoutId: any;

  constructor(
    private elementRef: ElementRef, 
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    // Automatically trigger the tooltip pipeline on initialization
    this.showTimeoutId = setTimeout(() => {
      this.createTooltip();
    }, this.delay);
  }

  ngOnDestroy() {
    // Strict lifecycle cleanup to prevent memory leaks if the page changes early
    clearTimeout(this.showTimeoutId);
    clearTimeout(this.hideTimeoutId);
    this.destroyTooltip();
  }

  private createTooltip() {
    if (this.componentRef) return;

    // 1. Create the component dynamically inside the view container
    this.componentRef = this.viewContainerRef.createComponent(ToolTipBoxComponent);
    
    // 2. Pass the text to the component's signal. HERE! we are gettinf direct access to the components properties using .componentRef.instance.
    this.componentRef.instance.text.set(this.tooltipText);

    // 3. Position the tooltip directly above the host element
    this.positionTooltip();

    // 4. Trigger fade-in animation
    setTimeout(() => this.componentRef?.instance.animate.set(true), 0);

    // 5. Set up auto-destruction timer
    this.hideTimeoutId = setTimeout(() => {
      this.destroyTooltip();
    }, this.duration);
  }

  private positionTooltip() {
    if (!this.componentRef) return;

    const hostElement = this.elementRef.nativeElement;
    const tooltipElement = this.componentRef.location.nativeElement.querySelector('.tooltip-bubble');

    // Make sure the host has a position style context if it doesn't already
    if (window.getComputedStyle(hostElement).position === 'static') {
      hostElement.style.position = 'relative';
    }

    // Position the inner bubble relative to the parent host element
    tooltipElement.style.top = '120%';
    tooltipElement.style.left = '50%';
    tooltipElement.style.transform = 'translateX(-50%)';
  }

  private destroyTooltip() {
    if (this.componentRef) {
      // Trigger fade-out animation first
      this.componentRef.instance.animate.set(false);
      
      // Wait for the 200ms CSS transition to finish, then completely destroy from DOM
      setTimeout(() => {
        this.viewContainerRef.clear();
        this.componentRef = null;
      }, 200);
    }
  }

}
