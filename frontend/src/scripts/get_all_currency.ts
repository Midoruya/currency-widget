import axios from "axios";

export interface currency_data {
  name: string;
  data: string;
}

export async function get_all_currency(): Promise<Array<currency_data>> {
  const { data } = await axios.get<currency_data[]>(
    "http://[::1]:3000/currency/all"
  );
  return data;
}
