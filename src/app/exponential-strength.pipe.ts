import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  // transform(value: number, exponent?: number): number {
  //   return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  // }

  transform(number: string): string {
    var str = ''+number
    var text = []
    for (let i = str.length - 1, counter = 1; i > -1; i--, counter++) {
        const letter = str[i];
        if(counter%3 == 0){
            text.unshift(letter)
            text.unshift(" ")
        }
        else text.unshift(letter)
    }
    return text.join("");

  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/