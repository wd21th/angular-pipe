import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988


   localA = 4
   get a() {
      return this.localA;
   }
   set a(value) {
      this.localA = value;
      console.log(`localA is changed to ${value}`);
   }

click(){
  console.log("click")

  this.a = 9
}


}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/