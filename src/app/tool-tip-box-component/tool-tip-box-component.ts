import { Component, signal } from '@angular/core';

//This component uses the TooltipDirective which is a Attribute Directive.

// made this component using the following. Html and CSS files were not required, it will all be within the template.
// ng generate component component-name --inline-template --inline-style

@Component({
  imports: [],
  standalone: true,
  selector: 'app-tool-tip-box',
  template: `
    <div class="tooltip-bubble" [class.fade-in]="animate()">
      {{ text() }}
    </div>
  `,
  styles: [`
    .tooltip-bubble {
      text-align: center;
      position: absolute;
      background-color: #bfc5ca;
      color: #fff;
      padding: 16px 10px;
      border-radius: 4px;
      font-size: 1.5rem;
      z-index: 1000;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
      opacity: 0;
      transform: translateY(5px);
      transition: opacity 0.2s ease-out, transform 0.2s ease-out;
      width: max-content;         /* Tells the div to grow with the text length */
      max-width: 12.8rem;
      display: block;
      overflow-wrap: break-word;  /* Standard property to wrap long words */
      word-break: break-word;     /* Older fallback to ensure standard words and links wrap */
      // white-space: nowrap;
    }
    .tooltip-bubble.fade-in {
      opacity: 1;
      transform: translateY(0);
    }
    .tooltip-bubble::before {
      content: "";
      position: absolute;
      
      /* Position the arrow horizontally centered at the top of the box */
      bottom: 100%;       /* Places it right above the top border */
      left: 50%;
      transform: translateX(-50%);

      /* The Border Trick: creates a 10px upward triangle */
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #bfc5ca; /* Matches the parent's background color */
    }
  `]
})

export class ToolTipBoxComponent {
  // Using modern signals for text and animation state
  text = signal('');
  animate = signal(false);
}
