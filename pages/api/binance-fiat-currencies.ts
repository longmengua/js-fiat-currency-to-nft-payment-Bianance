import { NextApiRequest, NextApiResponse } from "next";
import { Binance } from "../../src/util/binance.ts";

export default async function binanceFiatCurrencies(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const outcome = await Binance.fetchTradingPair();
  res.status(200).json(outcome)
}