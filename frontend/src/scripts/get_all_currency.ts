import axios from "axios";

export interface currency_data {
  name: string;
  data: number;
}

export async function get_all_currency(): Promise<Array<currency_data>> {
  const result: Array<currency_data> = [];
  const header = {
    headers: {
      apikey: "6Aw4LJC9BVGsgJkG76LcXSEQWl1per74",
    },
  };

  const { data } = await axios.get(
    "https://api.apilayer.com/fixer/latest",
    header
  );

  const keys = Object.keys(data.rates);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    result.push({ name: key, data: data.rates[key] });
  }
  return result;
}
