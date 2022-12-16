import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brCurrency'
})
export class BrCurrencyPipe implements PipeTransform {

  transform(value?: number) : string | undefined {
    if (value != undefined)
    {
      return "R$" + value;
    }

    else
    {
      return undefined;
    }
  }

}
