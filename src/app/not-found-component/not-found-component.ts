import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-not-found-component',
  styleUrl: './not-found-component.css',
  templateUrl: './not-found-component.html',
})
export class NotFoundComponent {

  //Input param Properties
  @Input() visible:boolean = false;
  @Input() notFoundMessage:string = 'Nohting Found!'
  @Input() resetLinkText:string = 'Reset';
  @Input() resetLinkRoute:string = '/';

  constructor(){}

  ngOnInit(){}

}
