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

export async function get_convert_calculate_currency(
  to: string,
  from: string,
  factor: number
): Promise<string> {
  if (factor < 1 || factor == undefined || factor == null) return "0";

  const { data } = await axios.get(
    "http://[::1]:3000/currency/convert/" + from + "/" + to + "/" + factor
  );
  return data as string;
}
