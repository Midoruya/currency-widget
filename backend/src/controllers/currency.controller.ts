// Uncomment these imports to begin using these cool features!
// 6Aw4LJC9BVGsgJkG76LcXSEQWl1per74
// import {inject} from '@loopback/core';
import {get, param} from '@loopback/rest';
import axios from 'axios';
export class CurrencyController {
  constructor() {}

  @get('/currency/convert/{currency}/{amount}')
  async convertSelectedCurrencies(
    @param.path.string('currency') currency: string,
    @param.path.string('amount') amount: number,
  ): Promise<string[]> {
    const TO_CONVERT = ['RUB', 'CAD', 'HRK', 'JPY'];
    const result: string[] = [];
    console.log(currency.toUpperCase());
    for (const index in TO_CONVERT) {
      await axios
        .get(
          'https://api.apilayer.com/fixer/convert?to=' +
            TO_CONVERT[index] +
            '&from=' +
            currency +
            '&amount=' +
            amount,
          {
            headers: {
              apikey: 'Rg82Wh150Dc7w6dGfdSzBZ2GERugWnBw',
            },
          },
        )
        .then(response =>
          result.push((response.data.result as number).toFixed(2)),
        )
        .catch(err => console.log(err));
    }
    return result;
  }

  @get('/currency/all')
  async getAllCurrency(): Promise<
    {
      name: string;
      data: string;
    }[]
  > {
    const {data} = await axios.get(
      'https://api.apilayer.com/fixer/latest?base=RUB',
      {
        headers: {
          apikey: 'Rg82Wh150Dc7w6dGfdSzBZ2GERugWnBw',
        },
      },
    );
    const keys = Object.keys(data.rates);
    const result: {
      name: string;
      data: string;
    }[] = [];

    for (const key of keys.entries()) {
      result.push({
        name: key[1],
        data: (data.rates[key[1]] as number).toFixed(2),
      });
    }

    return result;
  }
}
