import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toReadableNumber'
})

// to_readable_number

export class ToReadableNumberPipe implements PipeTransform {

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