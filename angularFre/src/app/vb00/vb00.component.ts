import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vb00',
  templateUrl: './vb00.component.html',
  // template: '<h1>Oeeee yeaaaah, having fuuuun with the Anguuulaaar</h1>',
  styleUrls: ['./vb00.component.css']
})
export class Vb00Component implements OnInit {
  greeting = "Hello Mister";
  constructor() { }

  ngOnInit() {
  }

}
