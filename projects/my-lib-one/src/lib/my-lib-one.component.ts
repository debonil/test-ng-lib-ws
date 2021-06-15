import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib-one',
  template: `
    <p>
      my-lib-one works!
    </p>
  `,
  styles: [
  ]
})
export class MyLibOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
